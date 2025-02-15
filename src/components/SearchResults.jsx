import { useSearch } from "../context/SearchProvider";
import { searchedGears } from "../utils/getAll";
import { useQuery } from "@tanstack/react-query";
import GearCard from "./GearCard";
import Loader from "../components/Loader";

function SearchResults() {
  const { queryObject, setQueryObject } = useSearch();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryObject],
    queryFn: searchedGears,
    refetchOnMount: true,
    staleTime: 0,
  });
  console.log(data?.data);
  if (isLoading) return <Loader />;
  if (isError) {
    console.log(error.message);
  }

  const cardClass =
    "flex flex-col  m-7 rounded-[20px] shadow-md shadow-[var(--border-color)] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]";

  return (
    <div className="m-[40px]">
      <div className="flex flex-row flex-wrap justify-around">
        {queryObject.name && data?.data?.length === 0 ? (
          <h2>Sorry! no item was found...</h2>
        ) : (
          data?.data?.map((wing) => (
            <div key={wing.id} className={cardClass}>
              <GearCard wing={wing} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchResults;
