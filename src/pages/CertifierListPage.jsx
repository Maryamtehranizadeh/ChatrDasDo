import { useQuery } from "@tanstack/react-query";
import { getCertifiers } from "../utils/getAll";
import { Link } from "react-router-dom";
import styles from "./CertifierListPage.module.css";

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
    <div className={styles.container}>
      <h1>Welcome to our Certifiers' Page!</h1>
      <Link to="/addcertifier">
        <button>Add a Certifier</button>
      </Link>
      {data?.data.map((certifier) => (
        <div key={certifier.id} className={styles.certifier}>
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
