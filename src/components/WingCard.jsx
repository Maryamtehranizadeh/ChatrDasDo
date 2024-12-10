import { useQuery } from "@tanstack/react-query"
import { getAllGears } from "../utils/getAll"
import { pureBaseURL } from "../config/api"
import { Link } from "react-router-dom"

function WingCard({ wing }) {
  console.log(wing)
  const { id } = wing
  console.log(id)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        rowGap: "10px",
      }}
    >
      <h2>{wing.brand}</h2>
      <img
        style={{ width: "250px", height: "250px" }}
        alt={wing.name}
        src={
          wing.pictures.length === 0
            ? `/src/public/logo.png`
            : `${pureBaseURL}${wing.pictures[0].link}`
        }
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{wing.name}</p>
        <span>{wing.model}</span>
      </div>
      <h4>
        {wing.price} {wing.currency}
      </h4>
      <Link>
        <button>Check more properties</button>
      </Link>
    </div>
  )
}

export default WingCard
