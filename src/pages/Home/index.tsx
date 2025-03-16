import { Link } from "react-router";
import AnimatedButtonNewFO from "./AnimatedButtonNewFO";
import { Title } from "./Title";

export function HomePage() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>-</span>
        <span>Foundouts</span>
      </div>

      <div className="flex items-center justify-between">
        <Title />
        <AnimatedButtonNewFO />
      </div>
    </div>
  );
}
