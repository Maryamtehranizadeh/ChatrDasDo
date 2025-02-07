import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { pureBaseURL, baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";
import { deleteGearPhoto } from "../utils/deleteAll";

function PhotoModal({ itemId, pictures, setIsModal }) {
  const [loadingButton, setLoadingButton] = useState(false);
  const [photos, setPhotos] = useState(pictures || []);
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const skipHandler = () => {
    setIsModal(false);
    navigate(`/itemdetails/${itemId}`);
  };
  const deleteMutation = useMutation({
    mutationFn: deleteGearPhoto,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries(["photos"]);
    },
    onError: (error) => {
      console.error("Error deleting photo:", error);
    },
  });
  const photoHandler = (event) => {
    // console.log(event.target.files);
    const selectedPhotos = event.target.files;
    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...Array.from(selectedPhotos),
    ]);
  };

  const removeHandler = (fileName) => {
    setPhotos((prev) => {
      const updatedPhotos = prev.filter(
        (photo) => photo.picture_id !== fileName && photo.name !== fileName,
      );
      // console.log("Updated Photos After Deletion:", updatedPhotos);
      return [...updatedPhotos];
    });
  };

  useEffect(() => {
    if (photos.length > 0) {
      console.log("previous uploaded pictures ", pictures);
      console.log("desired final photos to appear:", photos);
      console.log("Photos to delete from pictures:", deletedPhotos);
      console.log("Photos to add to pictures:", addedPhotos);
    }
  }, [photos]);

  const deletedPhotos = pictures?.filter((pic) => !photos?.includes(pic));
  const addedPhotos = photos?.filter((photo) => !pictures?.includes(photo));
  // const deletedPhotos = pictures.filter(
  //   (pic) =>
  //     !photos.some(
  //       (photo) =>
  //         photo.picture_id === pic.picture_id || photo.name === pic.name,
  //     ),
  // );

  // const addedPhotos = photos.filter(
  //   (photo) =>
  //     !pictures.some(
  //       (pic) => pic.picture_id === photo.picture_id || pic.name === photo.name,
  //     ),
  // );

  const addPhotoHandler = () => {
    let allPostedPhotos = [];
    setLoadingButton(true);
    console.log("previous uploaded pictures ", pictures);
    console.log("desired final photos to appear:", photos);
    console.log("Photos to delete from pictures:", deletedPhotos);
    console.log("Photos to add to pictures:", addedPhotos);

    //remove the deletedphotos
    if (deletedPhotos?.length > 0) {
      deletedPhotos.forEach((photo) => {
        axios
          .delete(`${baseURL}gears/${itemId}/pictures/${photo.picture_id}/`, {
            headers: {
              Authorization: `Token ${getCookie()}`,
            },
          })
          .then((response) => {
            console.log(`Deleted photo: ${photo.picture_id}`, response);
            // You can manage deleted photos here, e.g., update UI
          })
          .catch((error) => {
            console.error("Error deleting photo:", error);
          });
      });
    }

    // upload addedphotos

    if (addedPhotos?.length > 0) {
      addedPhotos.forEach((photo) => {
        const formData = new FormData();
        formData.append("image", photo);
        axios
          .post(`${baseURL}gears/${itemId}/pictures/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${getCookie()}`,
            },
          })
          .then((response) => {
            allPostedPhotos.push(response.data);
            //   console.log(allPostedPhotos);
            if (allPostedPhotos.length === photos.length) {
              // console.log(allPostedPhotos);
              skipHandler();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };
  const closeHandler = () => {
    setIsModal(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
        <h2
          className="text-lg font-semibold text-gray-800 "
          style={{ marginBottom: "35px", color: "var(--p-color)" }}
        >
          {pictures?.length > 0
            ? "Now edit your Item photos"
            : "Now add some photos of your Item"}
        </h2>
        <div style={{ marginBottom: "25px" }}>
          <label
            htmlFor="photo"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--secondary-color)",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
            }}
          >
            Browse
          </label>
          <input
            id="photo"
            type="file"
            name="photo"
            style={{ width: "100%", display: "none" }}
            multiple
            onChange={photoHandler}
          />
        </div>
        {photos.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            {photos.map((photo, index) => (
              <div
                key={photo.picture_id || photo.lastModified}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={
                    photo instanceof File || photo instanceof Blob
                      ? URL.createObjectURL(photo)
                      : `${pureBaseURL}${photo.link}`
                  }
                  alt={photo.name || "Uploaded Photo"}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
                <p>{photo.name || `Photo ${index + 1}`}</p>
                <button
                  onClick={() => removeHandler(photo.picture_id || photo.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {photos.length > 0 && (
            <button
              onClick={addPhotoHandler}
              className="px-4 py-2 text-white rounded-lg hover:opacity-90"
              style={{
                backgroundColor: "var(--primary-color)",
              }}
            >
              {loadingButton ? "Uploading..." : "Upload Photos"}
            </button>
          )}
          {photos.length == 0 && (
            <div>
              <button style={{ marginRight: "40px" }} onClick={skipHandler}>
                Maybe Later... Skip!
              </button>
              <button onClick={closeHandler}>Close... Back to the form</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
