import { getMyGears } from "../utils/getAll";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./WingList.module.css";
import { Link } from "react-router-dom";
import { deleteGear } from "../utils/deleteAll";
import { useEffect } from "react";
import { pureBaseURL } from "../config/api";

function WingList({ id }) {
  // console.log(id)
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gears", id],
    queryFn: getMyGears,
    refetchOnMount: true,
    staleTime: 0,
  });
  const deleteMutation = useMutation({
    mutationFn: deleteGear,
    onSuccess: (response) => {
      console.log(response);
      // Invalidate and refetch the wings query to reflect the changes after deletion
      queryClient.invalidateQueries(["wings"]);
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
  console.log(data?.data);

  const editHandler = (id) => {
    console.log("edit");
  };

  const certificateHandler = (id) => {
    console.log("certificate");
  };

  return (
    <div className={styles.container}>
      {data?.data.map((wing) => (
        <div className={styles.wing} key={wing.id}>
          <Link to={`/itemdetails/${wing.id}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "70px", height: "70px", marginRight: "18px" }}
                src={
                  wing.pictures.length === 0
                    ? `/src/public/logo.png`
                    : `${pureBaseURL}${wing.pictures[0].link}`
                }
                alt="Gear"
              />
              <h3>{wing.name}</h3>
            </div>
          </Link>
          <div style={{ margin: "auto" }}>
            <p>
              {wing.brand} - {wing.price} {wing.currency}
            </p>
          </div>
          <div>
            <button
              onClick={() => certificateHandler(wing.id)}
              style={{ marginRight: "20px" }}
            >
              Add Certificates
            </button>
            <button
              onClick={() => editHandler(wing.id)}
              style={{ marginRight: "20px" }}
            >
              Edit
            </button>
            <button onClick={() => deleteHandler(wing.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WingList;
