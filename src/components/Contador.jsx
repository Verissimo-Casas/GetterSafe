//cont
import React from 'react'
import { useState } from 'react'
import Passarela from './Passarela'
function Contador () {
  const [contador, setContador] = useState(0)
  return (
    <div className='flex items-center justify-center'> 
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl text-green-600 py-2">ENTRADA</h1>
        <p className="text-5xl text-green-600">{contador}</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador + 1)}>Incrementar</button> */}
      </div>,

      <Passarela />,

      <div className='flex flex-col items-center rotate-180'>
        <h1 className="text-4xl text-red-600 py-2">SAIDA</h1>
        <p className="text-5xl text-red-600">{contador}</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador + 1)}>Incrementar</button> */}
      </div>
    </div>

  )
}

export default Contador