import { useQuery } from "@tanstack/react-query";
import { getCertifiers } from "../utils/getCertifiers";
import { Link } from "react-router-dom";

function CertifierListPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["certifiers"],
    queryFn: getCertifiers,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  console.log(data?.data);
  return (
    <div>
      <h1>Welcome to our Certifiers' Page!</h1>
      {data?.data.map((certifier) => (
        <div key={certifier.id}>
          <h3>{certifier.name}</h3>
          <p>{certifier.contact_email}</p>
          <span>{certifier.phone_number}</span>
          <Link to={certifier.website}>
            <button>Website</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CertifierListPage;
