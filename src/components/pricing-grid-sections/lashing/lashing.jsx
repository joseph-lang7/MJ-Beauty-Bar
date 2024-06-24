import DisclaimerText from "../components/disclaimer-text";
import ServiceCategoryTitle from "../components/service-category-title";
import ServiceTitle from "../components/service-title";
import SpecificService from "../components/specific-service";
const Lashing = () => {
  return (
    <div className="w-full md:w-[300px] flex flex-col gap-5">
      <ServiceCategoryTitle content="Lashing" />
      <div className="flex flex-col gap-2 w-full">
        <ServiceTitle content="Eyelash Extensions" />
        <SpecificService
          serviceTitle="Classic Fill"
          durationForRefill="(2 week / 3 week)"
          dollarsPrice="$150 / $70 / $80"
        />
        <SpecificService
          serviceTitle="Light Volume"
          durationForRefill="(2 week / 3 week)"
          dollarsPrice="$170 / $80 / $90"
        />
        <SpecificService
          serviceTitle="Mega Volume"
          durationForRefill="(2 week / 3 week)"
          dollarsPrice="$200 / $90 / $110"
        />
        <p className="italic text-sm">
          *1 extension to 1 natural lash with no open fans*
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <ServiceTitle content="Add Ons" />
        <SpecificService serviceTitle="Color" dollarsPrice="$15" />
        <SpecificService serviceTitle="Lash Removal" dollarsPrice="$20" />
        <div className="flex flex-col gap-1">
          <DisclaimerText content="*Lash fills past 3 weeks (21 days) will be charged a full set. *" />
          <DisclaimerText
            content=" *Must have 50% or more of extensions remaining on day of fill. Less
            than 50% will be charged as a new set*"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <ServiceTitle content="Lash Lift" />
        <SpecificService serviceTitle="Lash Lift & Tint" dollarsPrice="$80" />
        <SpecificService serviceTitle="Lash Lift Only" dollarsPrice="$60" />
        <SpecificService serviceTitle="Lash Tint Only" dollarsPrice="$30" />
      </div>
    </div>
  );
};

export default Lashing;
