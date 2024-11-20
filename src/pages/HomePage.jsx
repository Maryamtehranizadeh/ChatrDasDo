import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <h3>Check our gears!</h3>
        <Link to="/gears">
          <button>Gears</button>
        </Link>
      </div>
      <div>
        <h3>Check our wings!</h3>
        <Link to="/wings">
          <button>Wings</button>
        </Link>
      </div>

      <div>
        <h3>Check our certifiers!</h3>
        <Link to="/certifiers">
          <button>Certifiers</button>
        </Link>
      </div>
      <div>
        <h3>Check our certificates!</h3>
        <Link to="/certificates">
          <button>Certificates</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
