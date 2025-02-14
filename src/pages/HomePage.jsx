import Allgears from "../components/Allgears";
import { useType } from "../context/TypeProvider";
import { Link } from "react-router-dom";
function HomePage() {
  const { allTypes } = useType();
  return (
    <div>
      <Allgears number={4} />
      <div className="text-center">
        <Link to="/gears">
          <button className=" text-xl transform mb-8 p-5 sm:text-3xl">
            Click here to see all our gears ...
          </button>
        </Link>

        <div className="text-[var(--primary-color)] text-lg w-2/5  mx-auto">
          {allTypes.map((type) => (
            <Link
              style={{ marginRight: "20px" }}
              key={type.id}
              to={`/${type.name}`}
            >
              <li className="whitespace-nowrap overflow-hidden text-ellipsis list-none p-3  transition-all duration-700  shadow-sm hover:shadow-lg shadow-[var(--border-color)] hover:shadow-[var(--primary-color)] rounded-lg hover:text-[var(--p-color)]">
                {type.name}: {type.description}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
