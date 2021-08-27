import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface homeIcon{
    size ?: number | any , 
    colorFill? : string | any
}

function HomeIcon({size= 20, colorFill}: homeIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M20.005 10.277l-7.501-6.82a.75.75 0 00-1.01 0l-7.499 6.82a.75.75 0 00-.245.555V19.5a.75.75 0 00.75.75h15a.75.75 0 00.75-.75v-8.668a.75.75 0 00-.245-.555z"
        stroke={colorFill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17h4"
        stroke={colorFill}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default HomeIcon
