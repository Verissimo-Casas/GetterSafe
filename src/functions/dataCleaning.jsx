import {useFetch} from '../hooks/useFetch'

function dataCleaning() {
  const {data}= useFetch('/dados')
  useFetch('/dados').data?.forEach((item) => item.evento === 'in' ? setAcesso(): null)

  // const dataClean = data?.map((item) => { return {evento: item.evento, data: item.data, hora: item.hora}})
}

  // data_hora	"2023-01-10, 21:02:24"
  // data	"2023-01-10"
  // hora	"21:02:24"
  // hora_h	"21h"
  // evento	"in"