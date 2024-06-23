import PropTypes from "prop-types";
const Input = ({ register, registerName, errors, labelTitle, watch }) => {
  const hasInput = !!watch(registerName);
  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="border-b w-full py-1 focus:outline-none bg-transparent focus:border-black transition-colors peer font-[poppins]"
          type="text"
          id={registerName}
          {...register(registerName)}
          autoComplete="off"
        />
        <label
          className={`${
            hasInput
              ? "-top-4 text-amber-400 text-sm absolute font-[poppins] left-0"
              : "absolute cursor-text left-0 top-1 peer-focus:text-amber-400 peer-focus:text-sm peer-focus:-top-4 font-[poppins] transition-all duration-300 text-white"
          } `}
          htmlFor={registerName}
        >
          {labelTitle}
        </label>
      </div>
      <p className="text-red-500 font-[poppins] absolute">
        {errors[registerName]?.message}
      </p>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  registerName: PropTypes.string,
  labelTitle: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  watch: PropTypes.func,
};

export default Input;
