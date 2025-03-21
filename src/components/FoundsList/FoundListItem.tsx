import { Link } from "react-router";
import { Image } from "../Image/Image";

export function FoundListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className=" md:hidden xl:block xl:w-1/3">
        {" "}
        <Image
          src="design_4b0cb2f9-2cf6-446d-a114-cf3d1bf60f70_large.webp?updatedAt=1742447997364"
          alt="found"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/fos">
          <h2 className="text-4xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to="/fos" className="text-blue-400">
            John Doe
          </Link>
          <span>on</span>
          <Link to="/fos" className="text-blue-400">
            Frontend
          </Link>
          <span>4 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          praesentium saepe adipisci nobis commodi nesciunt? Consequatur
          nesciunt sapiente corporis aliquam est ab, magnam quas vel molestias
          numquam soluta, mollitia minima. Nulla officiis id laboriosam libero
          esse, dignissimos tempora fugit cum quis nam provident non commodi
          maxime maiores! Facilis at nisi sunt esse odit ipsum cupiditate eos
          reiciendis minima, voluptates mollitia. 
        </p>
        <Link to="/fos" className="text-blue-400 underline hover:text-blue-300 text-sm ">Read More...</Link>
      </div>
    </div>
  );
}
