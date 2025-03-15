import { SignUp } from "@clerk/clerk-react";

export function RegisterPage() {
  return (
    <div className=" h-screen grid place-content-center">

      <SignUp  signInUrl="/login" />
    </div>
  );
}
