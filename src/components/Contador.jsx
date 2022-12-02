//cont
import React from 'react'
import { useState } from 'react'
import Passarela from './Passarela'

function Contador () {
  const [contador, setContador] = useState(0)
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Passarela />
      <h1 className="text-5xl text-white">ACESSO</h1>
      <p className="text-6xl text-white">{contador}</p>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador + 1)}>Incrementar</button> */}
    </div>
  )
}

export default Contador