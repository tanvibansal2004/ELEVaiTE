# ELEVaiTE: Your AI-Powered Career Coach

![ELEVaiTE Banner](<img width="1892" height="826" alt="image" src="https://github.com/user-attachments/assets/c6817c6b-7dc4-40c5-a332-04a9fda7e634" />
)

## 🚀 Project Overview

ELEVaiTE is a comprehensive, AI-powered career coaching platform designed to empower job seekers and professionals in navigating their career paths with confidence. Leveraging cutting-edge artificial intelligence, ELEVaiTE provides personalized insights, tools, and preparation resources to help users stand out in today's competitive job market.

Whether you're crafting a compelling resume, staying ahead of industry trends, or acing your next interview, ELEVaiTE is your dedicated partner in career advancement.

## ✨ Features

* **Current Industry Trends:** Get real-time, personalized updates on industry trends tailored to your specific field, ensuring you're always informed and relevant.

* **AI-Powered Resume Builder:** Create professional, impactful resumes with AI-generated suggestions and improvements, optimizing your document for applicant tracking systems (ATS) and human recruiters.

* **AI-Generated Cover Letter:** Effortlessly generate personalized cover letters that highlight your strengths and align with job descriptions, increasing your chances of getting noticed.

* **Mock Interview Prep Quizzes:** Practice for real-life interviews with AI-powered mock quizzes, receiving instant scores and actionable improvement tips to refine your responses and confidence.

## 🛠️ Technologies Used

ELEVaiTE is built with a robust and modern tech stack to deliver a seamless and powerful user experience:

* **Frontend Framework:** Next.js

* **Database:** PostgreSQL

* **Background Jobs/Workflow:** Inngest

* **Authentication:** Clerk

* **AI Model:** Google Gemini API

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)

* npm or yarn

* PostgreSQL database instance

* Clerk account and API keys

* Google Cloud Project with Gemini API enabled and API key

* Inngest account and API keys

### Installation

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/ELEVaiTE.git](https://github.com/your-username/ELEVaiTE.git)
   cd ELEVaiTE
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your environment variables. Replace the placeholder values with your actual keys.

   ```
   DATABASE_URL="postgresql://user:password@host:port/database"
   CLERK_SECRET_KEY="sk_live_..."
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
   INNGEST_SIGNING_KEY="sign_..."
   INNGEST_EVENT_KEY="event_..."
   GEMINI_API_KEY="your_gemini_api_key"
   ```

4. **Database Setup:**
   Run database migrations (assuming you have a `prisma` setup or similar for your Postgres database):

   ```bash
   npx prisma migrate dev --name init
   ```

   *Note: Adjust this command based on your ORM/database migration tool.*

5. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📸 Screenshots

![Resume Builder Screenshot](<img width="1893" height="828" alt="image" src="https://github.com/user-attachments/assets/3fffa6e0-8104-4fa2-b600-e058f8c6ec9e" />
)
*An example of the AI-powered resume builder in action.*

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! ⭐

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Tanvi Bansal - [bansaltanvi2004@gmail.com](mailto:bansaltanvi2004@gmail.com)
