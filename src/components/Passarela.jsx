import * as React from "react"

export default function Passarela(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 595.28 919.39"
    className="fill-black w-screen h-screen " 
    xmlSpace="preserve"
    {...props}
  >
    <path d="
      M85.28 68.2H510v62H85.28z
      M85.28 171.2H510v62H85.28z
      M85.28 274.2H510v62H85.28z
      M85.28 377.2H510v62H85.28z
      M85.28 480.2H510v62H85.28z
      M85.28 583.2H510v62H85.28z
      M85.28 686.2H510v62H85.28z
      M85.28 789.2H510v62H85.28z
      M569.997 68.197v783h-25v-783z
      M50.273 68.202v783h-25v-783z
      "
    />
    <text transform="translate(150.457 34.914)" className="fill-green-500 text-4xl">
      {`ACESSO : ${props.acesso}`}
    </text>
    </svg>
  )
}
