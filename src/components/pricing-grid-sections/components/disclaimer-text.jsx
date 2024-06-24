import PropTypes from "prop-types";
const DisclaimerText = ({ content }) => {
  return <p className="italic text-xs md:text-sm">{content}</p>;
};
DisclaimerText.propTypes = {
  content: PropTypes.string,
};
export default DisclaimerText;
