import { useState } from "react";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuList from "./MobileMenuList";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="md:hidden flex">
      <MobileMenuButton open={open} setOpen={setOpen} />
      <MobileMenuList open={open} />
    </div>
  );
}
