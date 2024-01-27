import * as React from "react";
import { SVGProps } from "react";
const UpArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19.5L12 4.5M12 4.5L5.25 11.25M12 4.5L18.75 11.25"
      stroke="#999999"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default UpArrowIcon;
