import toast from "react-hot-toast";
import styles from "./SignupPage.module.css";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
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

  //   const countryOptions = countries?.map((country) => ({
  //     value: country.cca2,
  //     label: country.name.common,
  //   }));
  //   console.log(countries);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (form.password !== form.rePassword) {
      toast.error("Passwords are not the same!");
    } else {
      console.log(form);
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
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="country">Choose your country:</label>
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
                  {country.name.common}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.side}>
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
