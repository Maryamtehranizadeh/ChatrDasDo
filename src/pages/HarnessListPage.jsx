import { Link } from "react-router-dom";


function HarnessListPage() {
  return (
    <div>
      <h1>Check our Harnesses</h1>
      <Link to="/addgear">
        <button>Click here to add your Harness!</button>
      </Link>
    </div>
  );
}

export default HarnessListPage;
