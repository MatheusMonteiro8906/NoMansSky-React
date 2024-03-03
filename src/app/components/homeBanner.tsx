"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";
import SideIcon from "./sideIcon";

export default function HomeBanner() {

  return (
    <div>

      <div className="TextContainer">
        <h1> <b>NO MAN'S SKY</b></h1>
        <h2>A JOURNEY THROUGH INFINITY</h2>
      </div>

      <Plx
        className="parallaxDefaultStyle"
        parallaxData={[{
          start: 0,
          end: 400,
          properties: [
            {
              startValue: 1,
              endValue: 2.5,
              property: "scale",
            },
            {
              startValue: 1,
              endValue: 2,
              property: "brightness",
            },
            {
              unit: "%",
              startValue: 0,
              endValue: -50,
              property: "translateY"
            },
          ],
        },
        {
          start: 320,
          duration: 55,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },

          ],
        },
        ]}
      >

        <Image draggable={false}
          className="mainPageImage"
          src="/assets/images/nmsBackground.png"
          alt="background"
          fill={true}
          quality={100}
          priority={true}
        />
      </Plx>

    </div >
  );
}
