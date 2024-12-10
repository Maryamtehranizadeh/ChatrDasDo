import { useEffect } from "react"
import { getUser } from "../utils/getAll"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import WingList from "../components/WingList"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  })
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>
  }

  // console.log(data?.data.id)

  return (
    <div style={{ margin: "20px" }}>
      <h3>Dashboard | Welcome "{data?.data.email}"</h3>
      <Link to="/addgear">
        <button
          style={{ border: "1px solid var( --primary-color)", margin: "20px" }}
        >
          Place an add and sell your item!
        </button>
      </Link>
      <div>
        <h1>My Gears</h1>
        <WingList id={data.data.id} />
      </div>
    </div>
  )
}

export default Dashboard
