import { Link } from "react-router-dom";
import Allgears from "../components/Allgears";
import GearListPage from "./GearListPage";

function HomePage() {
  return (
    <div>
      <Allgears />
      <GearListPage />
    </div>
  );
}

export default HomePage;
