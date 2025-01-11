import styles from "./ResetPassword.module.css";
import { useState } from "react";

function ResetPassword() {
  const [verified, setVerified] = useState(true);
  return (
    <div>
      {verified ? (
        <form className={styles.form}>
          <h1>Create new password</h1>
          <label htmlFor="password">New password</label>
          <input id="password" type="password" />
          <label htmlFor="confirm_password">Confirm your password</label>
          <input id="confirm_password" type="confirm_password" />
          <button type="submit">Set New Password</button>
        </form>
      ) : (
        <form className={styles.form}>
          <h1>To reset your password, please enter your email</h1>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" />
          <button type="submit">Send Verification Link</button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
