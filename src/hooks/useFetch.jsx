import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
  baseURL:"http://127.0.0.1:5000"
})

export function useFetch(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get(url)
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return { data, loading, error}
}