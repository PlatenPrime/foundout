import { Link } from "react-router";
import { Image } from "../../../../components/Image/Image";

export  function FoundHeader() {
  return (
    <div className="flex gap-8  ">
      <div className=" flex flex-col gap-8">
        <h1 className="text-lg md:3xl xl:text-4xl 2xl:text-5xl font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
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
        <p className="text-gray-300 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
          voluptatum et eaque illo molestias debitis minima eum? Veritatis enim
          molestias placeat deserunt ipsa repudiandae nam aperiam inventore
          consectetur voluptatum?
        </p>
      </div>


      <div className="hidden lg:grid place-content-center shrink-0  ">
        <Image
          src="design_4b0cb2f9-2cf6-446d-a114-cf3d1bf60f70_large.webp?updatedAt=1742447997364"
          alt="found"
          w="200"
          className="rounded-2xl object-cover "
        />
      </div>
    </div>
  );
}
