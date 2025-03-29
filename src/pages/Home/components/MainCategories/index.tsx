import { MdSearch } from "react-icons/md";
import { Link } from "react-router";

export  function MainCategories() {
  return (
    <div className="hidden md:flex bg-slate-900 rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-start flex-wrap gap-2">
        <Link
          to="/fos"
          className="bg-slate-200 text-black rounded-full px-4 py-2"
        >
          All FOs
        </Link>
        <Link
          to="/fos?cat=frontend"
          className="hover:bg-slate-700  rounded-full px-4 py-2"
        >
          Frontend
        </Link>
        <Link
          to="/fos?cat=testing"
          className="hover:bg-slate-700  rounded-full px-4 py-2"
        >
          Testing
        </Link>
        <Link
          to="/fos?cat=node"
          className="hover:bg-slate-700  rounded-full px-4 py-2"
        >
          Node
        </Link>
        <Link
          to="/fos?cat=react"
          className="hover:bg-slate-700  rounded-full px-4 py-2"
        >
          React
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-700 p-2 rounded-full flex items-center gap-2">
        <MdSearch size={24} />

        <input
          className="bg-transparent outline-none"
          placeholder="Search a FO..."
          type="text"
        />
      </div>
    </div>
  );
}
