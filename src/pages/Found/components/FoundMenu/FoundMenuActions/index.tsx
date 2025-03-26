import { MdDelete, MdSave } from "react-icons/md";

export default function FoundMenuActions() {
  return (
    <div className="py-4 text-sm" >
      <h1>Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <MdSave />
        <span>Save this Found</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <MdDelete />
        <span>Delete this Found</span>
      </div>
    </div>
  );
}
