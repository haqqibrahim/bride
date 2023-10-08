
export const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
  </svg>
)

export const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M15 3C8.373 3 3 8.373 3 15c0 6.016 4.432 10.984 10.206 11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C22.481 26.083 27 21.075 27 15c0-6.627-5.373-12-12-12z" />
  </svg>
)

export const LinkedIn = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z" />
  </svg>
)

export function Minus(props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
      
    >
      <defs>
        <style>{'.cls-1{fill-rule:evenodd}'}</style>
      </defs>
      <path className="cls-1" d="M.5 8.5v-1h15v1z" />
    </svg>
  );
}

export function Plus(props) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      
      {...props}
    >
      <defs>
        <style>{'.cls-1{fill-rule:evenodd}'}</style>
      </defs>
      <path className="cls-1" d="M.5 8.5v-1h15v1z" />
      <path className="cls-1" d="M8.5 15.5h-1V.5h1z" />
    </svg>
  );
}

export const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 30} height={props.height || 30} {...props}>
    <path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 0 0 2.345-2.951 10.696 10.696 0 0 1-3.388 1.295 5.334 5.334 0 0 0-9.089 4.864A15.143 15.143 0 0 1 3.809 5.411a5.321 5.321 0 0 0-.721 2.683 5.33 5.33 0 0 0 2.372 4.439 5.323 5.323 0 0 1-2.416-.667v.067a5.335 5.335 0 0 0 4.279 5.23 5.336 5.336 0 0 1-2.409.092 5.34 5.34 0 0 0 4.983 3.705 10.699 10.699 0 0 1-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 0 0 8.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0 0 28 6.937z" />
  </svg>
)
export const Arrow = (props) => (
  <svg
    width={props.width || 50}
    height={props.height || 50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M8 24a1 1 0 1 0 0 2v-2Zm34.707 1.707a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 0 0-1.414 1.414L40.586 25l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM8 26h34v-2H8v2Z"
        fill={props.fill || '#000'}
      />
    </g>
    <defs>
      <filter
        id="a"
        x={3}
        y={17.636}
        width={44}
        height={22.728}
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
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_113" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_16_113"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export const Vector = ({ progress = 0, ...props }) => {

  return (
    <svg
      viewBox="0 0 52 2047"
      fill={props.fill || "none"}
      
      {...props}
    >
      <path strokeWidth='6px' className="svg-path" d="M26 0V314C12 314 1 326 1 339C1 352 11 364 26 364C41 364 51 353 51 339C51 325 28 318 26 339V636V654.5C13.5 654.5 1 664 1 679C1 694 12 703 26 703C40 703 50.5 692.5 50.5 679C49.2307 664.367 26 660 26 679V979V994.5C13.5 994.5 0.999993 1003.5 1 1019C1.00001 1034.5 12.3457 1044.15 26 1043.5C36.5163 1043 50.4852 1035.18 50.5 1019C50.5148 1002.82 28.4963 1000.64 26 1019V1327C26 1327 26 1333.7 26 1338C13 1338 1 1348.5 1 1363C1 1377.5 13.5 1388 26 1388C38.5 1388 50.9422 1381.19 51 1363C51.0578 1344.81 26 1346 26 1363C26 1380 26 1670 26 1670V1678.5C12.5 1678.5 1 1687.5 1 1703C1 1718.5 14 1727.5 26 1727.5C38 1727.5 50.5 1719 50.5 1703C50.5 1687 26 1687 26 1703C26 1719 26 2049 26 2049" stroke="black"/>

    </svg>
  );
};


