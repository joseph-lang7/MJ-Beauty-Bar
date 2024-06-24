import PropTypes from "prop-types";
const SpecificService = ({ serviceTitle, dollarsPrice, durationForRefill }) => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="flex flex-col">
        <h3>{serviceTitle}</h3>
        <p>{durationForRefill}</p>
      </div>
      <p className="font-bold text-right flex items-center">{dollarsPrice}</p>
    </div>
  );
};

SpecificService.propTypes = {
  serviceTitle: PropTypes.string,
  dollarsPrice: PropTypes.string,
  durationForRefill: PropTypes.string,
};

export default SpecificService;
