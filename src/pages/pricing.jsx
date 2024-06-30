import AppointmentButton from "../components/appointment-btn/appointment-btn";
import Lashing from "../components/pricing-grid-sections/lashing/lashing";
import Waxing from "../components/pricing-grid-sections/waxing/waxing";

const PricingPage = () => {
  return (
    <div className="h-auto max-w-screen pt-20 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold uppercase my-10">
        Pricing
      </h1>
      <div className="flex flex-col md:flex-row md:justify-around gap-7 w-full px-5 max-w-[1200px] text-lg">
        <Lashing />
        <Waxing />
      </div>
      <div className="w-full flex justify-center mt-20">
        <AppointmentButton />
      </div>
    </div>
  );
};

export default PricingPage;
