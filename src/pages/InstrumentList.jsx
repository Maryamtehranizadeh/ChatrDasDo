import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import WingCard from "../components/WingCard";
import { getSpecificGear } from "../utils/getAll";

function InstrumentList() {
  const id = "49e81219-2646-44e2-b36c-3316ff0d26d3";
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["specific-gear", id],
    queryFn: getSpecificGear,
    // refetchOnMount: true,
    // staleTime: 0,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data)
  return (
    <div style={{ margin: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data?.data.map((wing) => (
          <div
            key={wing.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px, solid, var(--border-color)",
              borderRadius: "10px",
              margin: "20px",
            }}
          >
            <WingCard wing={wing} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstrumentList;
