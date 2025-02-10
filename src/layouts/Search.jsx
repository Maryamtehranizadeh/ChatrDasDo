import { useType } from "../context/TypeProvider";
function Search() {
  const { allTypes } = useType();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "var(--primary-color)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "baseline", marginLeft: "30px" }}
      >
        <input type="text" placeholder="Search" />
        <p
          style={{
            color: "var(--secondary-color)",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          in
        </p>
        <select
          name="gear_type"
          id="category"
          style={{ color: "var(--p-color)" }}
        >
          <option value="none">All Categories</option>
          {allTypes?.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <button style={{ color: "var(--secondary-color)" }}>Search</button>
      </div>
      <div
        style={{
          color: "var(--secondary-color)",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        {/* <button>EN</button> */}
        <button>Ins</button>
        <button>Tel</button>
        <button>FB</button>
      </div>
    </div>
  );
}

export default Search;
