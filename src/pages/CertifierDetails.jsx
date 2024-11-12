import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCertifiers } from "../utils/getAll";

function CertifierDetails() {
  const { data, isLoading } = useQuery({
    queryKey: ["certifiers"],
    queryFn: getCertifiers,
  });
  const { id } = useParams();
  const thisCertifier = data?.data.find((certifier) => certifier.id === +id);

  return (
    <div>
      <h1>More details about this certifier:</h1>
      <Link to="/certifiers">
        <button>Back to the list</button>
      </Link>
      {isLoading ? (
        <h2>Loading ... Please Wait!</h2>
      ) : (
        <div>
          <h3>{thisCertifier.name}</h3>
          <p>{thisCertifier.contact_email}</p>
          <span>{thisCertifier.phone_number}</span>
          <Link to={thisCertifier.website}>
            <button>Website</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CertifierDetails;
