import AppointmentButton from "../components/appointment-btn/appointment-btn";
import Lashing from "../components/pricing-grid-sections/lashing/lashing";
import Waxing from "../components/pricing-grid-sections/waxing/waxing";

const PricingPage = () => {
  return (
    <div className="h-auto max-w-screen pt-20 flex flex-col items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full px-5 md:px-10">
        <Lashing />
        <Waxing />
        <AppointmentButton />
      </div>
    </div>
  );
};

export default PricingPage;
