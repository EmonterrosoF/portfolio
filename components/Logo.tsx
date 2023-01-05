import { FC } from 'react'

export const SvgLogo: FC = (props) => (
  <svg
    width={105}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M42.814 3.502v6.577l-28.14 12.06S40.256 34.2 40.621 34.93c.366.731 3.362 5.19 2.193 6.944L7 25.429V19.58l35.814-16.08Z"
        fill="#000"
      />
      <path
        d="M42.814 3.502v6.577l-28.14 12.06S40.256 34.2 40.621 34.93c.366.731 3.362 5.19 2.193 6.944L7 25.429V19.58l35.814-16.08Z"
        stroke="#fff"
      />
    </g>
    <g filter="url(#b)">
      <path
        d="m63 4 35.448 17.176v4.75L63 42.003c1.17-1.757.487-4.762 0-6.044l28.14-12.59L63 10.945V4Z"
        fill="#000"
      />
      <path
        d="m63 4 35.448 17.176v4.75L63 42.003c1.17-1.757.487-4.762 0-6.044l28.14-12.59L63 10.945V4Z"
        stroke="#F7F7F7"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.5}
        y={0.729}
        width={49.083}
        height={51.777}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.677646 0 0 0 0 0 0 0 0 0 0.908333 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_67_6" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_67_6"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        x={55.617}
        y={1.202}
        width={49.332}
        height={51.977}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.798942 0 0 0 0 0.208333 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_67_6" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_67_6"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
