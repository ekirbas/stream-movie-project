import * as React from "react";
import { SVGProps } from "react";
const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={103}
    height={111}
    viewBox="0 0 103 111"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_b_90_253)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.937622 13.348C0.937622 3.87477 11.0942 -2.1305 19.3948 2.43482L96.0544 44.5976C104.658 49.3295 104.658 61.692 96.0543 66.4239L19.3948 108.587C11.0942 113.152 0.937622 107.147 0.937622 97.6735V13.348Z"
        fill="url(#paint0_linear_90_253)"
        fillOpacity={0.3}
      />
      <path
        d="M1.43762 13.348C1.43762 4.25507 11.1864 -1.50912 19.1538 2.87293L95.8134 45.0357C104.072 49.5777 104.072 61.4439 95.8134 65.9858L19.1538 108.149C11.1864 112.531 1.43762 106.766 1.43762 97.6735V13.348Z"
        stroke="url(#paint1_linear_90_253)"
        strokeOpacity={0.5}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_90_253"
        x={-11.0624}
        y={-11.1246}
        width={125.569}
        height={133.271}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_90_253"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_90_253"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_90_253"
        x1={51.7223}
        y1={0.875366}
        x2={51.7223}
        y2={110.146}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.147231} stopColor="white" />
        <stop offset={0.42761} stopColor="white" stopOpacity={0.5} />
        <stop offset={1} stopColor="#1600FD" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_90_253"
        x1={51.7223}
        y1={0.875366}
        x2={51.7223}
        y2={110.146}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={1} stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);
export default PlayIcon;
