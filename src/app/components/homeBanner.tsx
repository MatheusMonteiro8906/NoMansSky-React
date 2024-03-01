"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";

export default function HomeBanner() {

  return (
    <div>

      <Plx
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
        className="parallaxDefaultStyle"
      >
        <div className="TextContainer">
          <h1> <b>NO MAN'S SKY</b></h1>
          <h2>A JOURNEY THROUGH INFINITY</h2>
        </div>
        <Image
          className="mainPageImage"
          src="/assets/images/nmsBackground.png"
          alt="background"
          width={1920}
          height={1080}
          quality={100}
          priority={true}
        />
      </Plx>

    </div >
  );
}
