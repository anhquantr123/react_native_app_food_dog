import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"


interface notificationIcon{
    size ?: number | any , 
    colorFill? : string | any
}

function NotificationIcon({size= 20, colorFill}: notificationIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M9 22s1.812.5 3 .5 3-.5 3-.5M5.269 9.75A6.74 6.74 0 0112.051 3c3.712.028 6.68 3.113 6.68 6.835v.665c0 3.358.703 5.306 1.322 6.371A.75.75 0 0119.408 18S14.919 19 12 19c-2.92 0-7.408-1-7.408-1a.749.749 0 01-.645-1.13c.62-1.064 1.322-3.013 1.322-6.37v-.75z"
        stroke={colorFill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default NotificationIcon
