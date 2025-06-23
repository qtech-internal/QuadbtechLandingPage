// const SvgImage = ({ width = 400, height = 300 }) => {
//     const themecolor = "var(--k-bg)";
//     return (
//       <>
//         <svg
//           width={width}
//           height={height}
//           viewBox="0 0 601 573"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//         >
//           <g opacity="0.6">
//             <mask
//               id="mask0_65053_2578"
//               style={{ maskType: "alpha" }}
//               maskUnits="userSpaceOnUse"
//               x="103"
//               y="130"
//               width="398"
//               height="315"
//             >
//               <path
//                 d="M494.639 399.205L450.246 441.35C447.471 443.98 443.115 443.976 440.345 441.342L319.308 326.042C309.919 317.097 294.537 317.084 285.134 326.013L162.606 442.313C159.831 444.943 155.475 444.939 152.704 442.304L108.384 400.083C105.407 397.251 105.411 392.502 108.392 389.675L246.39 258.69C277.16 229.489 327.456 229.532 358.176 258.786L494.657 388.788C497.634 391.619 497.63 396.369 494.649 399.195L494.639 399.205Z"
//                 fill="url(#paint0_linear_65053_2578)"
//               />
//               <path
//                 d="M497.188 130.622L106.315 130.287C104.566 130.286 103.147 131.702 103.146 133.451L103.09 199.157C103.088 200.906 104.504 202.325 106.253 202.326L497.126 202.66C498.875 202.662 500.294 201.245 500.295 199.497L500.351 133.791C500.353 132.042 498.936 130.623 497.188 130.622Z"
//                 fill="url(#paint1_linear_65053_2578)"
//               />
//             </mask>
//             <g mask="url(#mask0_65053_2578)">
//               <rect
//                 x="39.9844"
//                 y="-35.8193"
//                 width="1124.14"
//                 height="632.329"
//                 transform="rotate(20.555 39.9844 -35.8193)"
//                 fill="url(#pattern0_65053_2578)"
//               />
//               <rect
//                 x="95.8203"
//                 y="71.4231"
//                 width="408.309"
//                 height="408.309"
//                 transform="rotate(0.0489972 95.8203 71.4231)"
//                 fill="url(#pattern1_65053_2578)"
//               />
//               <g style={{ mixBlendMode: "color" }}>
//                 <rect
//                   x="73.9297"
//                   y="71.4043"
//                   width="446.954"
//                   height="428.01"
//                   transform="rotate(0.0489972 73.9297 71.4043)"
//                   fill={themecolor}
//                 />
//               </g>
//             </g>
//           </g>
//           <defs>
//             <pattern
//               id="pattern0_65053_2578"
//               patternContentUnits="objectBoundingBox"
//               width="1"
//               height="1"
//             >
//               <use
//                 xlinkHref="#image0_65053_2578"
//                 transform="scale(0.000400071 0.000711238)"
//               />
//             </pattern>
//             <pattern
//               id="pattern1_65053_2578"
//               patternContentUnits="objectBoundingBox"
//               width="1"
//               height="1"
//             >
//               <use xlinkHref="#image1_65053_2578" transform="scale(0.00125)" />
//             </pattern>
//             <linearGradient
//               id="paint0_linear_65053_2578"
//               x1="59.5459"
//               y1="173.602"
//               x2="409.436"
//               y2="489.616"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#EEABFB" />
//               <stop offset="1" stopColor="#9F1AB1" />
//             </linearGradient>
//             <linearGradient
//               id="paint1_linear_65053_2578"
//               x1="171.893"
//               y1="49.2179"
//               x2="521.784"
//               y2="365.232"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop stopColor="#EEABFB" />
//               <stop offset="1" stopColor="#9F1AB1" />
//             </linearGradient>
  
//             <image
//               id="image0_65053_2578"
//               width="2500"
//               height="1406"
//               preserveAspectRatio="none"
//               xlinkHref="/k.gif"
//             />
//           </defs>
//         </svg>
//       </>
//     );
//   };
  
//   export default SvgImage;
  import React from 'react';

const SvgImage = ({ width = 700, height = 500 }) => { 
    const themecolor = "var(--k-bg)";
    return (
      <>
        <svg
          width={width}
          height={height}
          viewBox="0 0 601 573"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* ... rest of your SVG code remains the same ... */}
          <g opacity="0.6">
            <mask
              id="mask0_65053_2578"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="103"
              y="130"
              width="398"
              height="315"
            >
              <path
                d="M494.639 399.205L450.246 441.35C447.471 443.98 443.115 443.976 440.345 441.342L319.308 326.042C309.919 317.097 294.537 317.084 285.134 326.013L162.606 442.313C159.831 444.943 155.475 444.939 152.704 442.304L108.384 400.083C105.407 397.251 105.411 392.502 108.392 389.675L246.39 258.69C277.16 229.489 327.456 229.532 358.176 258.786L494.657 388.788C497.634 391.619 497.63 396.369 494.649 399.195L494.639 399.205Z"
                fill="url(#paint0_linear_65053_2578)"
              />
              <path
                d="M497.188 130.622L106.315 130.287C104.566 130.286 103.147 131.702 103.146 133.451L103.09 199.157C103.088 200.906 104.504 202.325 106.253 202.326L497.126 202.66C498.875 202.662 500.294 201.245 500.295 199.497L500.351 133.791C500.353 132.042 498.936 130.623 497.188 130.622Z"
                fill="url(#paint1_linear_65053_2578)"
              />
            </mask>
            <g mask="url(#mask0_65053_2578)">
              <rect
                x="39.9844"
                y="-35.8193"
                width="1124.14"
                height="632.329"
                transform="rotate(20.555 39.9844 -35.8193)"
                fill="url(#pattern0_65053_2578)"
              />
              <rect
                x="95.8203"
                y="71.4231"
                width="408.309"
                height="408.309"
                transform="rotate(0.0489972 95.8203 71.4231)"
                fill="url(#pattern1_65053_2578)"
              />
              <g style={{ mixBlendMode: "color" }}>
                <rect
                  x="73.9297"
                  y="71.4043"
                  width="446.954"
                  height="428.01"
                  transform="rotate(0.0489972 73.9297 71.4043)"
                  fill={themecolor}
                />
              </g>
            </g>
          </g>
          <defs>
            <pattern
              id="pattern0_65053_2578"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_65053_2578"
                transform="scale(0.000400071 0.000711238)"
              />
            </pattern>
            <pattern
              id="pattern1_65053_2578"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image1_65053_2578" transform="scale(0.00125)" />
            </pattern>
            <linearGradient
              id="paint0_linear_65053_2578"
              x1="59.5459"
              y1="173.602"
              x2="409.436"
              y2="489.616"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EEABFB" />
              <stop offset="1" stopColor="#9F1AB1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_65053_2578"
              x1="171.893"
              y1="49.2179"
              x2="521.784"
              y2="365.232"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EEABFB" />
              <stop offset="1" stopColor="#9F1AB1" />
            </linearGradient>

            <image
              id="image0_65053_2578"
              width="2500"
              height="1406"
              preserveAspectRatio="none"
              xlinkHref="/k.gif"
            />
          </defs>
        </svg>
      </>
    );
};

export default SvgImage;