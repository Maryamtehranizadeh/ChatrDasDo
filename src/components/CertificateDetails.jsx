import { useQuery } from "@tanstack/react-query";
import { getCertificateDetails } from "../utils/getAll";
import { useEffect } from "react";
import Loader from "./Loader";

function CertificateDetails({ id }) {
  // console.log(id);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificate", id],
    queryFn: getCertificateDetails,
    refetchOnMount: true,
    staleTime: 0,
  });

  useEffect(() => {
    console.log(data?.data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  return <div>CertificateDetails</div>;
}

export default CertificateDetails;
