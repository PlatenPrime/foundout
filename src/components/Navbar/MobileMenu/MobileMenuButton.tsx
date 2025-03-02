import { MdMenu, MdMenuOpen } from "react-icons/md";

interface MobileNenuButtonProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenuButton({
  open,
  setOpen,
}: MobileNenuButtonProps) {
  return (
    <div
      className="cursor-pointer text-2xl"
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? <MdMenuOpen /> : <MdMenu />}
    </div>
  );
}
