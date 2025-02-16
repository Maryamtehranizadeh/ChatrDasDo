import { getMyGears } from "../utils/getAll";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { deleteGear } from "../utils/deleteAll";
import { pureBaseURL } from "../config/api";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import TrashIcon from "./TrashIcon";
import PencilIcon from "./PencilIcone";

function MyGearList({ id }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gears", id],
    queryFn: getMyGears,
    refetchOnMount: true,
    staleTime: 0,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteGear,
    onSuccess: (response) => {
      queryClient.invalidateQueries(["gears"]);
    },
    onError: (error) => {
      console.error("Error deleting gear:", error);
    },
  });
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteMutation.mutate(id);
    }
  };

  const editHandler = (id) => {
    // console.log("edit", id);
    navigate(`/editgear/${id}`);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
    return <h3>Error: {error.message}</h3>;
  }
  // console.log(data?.data);

  return (
    <div className="flex flex-col sm:p-10 mx-10 gap-y-10">
      {data?.data.map((gear) => (
        <div
          className="flex flex-col gap-y-10  bg-[var(--secondary-color)] md:flex-row justify-around  items-center shadow-md transition-all duration-500 ease-in-out hover:shadow-[var(--primary-color)] hover:shadow-lg hover:scale-104 rounded-lg py-5"
          key={gear.id}
        >
          <div className="flex flex-row w-full md:w-1/2 m-auto md:justify-evenly items-center ">
            <div className="flex flex-row justify-evenly w-1/2 items-center  ">
              <Link to={`/itemdetails/${gear.id}`}>
                <img
                  className="w-[70px] h-[70px] rounded-md"
                  src={
                    gear.pictures.length === 0
                      ? `/src/public/logo.png`
                      : `${pureBaseURL}${gear.pictures[0].link}`
                  }
                  alt="Gear"
                />
              </Link>
              <h3>{gear.name}</h3>
            </div>
            <div className=" w-1/2 text-center ">
              {" "}
              {gear.gear_type === "23079e6f-fdbc-40b3-bb49-85f49d7a8b8c"
                ? "Wing"
                : gear.gear_type === "49e81219-2646-44e2-b36c-3316ff0d26d3"
                  ? "Instrument"
                  : "Harness"}
            </div>
          </div>

          <div className="flex flex-row w-full md:w-1/2 m-auto justify-evenly items-center">
            <div className="flex flex-row justify-evenly items-center w-1/2 ">
              <p>{gear.brand}</p>
              <p>
                {gear.price} {gear.currency}
              </p>{" "}
            </div>
            <div className="flex flex-row gap-x-3 justify-center items-center w-1/2 ">
              <button
                className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                onClick={() => editHandler(gear.id)}
              >
                <PencilIcon />
              </button>
              <button
                className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                onClick={() => deleteHandler(gear.id)}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyGearList;
