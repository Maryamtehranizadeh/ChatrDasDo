import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { useQuery } from "@tanstack/react-query";
import { getItemDetails } from "../utils/getAll";
import { getCookie } from "../utils/cookie";
import { baseURL } from "../config/api";
import axios from "axios";
import { useState } from "react";
import PhotoModal from "../components/PhotoModal";

function EditGear() {
  const { id } = useParams();
  const [isModal, setIsModal] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [photos, setPhotos] = useState([]);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gear", id],
    queryFn: getItemDetails,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h2>{error?.message}</h2>;
  //   console.log(data?.data.properties);
  //   console.log(id);
  //   console.log(`${baseURL}gears/${id}`);
  //   const urlToEdit = `${baseURL}gears/${id}`;

  const editHandler = (form) => {
    // console.log(form);
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
        console.log(error);
      });
  };
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
          setPhotos={setPhotos}
          itemId={itemId}
          photos={photos}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}

export default EditGear;
