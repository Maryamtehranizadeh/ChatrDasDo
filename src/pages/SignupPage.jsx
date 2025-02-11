import toast from "react-hot-toast";
import styles from "./SignupPage.module.css";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../config/api";

function SignupPage() {
  const [predictedCode, setPredictedCode] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    club: "",
    country: "",
    countryCode: "",
    phone_number: "",
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });

  const fetchCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response?.data;
  };
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const changeHandler = (event) => {
    if (event.target.name === "country") {
      const selectedCountry = countries.find(
        (country) => country.cca2 === event.target.value,
      );
      if (selectedCountry) {
        const code =
          selectedCountry.idd?.root +
          (selectedCountry.idd?.suffixes?.[0] || "");
        setPredictedCode(code);
        setForm((previousForm) => ({
          ...previousForm,
          [event.target.name]: event.target.value,
          countryCode: code,
        }));
      } else {
        setForm((previousForm) => ({
          ...previousForm,
          [event.target.name]: event.target.value,
          countryCode: "",
        }));
      }
    } else {
      setForm((previousForm) => ({
        ...previousForm,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (form.password !== form.rePassword) {
      toast.error("Passwords are not the same!");
    } else {
      console.log(form);
      const { username, password, email } = form;
      axios
        .post(`${baseURL}register/`, {
          username,
          password,
          email,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.message));
    }
  };
  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h2>Sign Up here to create an account</h2>

      <div className={styles.twins}>
        <div className={styles.side}>
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" />
          <label htmlFor="last_name">Last Name </label>
          <input type="text" id="last_name" name="last_name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="club">Name of Club (Optional)</label>
          <input type="text" id="club" name="club" />
          <label htmlFor="country">Choose your country</label>
          <select id="country" name="country">
            <option value="">Select your country</option>
            {countries
              ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <option
                  key={country.cca2}
                  value={country.cca2}
                  placeholder="Country"
                >
                  {country.flag} {country.name.common}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.side}>
          <label htmlFor="countryCode">Country Code</label>
          <select
            id="countryCode"
            name="countryCode"
            className={styles.countryCode}
          >
            <option value="">{predictedCode || "Code"}</option>
            {countries
              ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => (
                <option key={country.cca2} value={predictedCode || ""}>
                  {country.idd?.root}
                  {country.idd?.suffixes?.[0] || ""} - {country.cca2}
                </option>
              ))}
          </select>
          <label htmlFor="phone_number">Phone</label>
          <input type="tel" id="phone_number" name="phone_number" />
          <label htmlFor="username">Your username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Your password</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="rePassword">Confirm your password</label>
          <input type="password" id="rePassword" name="rePassword" />
        </div>
      </div>

      <button type="submit">Create Acount</button>
    </form>
  );
}

export default SignupPage;
