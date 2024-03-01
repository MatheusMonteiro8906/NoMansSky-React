"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";

export default function HomeBanner() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  useEffect(() => { scrollHome() })
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
          ],
        },
        {
          start: 320,
          duration: 100,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            },
          ],
        },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <div className="TextContainer">
          <h1> <b>NO MAN'S SKY</b></h1>
          <h2>A JOURNEY THROUGH INFINITY</h2>
        </div>
        <Image
          style={{ width: "100%" }}
          src="/assets/images/nmsBackground.png"
          alt="background"
          width={1600}
          height={600}
        />
      </Plx>

    </div >
  );
}
