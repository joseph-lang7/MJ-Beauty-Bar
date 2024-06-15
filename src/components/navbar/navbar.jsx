import Hamburger from "hamburger-react";
import { useState } from "react";
import { MobileNav, DesktopNav } from "./components";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[150px] absolute bg-[#FAF2EE] flex justify-between items-center px-5">
        <div className="z-50">Logo</div>
        <div className="block md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
        </div>
        <DesktopNav />
      </nav>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Navbar;
