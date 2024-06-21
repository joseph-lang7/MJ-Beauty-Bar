import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialIcon from "./social-icon";
import navItems from "../../../constants";
const DesktopNav = () => {
  return (
    <ul className="md:flex gap-5 hidden md:items-center">
      {navItems.map((navItem) => (
        <li
          className=" inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-yellow-900 before:via-orange-900 before:to-yellow-900 hover:before:w-full hover:before:opacity-100 capitalize"
          key={navItem.href}
        >
          <Link to={navItem.href}>{navItem.label}</Link>
        </li>
      ))}
      <li className="text-2xl hover:text-black transition-all duration-500">
        <a href="/" target="_blank">
          <SocialIcon
            width="w-[45px]"
            height="h-[45px]"
            icon={<FaInstagram />}
            link="https://www.instagram.com/mj.beautybar?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          />
        </a>
      </li>
      <li className="text-xl hover:text-black transition-all duration-500">
        <a href="/" target="_blank">
          <SocialIcon
            width="w-[45px]"
            height="h-[45px]"
            icon={<FaFacebookF />}
            link="https://www.facebook.com/profile.php?id=61553163094041"
          />
        </a>
      </li>
      <li className="text-xl hover:text-black transition-all duration-500">
        <a href="/" target="_blank">
          <SocialIcon
            width="w-[45px]"
            height="h-[45px]"
            icon={<FaTiktok />}
            link="https://www.tiktok.com/@mj.beauty.bar4"
          />
        </a>
      </li>
    </ul>
  );
};

export default DesktopNav;
