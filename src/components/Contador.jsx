//cont
import React from 'react'
import { useState } from 'react'

function Contador () {
  const[acesso, setAcesso] = useState(0)

  return (
    <div className='flex items-center justify-center'> 
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl text-green-600 py-2">ENTRADA</h1>
        <p className="text-5xl text-green-600">{acesso}</p>
      </div>
    </div>
  )
}

export default Contador