import { MdOutlineLogin } from "react-icons/md";
import { Link } from "react-router";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:grid grid-cols-4 items-center gap-4 xl:gap-8">
      <Link to="/trending">Trending</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/my">My FOs</Link> 
      <Link to="/login">
        <button className="flex items-center py-2 px-4 rounded-xl bg-blue-800 cursor-pointer ">
          {" "}
          <MdOutlineLogin />
          Login{" "}
        </button>
      </Link>
    </ul>
  );
}
