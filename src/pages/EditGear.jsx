import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { useQuery } from "@tanstack/react-query";
import { getItemDetails } from "../utils/getAll";
import { getCookie } from "../utils/cookie";
import { baseURL } from "../config/api";
import axios from "axios";
import { useState, useEffect } from "react";
import PhotoModal from "../components/PhotoModal";
import toast from "react-hot-toast";

function EditGear() {
  const { id } = useParams();
  const [isModal, setIsModal] = useState(false);
  const [itemId, setItemId] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2>{error?.message}</h2>;

  const editHandler = (form) => {
    // console.log(form);
    let isFornValid = true;
    // console.log(form);
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        isFornValid = false;
        if (key === "gear_type_id") {
          toast.error("Please choose category!");
        } else {
          toast.error(`The field "${key}" is empty!`);
        }
      }
    });
    if (!isFornValid) return;
    axios
      .put(
        `${baseURL}gears/${id}/`,
        { ...form },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${getCookie()}`,
          },
        },
      )
      .then((response) => {
        setIsModal(true);
        setItemId(response.data.id);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  //   console.log(data?.data.pictures);

  return (
    <div>
      <ItemForm
        initialData={data?.data}
        submitHandler={(e, form) => {
          e.preventDefault();
          editHandler(form);
        }}
        initialProperties={data?.data.properties}
      />
      {isModal && (
        <PhotoModal
          itemId={itemId}
          pictures={data?.data.pictures}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}

export default EditGear;
