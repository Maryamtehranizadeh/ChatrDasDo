import { useQuery } from "@tanstack/react-query";
import { getAllGears } from "../utils/getAll";
import WingCard from "../components/WingCard";

function WingPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all-gears"],
    queryFn: getAllGears,
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
      <h1>Wings</h1>
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
