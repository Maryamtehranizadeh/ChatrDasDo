import { getCertificates } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";

function CertificateListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificates"],
    queryFn: getCertificates,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  console.log(data?.data);
  return <div>CertificateListPage</div>;
}

export default CertificateListPage;
