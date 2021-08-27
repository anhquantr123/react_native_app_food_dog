import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


interface searchIcon{
    size?: number| any, 
}

function SearchIcon({size}: searchIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"

    >
      <Path
        d="M17.092 15.908L14 12.842A7.5 7.5 0 1012.842 14l3.066 3.067a.834.834 0 001.184 0 .833.833 0 000-1.159zM8.167 14a5.833 5.833 0 110-11.666 5.833 5.833 0 010 11.666z"
        fill="#A2A2A2"
      />
    </Svg>
  )
}

export default SearchIcon