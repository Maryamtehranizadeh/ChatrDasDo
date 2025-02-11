import { useSearch } from "../context/SearchProvider";
import { searchedGears } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import WingCard from "./WingCard";

function SearchResults() {
  const { queryObject, setQueryObject } = useSearch();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryObject],
    queryFn: searchedGears,
    refetchOnMount: true,
    staleTime: 0,
  });
  console.log(data?.data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) {
    console.log(error.message);
  }

  return (
    <div style={{ margin: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {queryObject.name && data?.data?.length === 0 ? (
          <h2>Sorry! no item was found...</h2>
        ) : (
          data?.data?.map((wing) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResults;
