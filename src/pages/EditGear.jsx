import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { useQuery } from "@tanstack/react-query";
import { getItemDetails } from "../utils/getAll";
import { useState, useEffect } from "react";

function EditGear() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h2>{error?.message || "Something went wrong"}</h2>;
  return (
    <div>
      <ItemForm
        initialData={data?.data}
        submitHandler={() => console.log("Submit clicked")}
      />
    </div>
  );
}

export default EditGear;
