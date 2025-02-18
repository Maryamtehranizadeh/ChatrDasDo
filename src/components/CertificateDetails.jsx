import { useQuery } from "@tanstack/react-query";
import { getCertificateDetails } from "../utils/getAll";
import { useEffect } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CertificateModal from "./CertificateModal";
import CertificatePhotos from "./CertificatePhotos";

function CertificateDetails({ id }) {
  const [pictures, setPictures] = useState([]);
  const [modal, setModal] = useState(false);
  // console.log(id);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificate", id],
    queryFn: getCertificateDetails,
    refetchOnMount: true,
    staleTime: 0,
  });

  useEffect(() => {
    // console.log(data?.data);
    // console.log(photos);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="my-10 text-center">
      <h1 className="text-lg sm:text-xl md:text-3xl md:my-10">
        Details about this item's certificate(s):
      </h1>
      {data?.data.map((certificate) => (
        <div
          className="my-10 flex flex-col gap-y-10 bg-[var(--secondary-color)] shadow-2xl rounded-2xl "
          key={certificate.id}
        >
          <div>
            <p className="my-10 text-lg text-[var(--primary-color)] sm:my-15 md:text-2xl ">
              Certified on {certificate.issue_date} by {certificate.certifier}{" "}
              valid until {certificate.expiration_date}
            </p>

            <div className="flex flex-col gap-y-6 md:flex-row justify-evenly">
              <span>Porosity: {certificate.porosity}</span>
              <p>
                Fabric Condition:{" "}
                {!!certificate.fabric_condition ? "Good" : "Not Good"}
              </p>
              <p>
                Lines Need Trim? {!!certificate.lines_need_trim ? "No" : "Yes"}
              </p>
            </div>
          </div>
          <div>
            <CertificatePhotos
              id={certificate.id}
              pictures={pictures}
              setPictures={setPictures}
            />
          </div>
          <div>
            <button className="mb-10" onClick={() => setModal(true)}>
              Add photo/proof for this Certificate
            </button>
          </div>
          {modal && (
            <CertificateModal
              modal={modal}
              setModal={setModal}
              itemId={certificate.id}
              pictures={pictures}
              setPictures={setPictures}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default CertificateDetails;
