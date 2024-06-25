import ServiceCategoryTitle from "../components/service-category-title";
import ServiceTitle from "../components/service-title";
import SpecificService from "../components/specific-service";
const Waxing = () => {
  return (
    <div className="w-full md:w-[310px] flex flex-col gap-5">
      <ServiceCategoryTitle content="Waxing" />
      <div className="flex flex-col gap-2 w-full">
        <ServiceTitle content="Face" />
        <SpecificService serviceTitle="Eyebrows" dollarsPrice="$20" />
        <SpecificService serviceTitle="Upper Lip" dollarsPrice="$10" />
        <SpecificService serviceTitle="Chin" dollarsPrice="$10" />
        <SpecificService serviceTitle="Nose" dollarsPrice="$10" />
        <SpecificService
          serviceTitle="Side Burns & Cheeks"
          dollarsPrice="$20"
        />
        <SpecificService serviceTitle="Full Face" dollarsPrice="$60" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <ServiceTitle content="Upper Body" />
        <SpecificService serviceTitle="Underarms" dollarsPrice="$30" />
        <SpecificService
          serviceTitle="Half Arm (Below Elbow)"
          dollarsPrice="$20"
        />
        <SpecificService
          serviceTitle="Full Arm (Not Underarm)"
          dollarsPrice="$40"
        />
        <SpecificService serviceTitle="Back" dollarsPrice="$70+" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <ServiceTitle content="Lower Body" />
        <SpecificService
          serviceTitle="Half Leg (Below Knee)"
          dollarsPrice="$40"
        />
        <SpecificService
          serviceTitle="Full Leg (Not Bikini)"
          dollarsPrice="$70"
        />
        <SpecificService serviceTitle="Bikini Line" dollarsPrice="$45" />
      </div>
    </div>
  );
};

export default Waxing;
