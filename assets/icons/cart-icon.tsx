import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface cartIcon{
    size?: number| any ,
}

function CartIcon({size = 24}: cartIcon) {
  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
   
  >
    <Path
      d="M20 22a1 1 0 100-2 1 1 0 000 2zM9 22a1 1 0 100-2 1 1 0 000 2zM1 2h4l2.68 12.497c.091.43.342.816.708 1.09.365.275.823.421 1.292.413h9.72c.47.008.927-.138 1.293-.413a1.85 1.85 0 00.707-1.09l1.6-7.83H6"
      stroke="#A2A2A2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

export default CartIcon