import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import CertificateForm from "../components/CertificateForm";

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
  console.log(certificate);

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
