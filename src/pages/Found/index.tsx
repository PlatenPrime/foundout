import FoundComments from "./components/FoundComments";
import { FoundHeader } from "./components/FoundHeader";
import { FoundMenu } from "./components/FoundMenu";
import { FoundText } from "./components/FoundText";

export function FoundPage() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <FoundHeader />
      <div className="flex flex-col md:flex-row gap-8">
        <FoundText />
        <FoundMenu />
      </div>
      <FoundComments />
    </div>
  );
}
