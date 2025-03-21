import { Link } from "react-router";
import { Image } from "../Image/Image";

interface SideFoundProps {
  imageSrc: string;
  order: string;
  category: string;
  title: string;
  date: string;
}

export default function SideFound({
  imageSrc,
  order,
  category,
  title,
  date,
}: SideFoundProps) {
  return (
    <div className="w-full lg:h-1/3  flex  gap-2">
      <div className=" w-1/3 aspect-video" >
      <Image
        src={imageSrc}
        className="rounded-3xl object-cover w-full h-full "
        alt="found"
        w="298"
  
      />
      </div>
     

      <div className="flex flex-col w-2/3">
        <div className="flex  items-center gap-4 text-sm lg:text-base">
          <h2 className="font-simibold lg:text-lg">{order}</h2>
          <Link className="text-blue-200 lg:text-lg" to="/fos">
            {category}
          </Link>
          <span className="text-gray-500">{date}</span>
        </div>

        <Link
          to="/fos"
          className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
