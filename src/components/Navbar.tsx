import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className=" h-16 md:h-20 flex items-center justify-between border border-red-500">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.jpg" className="h-8 w-8" alt="logo" />
        <span>FoundOut</span>
      </div>
      {/*MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE LINK BUTTON */}
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "Menu"}
        </div>
        {/* MOBILE LINK LIST */}
        <div className={`w-full h-screen flex flex-col items-center absolute z-10 top-16 bg-red-500 ${open ? "-right-0" : "-right-[100%]"} ` }>
          menu
        </div>
      </div>
      {/*DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
}
