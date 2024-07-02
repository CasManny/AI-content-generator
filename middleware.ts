import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

// This is telling clerk service provider to protect the following routes below; meaning you must be authenticated
// before you can access this route
const isProtectedRoute = createRouteMatcher([
  // "/dashboard(.*)",
  // "/"

])

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
