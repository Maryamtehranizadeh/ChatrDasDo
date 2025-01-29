import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import ContactUsForm from "../components/ContactUsForm";
import FAQ from "../components/FAQ";
import { useUser } from "../context/UserProvider";

function AboutUs() {
  const { loggedUser, loggedEmail } = useUser();
  return (
    <>
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
      <h1>Hello {loggedUser}</h1>
      <FAQ />
    </>
  );
}

export default AboutUs;
