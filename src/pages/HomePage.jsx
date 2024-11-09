import axios from "axios";
import { baseURL } from "../config/api";

function HomePage() {
  //   axios
  //     .get(`${baseURL}wings/`, {
  //         headers:{"Content-Type":"application/json", "Authorization":"Token "

  //         }
  //     })
  //     .then((response) => console.log(response))
  //     .then((error) => console.log(error));

  return (
    <div>
      <h1>Check our wings!</h1>
    </div>
  );
}

export default HomePage;
