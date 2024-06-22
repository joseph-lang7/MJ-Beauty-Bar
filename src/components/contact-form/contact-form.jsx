import Input from "./components/input";
const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:items-center">
      <div className="flex-1 px-10 w-full h-full justify-center flex flex-col gap-5 capitalize pb-20 md:pb-0">
        <h2 className="text-4xl sm:text-6xl">
          Experience our exceptional{" "}
          <span className="text-[#A27474]">beauty rituals</span>
        </h2>
        <h3 className="text-2xl">Discover Radiance</h3>
        <p className="font-[poppins] max-w-[600px]">
          Step into a world of luxurious self-care and rejuvenation with our
          carefully curated selection of premier beauty rituals. Designed to
          pamper and elevate your senses, each ritual is crafted with the finest
          ingredients and expert techniques to deliver exceptional results
        </p>
      </div>
      <form className="flex-1 w-full bg-[#663130] h-full text-white py-20 px-10">
        <h3 className="capitalize text-center text-4xl mb-10">
          book your <span className="italic">treatment</span>
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-3 gap-10">
          <Input type="text" placeholder="full name*" />
          <Input type="time" placeholder="time*" />
          <Input type="text" placeholder="service*" />
          <Input type="text" placeholder="email*" />
          <Input type="date" placeholder="date*" />
          <Input type="text" placeholder="phone" />
        </div>
        <button className="w-full capitalize text-neutral-300 bg-transparent border-[1px] border-white mt-10 py-2 font-[poppins] text-sm hover:bg-white hover:text-[#663130] transition-colors duration-500">
          send request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
