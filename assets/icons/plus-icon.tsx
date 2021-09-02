import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

interface plusIcon{
    size: number | any ,
}

function PlusIcon(props: plusIcon) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"

    >
      <Rect width={24} height={24} rx={12} fill="#EF7C91" />
      <Path
        d="M7.875 12h8.25M12 7.875v8.25"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PlusIcon
