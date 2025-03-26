import { Link } from "react-router";
import { Image } from "../../../../../components/Image/Image";

export function FoundMenuAuthor() {
  return (
    <div className="grid gap-4">
      <h2 className="text-xl fond-semibold text-center">Author</h2>
      <div className="flex items-center gap-2">
        <Image
          src="logo.jpg"
          alt="User Photo"
          className="w-12 h-12 rounded-full object-cover"
          w="48"
          h="48"
        />
        <Link to="/fos">John Doe</Link>
      </div>

      <p className="text-sm text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui aperiam
        nisi nostrum placeat excepturi reiciendis asperiores voluptates
        laudantium fuga dicta quia ut rem beatae sequi labore dolore
        perspiciatis, illo rerum?
      </p>
      <div className="flex gap-2">
        <Link to="/fos">FB</Link>
        <Link to="/fos">IG</Link>
      </div>
    </div>
  );
}
