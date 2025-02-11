import { getMyGears } from "../utils/getAll";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./MyGearList.module.css";
import { Link } from "react-router-dom";
import { deleteGear } from "../utils/deleteAll";
import { pureBaseURL } from "../config/api";
import { useNavigate } from "react-router-dom";
import { useType } from "../context/TypeProvider";

function MyGearList({ id }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { allTypes } = useType();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gears", id],
    queryFn: getMyGears,
    refetchOnMount: true,
    staleTime: 0,
  });
  const deleteMutation = useMutation({
    mutationFn: deleteGear,
    onSuccess: (response) => {
      // console.log(response);
      // Invalidate and refetch the wings query to reflect the changes after deletion
      // in the following line instead of gears it was "wings, i changed it but it is still working i dont know why!!!??"
      queryClient.invalidateQueries(["gears"]);
    },
    onError: (error) => {
      console.error("Error deleting gear:", error);
    },
  });
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteMutation.mutate(id); // Pass the ID in the correct format for deleteGear
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data);

  const editHandler = (id) => {
    // console.log("edit", id);
    navigate(`/editgear/${id}`);
  };

  const certificateHandler = (id) => {
    navigate("/addcertficate");
  };

  return (
    <div className={styles.container}>
      {data?.data.map((gear) => (
        <div className={styles.wing} key={gear.id}>
          <Link to={`/itemdetails/${gear.id}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "70px", height: "70px", marginRight: "18px" }}
                src={
                  gear.pictures.length === 0
                    ? `/src/public/logo.png`
                    : `${pureBaseURL}${gear.pictures[0].link}`
                }
                alt="Gear"
              />
              <h3>{gear.name}</h3>
            </div>
          </Link>
          <div>
            Category:{" "}
            {gear.gear_type === "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c"
              ? "Wing"
              : gear.gear_type === "49e81219-2646-44e2-b36c-3316ff0d26d3"
                ? "Instrument"
                : "Harness"}
          </div>
          <div>
            <p>
              {gear.brand} - {gear.price} {gear.currency}
            </p>{" "}
          </div>
          <div className={styles.buttons}>
            {gear.gear_type === "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c" && (
              <button onClick={() => certificateHandler(gear.id)}>
                Add Certificates
              </button>
            )}
            <button onClick={() => editHandler(gear.id)}>Edit</button>
            <button onClick={() => deleteHandler(gear.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyGearList;
