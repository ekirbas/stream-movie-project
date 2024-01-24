import * as React from "react";
import { SVGProps } from "react";
const VolumeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.7997 6.57535C26.9002 10.6759 26.9002 17.3241 22.7997 21.4246M19.7064 9.66904C22.0984 12.061 22.0984 15.9391 19.7064 18.3311M8.375 9.62504L13.8813 4.11875C14.4325 3.56753 15.375 3.95793 15.375 4.73747V23.2626C15.375 24.0421 14.4325 24.4325 13.8813 23.8813L8.375 18.375H5.76056C4.73466 18.375 3.77356 17.7842 3.5011 16.7951C3.25595 15.9052 3.125 14.9679 3.125 14C3.125 13.0322 3.25595 12.0949 3.5011 11.205C3.77356 10.2159 4.73466 9.62504 5.76056 9.62504H8.375Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default VolumeIcon;
