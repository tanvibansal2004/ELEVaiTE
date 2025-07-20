import { getAssessments } from "@/actions/interview"
import StatsCards from "./_components/statsCards";
import PerformanceChart from "./_components/performanceChart";
import QuizList from "./_components/quizList";

const InterviewPage = async () => {
  const assessments = await getAssessments();
  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold gradient-title mb-5">
          Interview Preparation
        </h1>

        <div className="space-y-6">
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </div>
      </div>
    </div>
  )
}

export default InterviewPage