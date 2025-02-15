import { useQuery } from "@tanstack/react-query";
import { getAllGears } from "../utils/getAll";
import GearCard from "./GearCard";
import Loader from "./Loader";

function Allgears({ number }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["all-gears"],
    queryFn: getAllGears,
    refetchOnMount: true,
    staleTime: 0,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }
  const limitedData = data?.data.slice(0, number);

  const cardClass =
    "flex flex-col  m-7 rounded-[20px] shadow-md shadow-[var(--border-color)] transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]";

  return (
    <div className="m-[40px]">
      <div className="flex flex-row flex-wrap justify-around">
        {!!number
          ? limitedData?.map((wing) => (
              <div className={cardClass} key={wing.id}>
                <GearCard wing={wing} />
              </div>
            ))
          : data?.data.map((wing) => (
              <div className={cardClass} key={wing.id}>
                <GearCard wing={wing} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default Allgears;
