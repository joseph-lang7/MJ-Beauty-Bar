import Hamburger from "hamburger-react";
import { useState } from "react";
import { MobileNav, DesktopNav } from "./components";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-[100px] bg-[#FAF2EE] flex justify-between items-center px-5 fixed z-50">
        <Link to="/">
          <div className="text-3xl font-bold">MJ Beauty Bar</div>
        </Link>
        <div className="block md:hidden z-[60]">
          <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
        </div>
        <DesktopNav />
      </nav>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
