import { useState } from "react";
import { FoundList } from "../Home/components/FoundsList";
import { FeedSideMenu } from "./components/FeedSideMenu";

export function FeedPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">Feed</h1>
      <button 
      onClick={() => setIsFilterOpen((prev) => !prev)}
      className="w-max md:hidden bg-blue-500 rounded-xl py-3 px-4 text-white font-medium cursor-pointer">
        {isFilterOpen ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="flex-6">
          <FoundList />
        </div>
        <div className={`${isFilterOpen? "block" : "hidden"} md:block flex-1`}>
          <FeedSideMenu />
        </div>
      </div>
    </div>
  );
}
