import PropTypes from "prop-types";
const ServiceCategoryTitle = ({ content }) => {
  return <h2 className="text-3xl uppercase">{content}</h2>;
};

ServiceCategoryTitle.propTypes = {
  content: PropTypes.string,
};

export default ServiceCategoryTitle;
