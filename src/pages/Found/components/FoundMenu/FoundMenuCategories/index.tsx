import { Link } from "react-router";

export function FoundMenuCategories() {
  return (
    <div className=" grid py-4 text-sm font-medium gap-4">
      <h2>Categories</h2>
      <div className="grid gap-2 text-sm">
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=frontend">Frontend</Link>
        <Link to="/fos?cat=frontend">Frontend</Link>
      </div>
    </div>
  );
}
