import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


interface chatIcon{
    size ?: number | any , 
    colorFill? : string | any
}
function ChatIcon({size= 20, colorFill}: chatIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M4.259 16.594a8.996 8.996 0 113.147 3.147h0l-3.108.888a.75.75 0 01-.927-.927l.888-3.109h0z"
        stroke={colorFill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 13.129a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM12 13.129a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM16.5 13.129a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill={colorFill}
      />
    </Svg>
  )
}

export default ChatIcon