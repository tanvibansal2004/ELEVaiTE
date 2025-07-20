import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <SignUp fallbackRedirectUrl="/onboarding" forceRedirectUrl="/onboarding" />
  );
};

export default Page;
