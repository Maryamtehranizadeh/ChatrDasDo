import { Link } from "react-router-dom";

function InstrumentList() {
  return (
    <div>
      <h1>Welcome to our instruments' Page!</h1>
      <Link to="/addgear">
        <button>Add your Gear</button>
      </Link>
    </div>
  );
}

export default InstrumentList;
