import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { useQuery } from "@tanstack/react-query";
import { getItemDetails } from "../utils/getAll";

function EditGear() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h2>{error?.message}</h2>;
  //   console.log(data?.data.properties);
  return (
    <div>
      <ItemForm
        initialData={data?.data}
        submitHandler={(e, form) => console.log("Submit clicked", form)}
        initialProperties={data?.data.properties}
      />
    </div>
  );
}

export default EditGear;
