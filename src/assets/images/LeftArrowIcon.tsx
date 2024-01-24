import * as React from "react";
import { SVGProps } from "react";
const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.75 9L1.25 9M1.25 9L9.125 16.875M1.25 9L9.125 1.125"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LeftArrowIcon;
