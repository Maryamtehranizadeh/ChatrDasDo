import { useQuery } from "@tanstack/react-query";
import { getAllGears } from "../utils/getAll";
import { pureBaseURL } from "../config/api";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function WingCard({ wing }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-[15px] gap-[10px] rounded-[10px] bg-white">
      <h2>{wing.brand}</h2>
      <img
        className="w-[250px] h-[250px]"
        alt={wing.name}
        src={
          wing.pictures.length === 0
            ? `/src/public/logo.png`
            : `${pureBaseURL}${wing.pictures[0].link}`
        }
      />
      <div className="flex justify-between mb-5 text-[var(--p-color)]">
        <p>{wing.name}</p>
        <span>{wing.model}</span>
      </div>
      <h4>
        {wing.price} {wing.currency}
      </h4>
      <Link to={`/itemdetails/${wing.id}`}>
        <button>Check more... </button>
      </Link>
    </div>
  );
}

export default WingCard;
