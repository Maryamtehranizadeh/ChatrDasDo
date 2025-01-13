import { useAuth } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../utils/getAll";

function UserProfile() {
  const { loginToken } = useAuth;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnMount: true,
    staleTime: 0,
    enabled: !!loginToken,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  console.log(data?.data.id);
  console.log(data?.data);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "200px",
          width: "300px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="/src/public/user.png" alt="User" />
        {data?.data.is_certified_seller ? (
          <p>
            {data?.data.first_name} {data?.data.last_name} is a certified seller
          </p>
        ) : (
          <p>
            {data?.data.first_name} {data?.data.last_name}
          </p>
        )}
      </div>
      <div>
        <h2>Personal Details</h2>
        <p>Username:{data?.data.username}</p>
        <p>Email: {data?.data.email}</p>
        <p>Location: </p>
      </div>
    </div>
  );
}

export default UserProfile;
