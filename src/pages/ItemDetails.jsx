import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import GearPhotos from "../components/GearPhotos";
import { getItemDetails } from "../utils/getAll";
import { useAuth } from "../context/AuthProvider";
import { useUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();
  const { loginToken } = useAuth();
  const { userId } = useUser();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
    refetchOnMount: true,
    staleTime: 0,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data.user);
  // console.log(userId);

  const showCertificate = () => {
    console.log("certificate");
  };
  return (
    <div style={{ margin: "40px" }}>
      <h1>Details about {data.data.name}:</h1>
      <div>
        <div>
          <GearPhotos id={id} />
        </div>
        <h4>Name: {data.data.name}</h4>
        <h4>Model: {data.data.model}</h4>
        <hr />
        <p>Brand: {data.data.brand}</p>
        <hr />
        <h4>Certificate: {data.data.properties.certificate}</h4>
        <p>Color: {data.data.properties.color}</p>
        <p>Weight:{data.data.properties.weight}</p>
        <span>
          {data.data.price} {data.data.currency}
        </span>
        <div>
          <button onClick={showCertificate} style={{ margin: "40px" }}>
            Show Certificate
          </button>
          {loginToken && userId === data?.data.user && (
            <button onClick={() => navigate(`/editgear/${id}`)}>
              Edit Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
