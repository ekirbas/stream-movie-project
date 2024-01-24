import * as React from "react";
import { SVGProps } from "react";
const LangIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 19.5L13.75 8.25L19 19.5M10 16.5H17.5M1 4.12136C2.96557 3.87626 4.96804 3.75 7 3.75M7 3.75C8.12081 3.75 9.23265 3.78841 10.3343 3.864M7 3.75V1.5M10.3343 3.864C9.17633 9.15781 5.68868 13.5801 1 16.0023M10.3343 3.864C11.2298 3.92545 12.1186 4.01146 13 4.12136M8.41128 12.6162C6.78554 10.9619 5.47704 8.99491 4.58432 6.81366"
      stroke="#999999"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LangIcon;
