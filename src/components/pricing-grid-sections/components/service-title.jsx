import PropTypes from "prop-types";
const ServiceTitle = ({ content }) => {
  return (
    <div className="w-max flex flex-col">
      <h3 className="text-xl">{content}</h3>
      <span className="w-full h-[1px] bg-black"></span>
    </div>
  );
};
ServiceTitle.propTypes = {
  content: PropTypes.string,
};
export default ServiceTitle;
