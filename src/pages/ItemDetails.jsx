import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import GearPhotos from "../components/GearPhotos";
import { getItemDetails } from "../utils/getAll";
import { useAuth } from "../context/AuthProvider";
import { useUser } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../components/Loader";
import CertificateDetails from "../components/CertificateDetails";
import { cardClass } from "../config/twStyles";

function ItemDetails() {
  const { id } = useParams();
  const { loginToken } = useAuth();
  const { isLoggedIn, userData } = useUser();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
    refetchOnMount: true,
    staleTime: 0,
  });

  useEffect(() => {
    // console.log(data?.data);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  const showCertificate = () => {
    console.log("certificate");
  };
  const editHandler = () => {
    navigate(`/editgear/${id}`);
  };

  const certificateHandler = (id) => {
    navigate(`/addcertficate/${id}`);
  };
  return (
    <div className="m-10 text-center">
      <h1 className="text-lg sm:text-xl md:text-3xl md:my-10">
        Details about {data?.data.name}:
      </h1>
      <div className="bg-[var(--secondary-color)] shadow-2xl p-10 flex flex-col sm:flex-row rounded-2xl ">
        <div className=" w-auto sm:w-1/2">
          <GearPhotos id={id} info={data} />
        </div>
        <div className=" flex flex-col gap-y-10 p-10 w-auto  sm:w-1/2">
          <h4>Name: {data?.data.name}</h4>
          <h4>Model: {data?.data.model}</h4>
          <p>Brand: {data?.data.brand}</p>
          {/* <h4>Certificate: {data?.data.properties.certificate}</h4> */}
          <p>Color: {data?.data.properties.color}</p>
          <p>Weight:{data?.data.properties.weight}</p>
          <span className="text-2xl text-[var(--primary-color)]">
            {data?.data.price} {data?.data.currency}
          </span>
          <div>
            <button onClick={showCertificate} style={{ margin: "40px" }}>
              Show Certificate
            </button>
            {isLoggedIn && userData.id === data?.data.user && (
              <button onClick={editHandler}>Edit Details</button>
            )}
            {isLoggedIn &&
              userData.id === data?.data.user &&
              data?.data.gear_type ===
                "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c" && (
                <button
                  onClick={() => certificateHandler(id)}
                  style={{ margin: "40px" }}
                >
                  Add Certificates
                </button>
              )}
          </div>
          <div>
            <CertificateDetails id={data?.data.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
