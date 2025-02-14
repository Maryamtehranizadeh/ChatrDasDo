import { useQuery } from "@tanstack/react-query";
import { getSpecificGear } from "../utils/getAll";
import GearCard from "../components/GearCard";

function InstrumentList() {
  const id = "49e81219-2646-44e2-b36c-3316ff0d26d3";
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
  const cardClass =
    "flex flex-col  m-7 rounded-[20px] shadow-md shadow-[var(--border-color)] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]";

  return (
    <div className="m-[40px]">
      <div className="flex flex-row flex-wrap justify-around">
        {data?.data.map((wing) => (
          <div key={wing.id} className={cardClass}>
            <GearCard wing={wing} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstrumentList;
