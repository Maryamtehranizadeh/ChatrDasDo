import { useState } from "react";

function ResetPassword() {
  const [verified, setVerified] = useState(false);
  return (
    <div>
      {verified ? (
        <form className="flex flex-col max-w-[600px] m-auto p-[40px]">
          <h1 className="text-lg md:text-2xl flex-wrap text-center">
            Create new password
          </h1>
          <label htmlFor="password">New password</label>
          <input id="password" type="password" />
          <label htmlFor="confirm_password">Confirm your password</label>
          <input id="confirm_password" type="confirm_password" />
          <button
            className="w-max px-4 text-nowrap m-auto my-3 md:w-1/2"
            type="submit"
          >
            Set New Password
          </button>
        </form>
      ) : (
        <form className="flex flex-col max-w-[600px] m-auto p-[40px]">
          <h1 className="text-lg md:text-2xl flex-wrap text-center">
            To reset your password, please enter your email
          </h1>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" />
          <button
            className="w-max px-4 text-nowrap m-auto my-3 md:w-1/2"
            type="submit"
          >
            Send Verification Link
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
