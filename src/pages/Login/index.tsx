import { SignIn } from "@clerk/clerk-react";

export function LoginPage() {
  return (
    <div className=" h-screen grid place-content-center">
      <SignIn
     
        signUpUrl="/register"
      />
    </div>
  );
}
