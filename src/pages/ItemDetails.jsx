import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";

function ItemDetails() {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: () => {
      return axios.get(`${baseURL}gears/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getCookie()}`,
        },
      });
    },
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
      <h1>Details about {data.data.name}:</h1>
      <div>
        {/* <h3>Category:{data.data.gear_type}</h3> */}
        <h4>{data.data.name}</h4>
        <h4>{data.data.model}</h4>
        <hr />
        <p>Brand: {data.data.brand}</p>
        <hr />
        <span>
          {data.data.price} {data.data.currency}
        </span>
      </div>
    </div>
  );
}

export default ItemDetails;
