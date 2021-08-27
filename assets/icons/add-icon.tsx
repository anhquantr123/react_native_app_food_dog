import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

interface addIcon{
    size?: number | any ,
    
}

function AddIcon({size}: addIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"

    >
      <Rect width={32} height={32} rx={16} fill="#EF7C91" />
      <Path
        d="M9.813 16h12.374M16 9.813v12.374"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default AddIcon
