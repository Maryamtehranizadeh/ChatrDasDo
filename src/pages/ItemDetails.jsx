import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";
import GearPhotos from "../components/GearPhotos";
import { getItemDetails } from "../utils/getAll";

function ItemDetails() {
  const { id } = useParams();
  // console.log(id);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data);

  return (
    <div>
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
      </div>
    </div>
  );
}

export default ItemDetails;
