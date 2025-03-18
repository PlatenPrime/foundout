import MainFound from "./MainFound";
import SideFound from "./SideFound";

export function FeaturedFounds() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <MainFound
        imageSrc="logo.jpg?updatedAt=1741764157100"
        order="02."
        category="Frontend"
        title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        date="5 days ago"
      />

      {/* OTHERS */}

      <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
        {/* FOUND */}

        <SideFound
          imageSrc="logo.jpg?updatedAt=1741764157100"
          order="02."
          category="Frontend"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          date="5 days ago"
        />
          <SideFound
          imageSrc="logo.jpg?updatedAt=1741764157100"
          order="03."
          category="Frontend"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          date="5 days ago"
        />
          <SideFound
          imageSrc="logo.jpg?updatedAt=1741764157100"
          order="04."
          category="Frontend"
          title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          date="5 days ago"
        />



        {/* FOUND END */}
      </div>
    </div>
  );
}
