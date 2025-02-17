import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import CertificateForm from "../components/CertificateForm";
import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";
import { useUser } from "../context/UserProvider";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddCertificatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const { userData } = useUser();
  // console.log(userData);
  const [certificate, setCertificate] = useState({
    gear: id,
    user: userData?.id,
    issue_date: "",
    expiration_date: "",
    porosity: 0,
    lines_need_trim: null,
    fabric_condition: null,
    certifier: "",
    // picture: [],
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
    axios
      .post(`${baseURL}certificates/`, certificate, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie()}`,
        },
      })
      .then((response) => {
        console.log(response);
        navigate(`/itemdetails/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const deleteHandler = (id) => {
  //   const updatedFiles = certificate?.picture?.filter(
  //     (file) => file.lastModified !== id,
  //   );
  //   setCertificate((prev) => ({ ...prev, picture: updatedFiles }));
  // };

  // console.log(certificate);

  return (
    <div>
      <CertificateForm
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        certificate={certificate}
        // deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default AddCertificatePage;
