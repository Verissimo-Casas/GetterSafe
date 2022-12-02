import * as React from "react"



const SetaContador = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    {...props}
  >
    <title>{"Seta"}</title>
    <circle
      cx={9}
      cy={9}
      r={7.5}
      style={{
        fill: "#164756",
      }}
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M6.72 3.55v10.9L14.54 9 6.72 2.55z"
    />
  </svg>
)

export default SetaContador
