import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../config/api";
import { getCookie } from "../utils/cookie";

function PhotoModal({ setPhotos, itemId, photos, setIsModal }) {
  const navigate = useNavigate();

  const skipHandler = () => {
    setIsModal(false);
    navigate(`/itemdetails/${itemId}`);
  };
  const photoHandler = (event) => {
    console.log(event.target.files);
    const selectedPhotos = event.target.files;
    setPhotos((previousPhotos) => [
      ...previousPhotos,
      ...Array.from(selectedPhotos),
    ]);
  };

  const deleteHandler = (fileName) => {
    setPhotos(photos.filter((photo) => photo.name !== fileName));
  };

  useEffect(() => {
    if (photos.length > 0) {
      console.log("Updated photos:", photos);
    }
  }, [photos]);

  const addPhotoHandler = () => {
    const formData = new FormData();
    photos.forEach((photo, index) => {
      formData.append("image", photo);
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    axios
      .post(`${baseURL}gears/${itemId}/pictures/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${getCookie()}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
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
          Now add some photos of your Item
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
            Upload Photos
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
            {photos.map((photo) => (
              <div
                key={photo.lastModified}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={URL.createObjectURL(photo)}
                  alt={photo.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
                <p>{photo.name}</p>
                <button
                  onClick={() => deleteHandler(photo.name)}
                  style={{ border: "1px solid var(--primary-color)" }}
                >
                  Delete
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
              Add Photos
            </button>
          )}
          {photos.length == 0 && (
            <button
              onClick={skipHandler}
              className="px-4 py-2 text-white rounded-lg hover:opacity-90"
              style={{
                color: "var(--primary-color)",
                border: "1px solid var(--primary-color)",
                margin: "auto",
              }}
            >
              Maybe Later... Skip!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
