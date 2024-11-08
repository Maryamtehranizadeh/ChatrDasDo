import { useState } from "react";

function SendOTP() {
  const [mobile, setMobile] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>Please Login</p>
      <span>
        To use Air Gear services, enter your phone number, you will receive a
        verification code.
      </span>
      <label htmlFor="input">Enter Your Mobile Number</label>
      <input
        id="input"
        type="text"
        placeholder="Your Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">Send verification code</button>
    </form>
  );
}

export default SendOTP;
