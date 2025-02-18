import React from "react";
import PhotoModal from "./PhotoModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { pureBaseURL } from "../config/api";
import { getCookie } from "../utils/cookie";

function CertificateModal({ modal, setModal, itemId, pictures, setPictures }) {
  console.log(pictures);
  const [loadingButton, setLoadingButton] = useState(false);
  const [photos, setPhotos] = useState(pictures || []);

  const removeHandler = (fileName) => {
    setPhotos((prev) => {
      const updatedPhotos = prev.filter(
        (photo) => photo.picture_id !== fileName && photo.name !== fileName,
      );
      return [...updatedPhotos];
    });
  };

  const photoHandler = (e) => {
    // console.log(e.target.value);
    const selectedPhotos = e.target.files;
    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...Array.from(selectedPhotos),
    ]);
  };

  useEffect(() => {
    console.log(photos.length);
  }, [photos]);

  const skipHandler = () => {
    setModal(false);
  };
  const closeHandler = () => {
    setModal(false);
  };

  const deletedPhotos = pictures?.filter((pic) => !photos?.includes(pic));
  const addedPhotos = photos?.filter((photo) => !pictures?.includes(photo));

  const addPhotoHandler = () => {
    let completedDeletes = 0;
    let completedUploads = 0;
    let totalDeletes = deletedPhotos?.length || 0;
    let totalUploads = addedPhotos?.length || 0;

    setLoadingButton(true);

    const checkCompletion = () => {
      if (
        completedDeletes === totalDeletes &&
        completedUploads === totalUploads
      ) {
        skipHandler();
      }
    };

    //remove the deletedphotos
    if (deletedPhotos?.length > 0) {
      deletedPhotos?.forEach((photo) => {
        axios
          .delete(
            `${baseURL}certificates/${itemId}/pictures/${photo.picture_id}/`,
            {
              headers: {
                Authorization: `Token ${getCookie()}`,
              },
            },
          )
          .then((response) => {
            // console.log(`Deleted photo: ${photo.picture_id}`, response);
            if (response.status === 204) {
              completedDeletes++;
              checkCompletion();
            }
          })
          .catch((error) => {
            console.error("Error deleting photo:", error);
          });
      });
    } else {
      completedDeletes = totalDeletes;
      checkCompletion();
    }

    // upload addedphotos
    if (addedPhotos?.length > 0) {
      addedPhotos?.forEach((photo) => {
        const formData = new FormData();
        formData.append("image", photo);
        axios
          .post(`${baseURL}certificates/${itemId}/pictures/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Token ${getCookie()}`,
            },
          })
          .then((response) => {
            if (response.status === 201) {
              console.log(response?.data.id);
              completedUploads++;
              checkCompletion();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      completedUploads = totalUploads;
      checkCompletion();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="text-left bg-[var(--secondary-color)] rounded-lg shadow-lg p-6 max-w-xl w-full">
        <h2
          className="text-lg font-semibold text-[var(--primary-color)] "
          style={{ marginBottom: "35px", color: "var(--p-color)" }}
        >
          {pictures?.length > 0
            ? "Edit your certificate photos"
            : "Add photo of your certificate"}
        </h2>

        <div style={{ marginBottom: "25px" }}>
          <label
            className=" bg-[var(--primary-color)] text-[var(--secondary-color)] rounded-md py-2 px-3 cursor-pointer"
            htmlFor="photo"
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
          <div style={{ marginTop: "10px", backgroundColor: "pink" }}>
            {photos.map((photo, index) => (
              <div
                className="flex justify-between mb-3"
                key={photo.picture_id || photo.lastModified}
              >
                <img
                  className="w-10 h-10 object-cover"
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
              {pictures?.length > 0 ? (
                <button
                  style={{ marginRight: "40px" }}
                  onClick={addPhotoHandler}
                >
                  Update without Photos
                </button>
              ) : (
                <button style={{ marginRight: "40px" }} onClick={skipHandler}>
                  Maybe Later... Skip!
                </button>
              )}

              <button onClick={closeHandler}>Close... Back to the form</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
