import { Image } from "../Image/Image";

export default function Logo() {
  return (
    <div className="flex items-center gap-4 text-2xl font-bold  ">
      <Image
        src="logo.jpg?updatedAt=1741764157100"
        className="h-8 w-8 rounded-2xl"
        alt="logo"
   
      />
      <span>FoundOut</span>
    </div>
  );
}
