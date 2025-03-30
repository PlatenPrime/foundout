import { Link } from "react-router";
import Search from "../../../../components/Search";

export function FeedSideMenu() {
  return (
    <div className="px-4 h-max sticky top-8">
      <h2 className="mb-4 text-sm font-medium">Search</h2>
      <Search />
      <h2 className="mt-8 text-sm font-medium">Filters</h2>
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white/20 checked:bg-blue-500"
          />
          Newest
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white/20 checked:bg-blue-500"
          />
          Popular
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white/20 checked:bg-blue-500"
          />
           Trending
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-500 cursor-pointer rounded-sm bg-white/20 checked:bg-blue-500"
          />
          Oldest
        </label>
      </div>
      <h2 className="mt-8 text-sm font-medium">Categories</h2>
      <div className="flex flex-col gap-2 text-sm">
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=backend">Backend</Link>
        <Link to="/fos?cat=fullstack">Fullstack</Link>
        <Link to="/fos?cat=testing">Testing</Link>
        <Link to="/fos?cat=devops">Devops</Link>
      </div>
    </div>
  );
}
