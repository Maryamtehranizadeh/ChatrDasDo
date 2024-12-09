import { useQuery } from "@tanstack/react-query";
import { getGearPhotos } from "../utils/getAll";
import { baseURL, pureBaseURL } from "../config/api";

function GearPhotos({ id }) {
  //   console.log(id);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-gear-photos", id],
    queryFn: getGearPhotos,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    // console.log(error);
    return <h3>Error: {error.message}</h3>;
  }

  // console.log(data.data);
  if (data.data.length === 0)
    return (
      <div>
        <h2>Item has no photos</h2>
        <hr />
      </div>
    );

  return (
    <div style={{ display: "flex", columnGap: "20px" }}>
      {data?.data?.map((item) => (
        <div key={item.gear}>
          <img
            src={`${pureBaseURL}${item.image}`}
            alt={item.id}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default GearPhotos;
