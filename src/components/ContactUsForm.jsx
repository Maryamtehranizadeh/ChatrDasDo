import React from "react";

function ContactUsForm() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "30px",
      }}
    >
      <input type="text" placeholder="Full Name" name="fullName" />
      <input type="email" placeholder="Email" name="email" />
      <input
        type="textarea"
        placeholder="Message"
        style={{ paddingBottom: "200px" }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "var(--secondary-color)",
        }}
      >
        Send
      </button>
    </form>
  );
}

export default ContactUsForm;
