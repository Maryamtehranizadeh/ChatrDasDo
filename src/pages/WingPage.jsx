import { useQuery } from "@tanstack/react-query";
import WingCard from "../components/WingCard";
import { getSpecificGear } from "../utils/getAll";

//this has become a component

function WingPage() {
  const id = "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c";
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["specific-gear", id],
    queryFn: getSpecificGear,
    refetchOnMount: true,
    staleTime: 0,
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

export default WingPage;
