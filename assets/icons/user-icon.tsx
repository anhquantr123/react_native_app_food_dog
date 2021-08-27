import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface userIcon{
    size ?: number | any , 
    colorFill? : string | any
}

function UserIcon({size , colorFill}: userIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
   
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9a4 4 0 118 0 4 4 0 01-8 0zm7.642 4.769a6 6 0 10-7.283 0C5.813 14.907 4 17.208 4 20a1 1 0 001 1h14a1 1 0 001-1c0-2.792-1.814-5.093-4.358-6.231zM12 15c-3.016 0-5.329 1.803-5.876 4h11.752c-.547-2.197-2.86-4-5.876-4z"
        fill={colorFill}
      />
    </Svg>
  )
}

export default UserIcon