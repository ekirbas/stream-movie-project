import * as React from "react";
import { SVGProps } from "react";
const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.82422 10L20.5742 10M20.5742 10L12.1367 1.5625M20.5742 10L12.1367 18.4375"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default RightArrowIcon;
