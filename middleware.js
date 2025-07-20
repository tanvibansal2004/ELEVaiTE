import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// all the routes protected from unauthorized access - ones that are NOT available to the user if NOT signed in.
const isProtectedRoute = createRouteMatcher([ // this is a utility from Clerk that helps match URL patterns
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)",
])

// auth returns an object that looks smth like this ⬇️
// {
//   userId: string | null,
//   sessionId: string | null,
//   orgId: string | null,
//   getToken: () => Promise<string | null>,
//   redirectToSignIn: () => NextResponse,
//   // other helper functions too
// }

export default clerkMiddleware(
  // async callback that takes auth and req objects to add protection to our app
  async (auth, req) => {
    const {userId} = await auth();

    if(!userId && isProtectedRoute(req)) {
      const {redirectToSignIn} = await auth(); // redirectToSignIn is a function that returns a redirect response to the sign-in page.
      return redirectToSignIn();
    }

    return NextResponse.next();
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};