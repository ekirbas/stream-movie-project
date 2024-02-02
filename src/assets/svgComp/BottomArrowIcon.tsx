import * as React from "react";
import { SVGProps } from "react";
const BottomArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75"
      stroke="#999999"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BottomArrowIcon;
