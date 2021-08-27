import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface backIcon{
    size?: number | any ,


}

function BackIcon({size }: backIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M16.875 10H3.125M8.75 4.375L3.125 10l5.625 5.625"
        stroke="#000"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackIcon