import { Button } from "@/components/ui/button";
import { SignOutButton, SignedIn } from "@clerk/nextjs";


export default function Home() {
  return (
    <>
    <h1>Building AI content Generator</h1>
      <Button>Subscribe</Button>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    
    </>
  );
}
