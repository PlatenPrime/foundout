import { FoundListItem } from "./FoundListItem";

export function FoundList() {
  return (
    <div>
      <h1 className="my-8 text-2xl text-gray-300">Recent Founds</h1>
      <div className="flex flex-col gap-12 mb-8">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <FoundListItem key={i} />
          ))}
      </div>
    </div>
  );
}
