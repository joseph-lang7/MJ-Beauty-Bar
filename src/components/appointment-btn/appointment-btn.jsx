const AppointmentButton = () => {
  return (
    <button className="relative inline-block px-4 py-2 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1.5 translate-y-1.5 bg-[#663130] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#663130] group-hover:bg-[#663130]"></span>
      <span className="relative text-[#663130] font-[poppins] group-hover:text-white">
        Book Appointment
      </span>
    </button>
  );
};

export default AppointmentButton;
