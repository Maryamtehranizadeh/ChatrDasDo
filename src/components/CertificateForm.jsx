import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCertifiers } from "../utils/getAll";
import styles from "./CertificateForm.module.css";
import Loader from "./Loader";

function CertificateForm({
  changeHandler,
  submitHandler,
  certificate,
  deleteHandler,
}) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["certifiers"],
    queryFn: getCertifiers,
    refetchOnMount: true,
    staleTime: 0,
  });

  if (isLoading) return <Loader />;
  if (isError) console.log(error.message);
  //   console.log(data?.data);
  //   console.log(certificate.picture);
  return (
    <form
      className={styles.form}
      onChange={changeHandler}
      onSubmit={submitHandler}
    >
      <h1> Add certificates for your wing and make it more attractive!</h1>
      <label htmlFor="issue_date">Issued At:</label>
      <input type="date" id="issue_date" name="issue_date" />

      <label htmlFor="expiration_date">Expires at:</label>
      <input type="date" name="expiration_date" id="expiration_date" />

      <label htmlFor="porosity">Porosity</label>
      <input type="number" id="porosity" name="porosity" />

      <select name="certifier" id="certifier">
        <option value="none">Certifiers</option>
        {data?.data.map((certifier) => (
          <option key={certifier.id} value={certifier.name}>
            {certifier.name}
          </option>
        ))}
      </select>
      <label htmlFor="picture">Photos of the certificate(s)</label>
      <input
        type="file"
        name="picture"
        id="picture"
        multiple
        accept="image/*"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          marginBottom: "20px",
          //   alignItems: "center",
        }}
      >
        {certificate.picture?.map((file) => (
          <div
            key={file?.lastModified}
            style={{ display: "flex", flexDirection: "column", rowGap: "5px" }}
          >
            <p>{file?.name}</p>
            <img
              src={URL.createObjectURL(file)}
              alt="Photo"
              style={{ width: "50px", height: "50px" }}
            />
            <button
              onClick={() => deleteHandler(file?.lastModified)}
              style={{
                fontSize: "0.8rem",
                padding: "5px 10px",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <p>Lines need trim?</p>
        <label htmlFor="trim-yes">Yes</label>
        <input
          type="radio"
          id="trim-yes"
          name="lines_need_trim"
          style={{ margin: "0" }}
          value={true}
        />
        <label htmlFor="trim-no">No</label>
        <input
          type="radio"
          id="trim-no"
          name="lines_need_trim"
          style={{ margin: "0" }}
          value={false}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <p>Fabric Condition?</p>
        <label htmlFor="fabric-true"> Good</label>
        <input
          type="radio"
          id="fabric-true"
          name="fabric_condition"
          style={{ margin: "0" }}
          value={true}
        />
        <label htmlFor="fabric-false"> Not Good</label>
        <input
          type="radio"
          id="fabric-false"
          name="fabric_condition"
          style={{ margin: "0" }}
          value={false}
        />
      </div>

      <button type="submit">Add Certificate</button>
    </form>
  );
}

export default CertificateForm;
