import { Link } from "react-router";

interface MobileMenuListProps {
  children?: React.ReactNode;
  open: boolean;
}

export default function MobileMenuList({ open }: MobileMenuListProps) {
  return (
    <ul
      className={`fixed top-16 right-0 w-full h-[calc(100vh-4rem)] 
        font-medium text-lg
      bg-blue-500/80 border-red-500 grid place-items-center
      z-[9999] transition-transform duration-300 ease-in-out 
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <Link to="/trending">Trending</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/my">My FOs</Link>
    </ul>
  );
}
