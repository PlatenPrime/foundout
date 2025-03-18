import { Link } from "react-router";
import MainCategories from "../../components/MainCategories/MainCategories";
import AnimatedButtonNewFO from "./AnimatedButtonNewFO";
import { Title } from "./Title";
import { FeaturedFounds } from "../../components/FeaturedFounds/FeaturedFounds";

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
        <AnimatedButtonNewFO />
      </div>

      <MainCategories />
      <FeaturedFounds />
    </div>
  );
}
