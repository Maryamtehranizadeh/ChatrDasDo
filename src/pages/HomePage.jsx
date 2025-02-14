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
          <button className=" text-3xl transform mb-8 p-5 ">
            Click here to see all our gears ...
          </button>
        </Link>

        <div className="text-[var(--primary-color)] text-lg w-1/2  mx-auto">
          {allTypes.map((type) => (
            <Link
              style={{ marginRight: "20px" }}
              key={type.id}
              to={`/${type.name}`}
            >
              <li className="list-none p-3 text-2xl transition-all duration-700  hover:shadow-lg hover:shadow-[var(--primary-color)] rounded-lg hover:text-[var(--border-color)]">
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
