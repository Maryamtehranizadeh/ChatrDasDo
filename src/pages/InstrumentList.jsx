import { Link } from "react-router-dom";

function InstrumentList() {
  return (
    <div>
      <h1>Flying Instruments</h1>
      <Link to="/addgear">
        <button>Click here to add your Item!</button>
      </Link>
    </div>
  );
}

export default InstrumentList;
