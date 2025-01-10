import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCertifiers } from "../utils/getAll";

function CertificateForm() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["certifiers"],
    queryFn: getCertifiers,
    refetchOnMount: true,
    staleTime: 0,
  });
  console.log(data?.data);
  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <h1> Add certificates for your gear and make it more attractive!</h1>
      <form style={{ width: "600px", margin: "auto" }}>
        <label htmlFor="name">Name of the certificate</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="issue_date">Issued At</label>
        <input type="date" id="issue_date" name="issue_date" />
        <label htmlFor="expires">expires</label>
        <input type="date" name="expires" id="expires" />
        <label htmlFor="porosity">Porosity</label>
        <input type="number" id="porosity" name="porosity" />

        <p>Lines need trim?</p>
        <label htmlFor="trim-yes"> Yes</label>
        <input type="radio" id="trim-yes" name="trim" />
        <label htmlFor="trim-no"> No</label>
        <input type="radio" id="trim-no" name="trim" />

        <p>Fabric Condition?</p>
        <label htmlFor="fabric-yes"> Yes</label>
        <input type="radio" id="fabric-yes" name="fabric" />
        <label htmlFor="fabric-no"> No</label>
        <input type="radio" id="fabric-no" name="fabric" />

        <label htmlFor="certifier">Certifier</label>
        <select name="certifier" id="certifier">
          <option value="none">Certifiers</option>
          {data?.data.map((certifier) => (
            <option key={certifier.id}>{certifier.name}</option>
          ))}
        </select>

        <button type="submit">Add Certificate</button>
      </form>
    </div>
  );
}

export default CertificateForm;
