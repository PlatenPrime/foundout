import { Link } from "react-router";
import { Image } from "../Image/Image";

interface MainFoundProps {
  imageSrc: string;
  order: string;
  category: string;
  title: string;
  date: string;
}

export default function MainFound({
  imageSrc,
  order,
  category,
  title,
  date,
}: MainFoundProps) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-4">
      <Image
        src={imageSrc}
        className="rounded-3xl object-cover"
        alt="found"
        w="895"
      />
      <div className="flex items-center gap-4">
        <h2 className="font-simibold lg:text-lg">{order}</h2>
        <Link className="text-blue-200 lg:text-lg" to="/fos">
          {category}
        </Link>
        <span className="text-gray-500">{date}</span>
      </div>
      <Link
        to="/fos"
        className="text-xl lg:text-3xl font-semibold lg:font-bold "
      >
        {title}
      </Link>
    </div>
  );
}
