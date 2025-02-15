import { getCertificates } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

function CertificateListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certificates"],
    queryFn: getCertificates,
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  console.log(data?.data);
  return <div>CertificateListPage</div>;
}

export default CertificateListPage;
