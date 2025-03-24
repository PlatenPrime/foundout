import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function Navbar() {
  return (
    <div
      className=" h-16 md:h-20 
    flex items-center justify-between 
    bg-blue-500 p-2
    text-white
    xl:px-20
    "
    >
      <Logo />
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
}
