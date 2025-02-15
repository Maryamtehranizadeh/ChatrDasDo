import WhoWeAre from "../components/WhoWeAre";
import ContactUsForm from "../components/ContactUsForm";
import FAQ from "../components/FAQ";

function AboutUs() {
  return (
    <div className="flex flex-col m-auto">
      <div className="flex flex-col  md:flex-row justify-evenly  ">
        <WhoWeAre />
        <ContactUsForm />
      </div>
      <FAQ />
    </div>
  );
}

export default AboutUs;
