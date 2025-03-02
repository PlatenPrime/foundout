import { MdOutlineLogin } from "react-icons/md";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:grid grid-cols-4 items-center gap-4 xl:gap-8">
      <li>Trending</li>
      <li>Popular</li>
      <li>About</li>
      <li>
        <button className="flex items-center py-2 px-4 rounded-xl bg-blue-800 cursor-pointer ">
          {" "}
          <MdOutlineLogin />
          Login{" "}
        </button>
      </li>
    </ul>
  );
}
