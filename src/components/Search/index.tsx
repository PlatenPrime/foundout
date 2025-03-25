import { MdSearch } from "react-icons/md";

export default function Search() {
  return (
    <div className="bg-gray-700 p-2 rounded-full flex items-center gap-2">
      <MdSearch />
      <input
        type="text"
        placeholder="Search a found"
        className="bg-transparent outline-none w-full"
      />
    </div>
  );
}
