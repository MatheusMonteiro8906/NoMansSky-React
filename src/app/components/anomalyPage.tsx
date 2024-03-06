"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";

export default function AnomalyPage() {

  return (
    <div>

      <Plx
        className="parallaxDefaultStyle"
        parallaxData={[{
          start: 320,
          end: 1200,
          properties: [
            {
              startValue: 20,
              endValue: 1,
              property: "scale",
            },
            {
              startValue: 8,
              endValue: 1,
              property: "brightness",
            },
            {
              unit: "%",
              startValue: 328,
              endValue: 0,
              property: "translateY",
            },
            {
              unit: "%",
              startValue: -58,
              endValue: 0,
              property: "translateX",
            },
          ],
        },
        ]}
      >
        <div className="TextContainer">
          <h1> <b>But even infinity</b></h1>
          <h2>Has its boundaries</h2>
        </div>
        <Image
          className="mainPageImage"
          src="/assets/images/atlasInsideInterface.png"
          alt="background"
          fill={true}
          quality={100}
        />
      </Plx>

    </div >
  );
}
