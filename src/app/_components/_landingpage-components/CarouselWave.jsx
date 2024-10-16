import React from "react";

function CarouselWave() {
  return (
    <div>
      <div>
        <svg
          id="wave"
          viewBox="0 0 1440 160"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "rotate(180deg)",
            transition: "transform 0.3s",
          }}
        >
          <defs>
            <linearGradient
              id="sw-gradient-0"
              x1="0%"
              x2="0%"
              y1="100%"
              y2="0%"
            >
              <stop offset="100%" stopColor="#ECF4FF" />
              <stop offset="0%" stopColor="#A4C8FF" />{" "}
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,95L60,85.5C120,76,240,57,360,41.2C480,25,600,13,720,15.8C840,19,960,38,1080,57C1200,76,1320,95,1440,88.7C1560,82,1680,51,1800,50.7C1920,51,2040,82,2160,88.7C2280,95,2400,76,2520,63.3C2640,51,2760,44,2880,41.2C3000,38,3120,38,3240,50.7C3360,63,3480,89,3600,101.3C3720,114,3840,114,3960,110.8C4080,108,4200,101,4320,82.3C4440,63,4560,32,4680,34.8C4800,38,4920,76,5040,85.5C5160,95,5280,76,5400,57C5520,38,5640,19,5760,34.8C5880,51,6000,101,6120,129.8C6240,158,6360,165,6480,155.2C6600,146,6720,120,6840,101.3C6960,82,7080,70,7200,66.5C7320,63,7440,70,7560,72.8C7680,76,7800,76,7920,79.2C8040,82,8160,89,8280,91.8C8400,95,8520,95,8580,95L8640,95L8640,190L8580,190C8520,190,8400,190,8280,190C8160,190,8040,190,7920,190C7800,190,7680,190,7560,190C7440,190,7320,190,7200,190C7080,190,6960,190,6840,190C6720,190,6600,190,6480,190C6360,190,6240,190,6120,190C6000,190,5880,190,5760,190C5640,190,5520,190,5400,190C5280,190,5160,190,5040,190C4920,190,4800,190,4680,190C4560,190,4440,190,4320,190C4200,190,4080,190,3960,190C3840,190,3720,190,3600,190C3480,190,3360,190,3240,190C3120,190,3000,190,2880,190C2760,190,2640,190,2520,190C2400,190,2280,190,2160,190C2040,190,1920,190,1800,190C1680,190,1560,190,1440,190C1320,190,1200,190,1080,190C960,190,840,190,720,190C600,190,480,190,360,190C240,190,120,190,60,190L0,190Z"
            style={{
              transform: "translate(0px, 0px)", // Add 'deg' for degrees
              opacity: 1, // Specify the property and duration
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default CarouselWave;
