//cont
import React from 'react'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Contador () {
  let cont = 0
  // useFetch('/dados').data?.foreach((item) => item.evento === 'in' ? console.log(cont++) : null)
  useFetch('/dados').data?.forEach((item) => item.evento === 'in' ? () => setContador(contador + 1) : null)
  const [contador, setContador] = useState(1)



  return (
    <div>
      <h1 className="text-white">Contador</h1>
      {/* <button className="btn btn-primary" onClick={() => setContador(contador + 1)}>Incrementar</button> */}
      <h2 className="text-white">{contador}</h2>
    </div>
  )
}

export default Contador