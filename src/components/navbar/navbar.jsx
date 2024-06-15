import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[150px] absolute bg-[#FAF2EE] flex justify-between items-center px-5">
        <div className="z-50">Logo</div>
        <div className="block md:hidden z-50">
          <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
        </div>
        {/* Desktop Nav */}
        <ul className="md:flex gap-5 hidden">
          <li>Item1</li>
          <li>Item1</li>
          <li>Item1</li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      <ul
        className={`${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        } flex flex-col md:hidden w-screen h-screen items-center justify-center z-40 transition-all duration-500 bg-white fixed ease-linear gap-10 text-3xl`}
      >
        <li>Item1</li>
        <li>Item1</li>
        <li>Item1</li>
        <li>
          <div className="flex gap-5 mt-5">
            <div className="w-[60px] h-[60px] rounded-md bg-[#663130]">
              <div className="text-white flex h-full w-full items-center justify-center text-4xl">
                <FaInstagram />
              </div>
            </div>
            <div className="w-[60px] h-[60px] rounded-md bg-[#663130]">
              <div className="text-white flex h-full w-full items-center justify-center">
                <FaFacebookF />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
