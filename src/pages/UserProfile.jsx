import { useUser } from "../context/UserProvider";

function UserProfile() {
  const { userData } = useUser();
  // console.log(userData);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "200px",
          width: "300px",
          margin: "auto",
          marginBottom: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/src/public/user.png" alt="User" />
        {userData?.is_certified_seller ? (
          <p>
            {userData?.first_name} {userData?.last_name} is a certified seller
          </p>
        ) : (
          <p>
            {userData?.first_name} {userData?.last_name}
          </p>
        )}
      </div>
      <div style={{ margin: "40px" }}>
        <h2>Personal Details</h2>
        <p>Username:{userData?.username}</p>
        <p>Email: {userData?.email}</p>
        <p>Location: </p>
      </div>
    </div>
  );
}

export default UserProfile;
