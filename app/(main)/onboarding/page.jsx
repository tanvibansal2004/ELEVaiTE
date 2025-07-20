import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/data/industries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboardingForm";

const OnboardingPage = async () => {
  // check if user is already onboarded - if yes, redirect.
  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
