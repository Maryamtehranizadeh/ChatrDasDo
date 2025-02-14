import { useQuery } from "@tanstack/react-query";
import { getAllGears } from "../utils/getAll";
import WingCard from "../components/WingCard";

function Allgears({ number }) {
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
  const limitedData = data?.data.slice(0, number);

  const cardClass =
    "flex flex-col rounded-[20px] m-7 shadow-md shadow-[var(--border-color)] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]";

  return (
    <div style={{ margin: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {!!number
          ? limitedData?.map((wing) => (
              <div className={cardClass} key={wing.id}>
                <WingCard wing={wing} />
              </div>
            ))
          : data?.data.map((wing) => (
              <div className={cardClass} key={wing.id}>
                <WingCard wing={wing} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Allgears;
