import { db } from "../prisma";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const generateIndustryInsights = inngest.createFunction(
  { name: "Generate Industry Insights" },
  { cron: "0 0 * * 0" }, // cron job - basically means scheduling our function (all 5 positions mean something) - here - weekly on Sunday at Midnight.
  async ({ step }) => {
    const industries = await step.run("Fetch Industries", async () => {
      return await db.industryInsight.findMany({
        select: { industry: true },
      });
    }); // basically we will get all the industries inside this industries variable.

    for (const { industry } of industries) {
      // here we have to make some API Calls - inngest provides some functions to make such API calls.
      const prompt = `
            Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
            {
              "salaryRanges": [
                  { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
              ],
              "growthRate": number,
              "demandLevel": "HIGH" | "MEDIUM" | "LOW",
              "topSkills": ["skill1", "skill2"],
              "marketOutlook": "POSITIVE" | "NEUTRAL" | "NEGATIVE",
              "keyTrends": ["trend1", "trend2"],
              "recommendedSkills": ["skill1", "skill2"]
            }
  
            IMPORTANT: Return ONLY the JSON. No additional text, notes. or markdown formatting.
            Include at least 5 common roles for salary ranges.
            Growth rate should be a percentage.
            Include at least 5 skills and trends.
        `;

      const res = await step.ai.wrap(
        "gemini",
        async (p) => {
          return await model.generateContent(p);
        },
        prompt
      );

      const text = res.response.candidates[0].content.parts[0].text || "";
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
      const insights = JSON.parse(cleanedText);

      await step.run(`Update ${industry} insights`, async () => {
        await db.industryInsight.update({
          where: {industry},
          data: {
            ...insights,
            lastUpdated: new Date(),
            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          },
        });
      })
    }
  }
);
