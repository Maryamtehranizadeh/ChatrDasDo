import { getCertificatePhotos } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import { useEffect } from "react";
import { pureBaseURL } from "../config/api";

function CertificatePhotos({ id, pictures, setPictures }) {
  //   console.log(id);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificate_photos", id],
    queryFn: getCertificatePhotos,
    refetchOnMount: true,
    staleTime: 0,
  });
  useEffect(() => {
    console.log(data?.data);
    setPictures(data?.data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="flex flex-col gap-y-10  sm:flex-row sm:justify-evenly flex-wrap">
      {data?.data.map((picture) => (
        <div key={picture?.id}>
          <img
            className="w-60 h-60 rounded-lg m-auto"
            src={`${pureBaseURL}${picture.image}`}
            alt="Uploaded Photos"
          />
        </div>
      ))}
    </div>
  );
}

export default CertificatePhotos;
