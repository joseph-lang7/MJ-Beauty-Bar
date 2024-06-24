import Lashing from "../components/pricing-grid-sections/lashing/lashing";

const PricingPage = () => {
  return (
    <div className="h-auto max-w-screen pt-20 flex flex-col items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full px-5 md:px-10">
        <Lashing />
      </div>
    </div>
  );
};

export default PricingPage;
