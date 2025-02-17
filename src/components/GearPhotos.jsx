import { pureBaseURL } from "../config/api";

function GearPhotos({ id, info }) {
  // console.log(info?.data);
  if (info?.data?.pictures?.length === 0)
    return (
      <div>
        <h2 className="text-lg md:2xl">Item has no photos</h2>
        <img src="/src/public/logo.png" alt="No photo" />
        <hr />
      </div>
    );
  return (
    <div className="flex flex-col gap-y-10  sm:flex-row sm:justify-evenly flex-wrap">
      {info?.data?.pictures.map((item) => (
        <div key={item?.picture_id}>
          <img
            className="w-60 h-60 rounded-lg m-auto"
            src={`${pureBaseURL}${item.link}`}
            alt="Uploaded Photos"
          />
        </div>
      ))}
    </div>
  );
}

export default GearPhotos;
