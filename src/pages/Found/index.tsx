import { Link } from "react-router";
import FoundMenuActions from "../../components/FoundMenuActions";
import { Image } from "../../components/Image/Image";
import Search from "../../components/Search";

export function FoundPage() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
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
            voluptatum et eaque illo molestias debitis minima eum? Veritatis
            enim molestias placeat deserunt ipsa repudiandae nam aperiam
            inventore consectetur voluptatum?
          </p>
        </div>
        <div className="hidden lg:block">
          <Image
            src="design_4b0cb2f9-2cf6-446d-a114-cf3d1bf60f70_large.webp?updatedAt=1742447997364"
            alt="found"
            w="200"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique voluptatum, voluptas impedit sapiente eos asperiores sed
            error modi nulla est fugiat quisquam facere dignissimos fuga quos
            quas quo laudantium! Odit excepturi magni facere ipsa odio voluptate
            asperiores voluptas maiores fugiat ducimus quia inventore quibusdam,
            doloribus adipisci ratione dolorem ex magnam repellendus, quam natus
            quo optio omnis aspernatur consequuntur! Quis. Aut atque cum
            consectetur, molestiae dolorum harum adipisci similique nam commodi
            suscipit excepturi nobis, aliquam, dicta quo provident veniam ut!
            Deserunt consectetur tempora accusamus veniam quod harum omnis error
            magnam. Sapiente consequatur neque in voluptates minus, repudiandae
            possimus nam natus autem soluta iure vero quia, vitae delectus odit
            quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique voluptatum, voluptas impedit sapiente eos asperiores sed
            error modi nulla est fugiat quisquam facere dignissimos fuga quos
            quas quo laudantium! Odit excepturi magni facere ipsa odio voluptate
            asperiores voluptas maiores fugiat ducimus quia inventore quibusdam,
            doloribus adipisci ratione dolorem ex magnam repellendus, quam natus
            quo optio omnis aspernatur consequuntur! Quis. Aut atque cum
            consectetur, molestiae dolorum harum adipisci similique nam commodi
            suscipit excepturi nobis, aliquam, dicta quo provident veniam ut!
            Deserunt consectetur tempora accusamus veniam quod harum omnis error
            magnam. Sapiente consequatur neque in voluptates minus, repudiandae
            possimus nam natus autem soluta iure vero quia, vitae delectus odit
            quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique voluptatum, voluptas impedit sapiente eos asperiores sed
            error modi nulla est fugiat quisquam facere dignissimos fuga quos
            quas quo laudantium! Odit excepturi magni facere ipsa odio voluptate
            asperiores voluptas maiores fugiat ducimus quia inventore quibusdam,
            doloribus adipisci ratione dolorem ex magnam repellendus, quam natus
            quo optio omnis aspernatur consequuntur! Quis. Aut atque cum
            consectetur, molestiae dolorum harum adipisci similique nam commodi
            suscipit excepturi nobis, aliquam, dicta quo provident veniam ut!
            Deserunt consectetur tempora accusamus veniam quod harum omnis error
            magnam. Sapiente consequatur neque in voluptates minus, repudiandae
            possimus nam natus autem soluta iure vero quia, vitae delectus odit
            quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique voluptatum, voluptas impedit sapiente eos asperiores sed
            error modi nulla est fugiat quisquam facere dignissimos fuga quos
            quas quo laudantium! Odit excepturi magni facere ipsa odio voluptate
            asperiores voluptas maiores fugiat ducimus quia inventore quibusdam,
            doloribus adipisci ratione dolorem ex magnam repellendus, quam natus
            quo optio omnis aspernatur consequuntur! Quis. Aut atque cum
            consectetur, molestiae dolorum harum adipisci similique nam commodi
            suscipit excepturi nobis, aliquam, dicta quo provident veniam ut!
            Deserunt consectetur tempora accusamus veniam quod harum omnis error
            magnam. Sapiente consequatur neque in voluptates minus, repudiandae
            possimus nam natus autem soluta iure vero quia, vitae delectus odit
            quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            similique voluptatum, voluptas impedit sapiente eos asperiores sed
            error modi nulla est fugiat quisquam facere dignissimos fuga quos
            quas quo laudantium! Odit excepturi magni facere ipsa odio voluptate
            asperiores voluptas maiores fugiat ducimus quia inventore quibusdam,
            doloribus adipisci ratione dolorem ex magnam repellendus, quam natus
            quo optio omnis aspernatur consequuntur! Quis. Aut atque cum
            consectetur, molestiae dolorum harum adipisci similique nam commodi
            suscipit excepturi nobis, aliquam, dicta quo provident veniam ut!
            Deserunt consectetur tempora accusamus veniam quod harum omnis error
            magnam. Sapiente consequatur neque in voluptates minus, repudiandae
            possimus nam natus autem soluta iure vero quia, vitae delectus odit
            quisquam.
          </p>
        </div>

        {/* menu */}
        <div className=" sticky px-4 h-max top-8">
          <h2 className="text-sm" >Author</h2>
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

          <p className="text-sm text-gray-400" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            aperiam nisi nostrum placeat excepturi reiciendis asperiores
            voluptates laudantium fuga dicta quia ut rem beatae sequi labore
            dolore perspiciatis, illo rerum?
          </p>
          <div className="flex gap-2">
            <Link to="/fos">FB</Link>
            <Link to="/fos">IG</Link>
          </div>

          <FoundMenuActions />

          <div className=" grid py-4 text-sm font-medium gap-4">
            <h2>Categories</h2>
            <div className="grid gap-2 text-sm">
              <Link to="/fos?cat=frontend">Frontend</Link>
              <Link to="/fos?cat=frontend">Frontend</Link>
              <Link to="/fos?cat=frontend">Frontend</Link>
              <Link to="/fos?cat=frontend">Frontend</Link>
              <Link to="/fos?cat=frontend">Frontend</Link>
              <Link to="/fos?cat=frontend">Frontend</Link>
            </div>
          </div>

          <div className="py-4 text-sm font-medium">
            <h1>Search</h1>
            <Search />
          </div>


        </div>
      </div>

    </div>
  );
}
