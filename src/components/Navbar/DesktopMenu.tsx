import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:grid grid-cols-4 items-center gap-4 xl:gap-8">
      <Link to="/trending">Trending</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/my">My FOs</Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </ul>
  );
}
