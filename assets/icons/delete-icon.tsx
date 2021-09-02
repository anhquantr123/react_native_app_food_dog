import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


interface deleteIcon{
    size?: number | any 
}
function DeleteIcon(props: deleteIcon) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"

    >
      <Path
        d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM14 11v6M10 11v6"
        stroke="#DB2828"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DeleteIcon
