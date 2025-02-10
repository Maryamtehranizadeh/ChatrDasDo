import { pureBaseURL } from "../config/api";

function GearPhotos({ id, info }) {
  // console.log(info?.data);
  if (info?.data?.pictures?.length === 0)
    return (
      <div>
        <h2>Item has no photos</h2>
        <hr />
      </div>
    );
  return (
    <div style={{ display: "flex", columnGap: "20px" }}>
      {info?.data?.pictures.map((item) => (
        <div key={item?.picture_id}>
          <img
            src={`${pureBaseURL}${item.link}`}
            alt="Uploaded Photos"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default GearPhotos;
