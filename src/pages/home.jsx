import Hero from "../components/hero/hero";
import WeProvideBanner from "../components/we-provide-banner/we-provide-banner";
import OurServices from "../components/our-services/our-services";
import ContactForm from "../components/contact-form/contact-form";
const HomePage = () => {
  return (
    <>
      <Hero />
      <WeProvideBanner />
      <OurServices />
      <ContactForm />
    </>
  );
};

export default HomePage;
