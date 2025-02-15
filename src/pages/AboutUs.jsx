import WhoWeAre from "../components/WhoWeAre";
import ContactUsForm from "../components/ContactUsForm";
import FAQ from "../components/FAQ";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly align-baseline p-20">
        <WhoWeAre />
        <ContactUsForm />
      </div>
      <FAQ />
    </>
  );
}

export default AboutUs;
