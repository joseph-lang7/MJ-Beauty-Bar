import PropTypes from "prop-types";
const Input = ({ placeholder, type }) => {
  return (
    <input
      className="bg-transparent focus:outline-none border-b-[1px] border-b-neutral-300 font-[poppins] pl-2 py-1 capitalize focus:border-b-white placeholder-white transition-colors duration-300"
      type={type}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
