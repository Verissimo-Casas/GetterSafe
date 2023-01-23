//cont
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Contador () {
  const dados = useFetch('/dados').data?.map((item) => item.evento)
  const [contador, setContador] = useState(0)

  useEffect(() => {
    let cont = 0
    dados?.forEach((item) => item === 'in' ? cont++ : null)
    setContador(cont)
    console.log(cont)
  }, [dados])

  return (
    <div>
      <h1 className="text-white">Contador</h1>
      <h2 className="text-white">{contador}</h2>
    </div>
  )
}

export default Contador