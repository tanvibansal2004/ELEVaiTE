// follow clerk convention to create sign in page.
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <SignIn fallbackRedirectUrl="/onboarding" forceRedirectUrl="/onboarding" />
  );
};

export default Page;
