import { Link } from "react-router";
import { AnimatedButtonNewFound } from "./AnimatedButtonNewFound";
import { FeaturedFounds } from "./components/FeaturedFounds";
import { FoundList } from "./components/FoundsList";
import { MainCategories } from "./components/MainCategories";
import { Title } from "./Title";

export function HomePage() {
  return (
    <div className="mt-4 flex flex-col gap-4 p-2">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>-</span>
        <span>Foundouts</span>
      </div>

      <div className="flex items-center justify-between">
        <Title />
        <AnimatedButtonNewFound />
      </div>

      <MainCategories />
      <FeaturedFounds />
      <FoundList />
    </div>
  );
}
