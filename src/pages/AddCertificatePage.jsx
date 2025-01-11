import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import CertificateForm from "../components/CertificateForm";
import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";

function AddCertificatePage() {
  const [certificate, setCertificate] = useState({
    issue_date: "",
    expiration_date: "",
    porosity: 0,
    lines_need_trim: null,
    fabric_condition: null,
    certifier: "",
    picture: [],
  });

  const changeHandler = (e) => {
    const { name, type, files, value } = e.target;
    if (type === "file") {
      setCertificate((prev) => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setCertificate((prev) => ({ ...prev, [name]: value }));
    }
    // console.log(Array.from(files));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(certificate);
  };

  const deleteHandler = (id) => {
    const updatedFiles = certificate.picture.filter(
      (file) => file.lastModified !== id,
    );
    setCertificate((prev) => ({ ...prev, picture: updatedFiles }));
  };
  // console.log(certificate);

  axios
    .post(`${baseURL}certificates/`, certificate, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getCookie()}`,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <CertificateForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        certificate={certificate}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default AddCertificatePage;
