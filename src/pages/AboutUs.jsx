import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import ContactUsForm from "../components/ContactUsForm";

function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <WhoWeAre />
      <ContactUsForm />
    </div>
  );
}

export default AboutUs;
