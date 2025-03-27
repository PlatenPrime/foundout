import { Image } from "../../../../components/Image/Image";

export function FoundComment() {
  return (
    <div className="grid gap-2 bg-gray-500/50 rounded-xl p-4 ">
      <div className="flex items-center gap-2">
        <Image
          src="logo.jpg"
          alt="User Photo"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
          h="40"
        />
<span className="font-semibold" >John Doe</span>
<span className="font-light text-sm text-gray-300" >2 days ago</span>


      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        suscipit reiciendis, ducimus fuga omnis tempore magni voluptatum
        quisquam, natus a ullam repudiandae, ut voluptates quas aliquam
        repellat? Cupiditate, tempore aliquam?
      </p>
    </div>
  );
}
