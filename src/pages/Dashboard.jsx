import { Link } from "react-router-dom";
import MyGearList from "../components/MyGearList";
import { useUser } from "../context/UserProvider";

function Dashboard() {
  const { userData } = useUser();
  // console.log(userData);
  return (
    <div className="text-center">
      <h1 className="text-lg  md:text-3xl my-8">
        Dashboard | Welcome "{userData.username}"
      </h1>
      <div>
        <MyGearList id={userData?.id} />
      </div>
    </div>
  );
}

export default Dashboard;
