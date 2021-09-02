import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

interface minusIcon{
    size: number| any , 

}


function MinusIcon(props: minusIcon) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"

    >
      <Rect width={24} height={24} rx={12} fill="silver" />
      <Path
        d="M7.875 12h8.25"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MinusIcon
