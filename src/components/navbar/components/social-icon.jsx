import PropTypes from "prop-types";
const SocialIcon = ({ icon, width, height, link }) => {
  return (
    <div
      className={`${width} ${height} rounded-md bg-[#663130] hover:bg-black transition-colors text-white duration-500`}
    >
      <a
        href={link}
        target="_blank"
        className="flex h-full w-full items-center justify-center"
      >
        {icon}
      </a>
    </div>
  );
};
SocialIcon.propTypes = {
  icon: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  link: PropTypes.string,
};
export default SocialIcon;
