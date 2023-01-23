import { useEffect } from 'react'
import {useFetch} from '../hooks/useFetch'

export function dataCleaning() {

  useEffect(() => {
    useFetch('/dados').data?.forEach((item) => item.evento === 'in' ? console.log(item) : null)
  }, [])
}

  // data_hora	"2023-01-10, 21:02:24"
  // data	"2023-01-10"
  // hora	"21:02:24"
  // hora_h	"21h"
  // evento	"in"