import { getMyGears } from "../utils/getAll"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import styles from "./WingList.module.css"
import { Link } from "react-router-dom"
import { deleteGear } from "../utils/deleteAll"
import { useEffect } from "react"

function WingList({ id }) {
  // console.log(id)
  const queryClient = useQueryClient()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["gears", id],
    queryFn: getMyGears,
  })
  const deleteMutation = useMutation({
    mutationFn: deleteGear,
    onSuccess: (response) => {
      console.log(response)
      // Invalidate and refetch the wings query to reflect the changes after deletion
      queryClient.invalidateQueries(["wings"])
    },
    onError: (error) => {
      console.error("Error deleting gear:", error)
    },
  })
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteMutation.mutate(id) // Pass the ID in the correct format for deleteGear
    }
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h3>Error: {error.message}</h3>
  }
  console.log(data?.data)

  return (
    <div className={styles.container}>
      {data?.data.map((wing) => (
        <div className={styles.wing} key={wing.id}>
          <Link to={`/itemdetails/${wing.id}`}>
            <h3>{wing.name}</h3>
          </Link>
          <p>{wing.brand}</p>
          <p>User ID: {wing.user}</p>
          <span>{wing.price}</span>
          <button
            onClick={() => deleteHandler(wing.id)}
            style={{ border: "1px solid var(--primary-color)" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default WingList
