import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import PropTypes from "prop-types";
import SocialIcon from "./social-icon";
import { Link } from "react-router-dom";
const MobileNav = ({ isOpen, setOpen }) => {
  return (
    <ul
      className={`${
        isOpen ? "translate-x-0" : "translate-x-[-100%]"
      } flex flex-col md:hidden w-screen h-screen items-center justify-center z-40 transition-all duration-500 bg-white fixed ease-linear gap-10 text-3xl`}
    >
      <li onClick={() => setOpen(!isOpen)}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => setOpen(!isOpen)}>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li onClick={() => setOpen(!isOpen)}>
        <Link to="/about">About</Link>
      </li>
      <div className="flex gap-5">
        <li>
          <SocialIcon
            width="w-[60px]"
            height="h-[60px]"
            icon={<FaInstagram />}
            link="https://www.instagram.com/mj.beautybar?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          />
        </li>
        <li>
          <SocialIcon
            width="w-[60px]"
            height="h-[60px]"
            icon={<FaFacebookF />}
            link="https://www.facebook.com/profile.php?id=61553163094041"
          />
        </li>
        <li>
          <SocialIcon
            width="w-[60px]"
            height="h-[60px]"
            icon={<FaTiktok />}
            link="https://www.tiktok.com/@mj.beauty.bar4"
          />
        </li>
      </div>
    </ul>
  );
};

export default MobileNav;
MobileNav.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};
