"use client";
import Plx from "react-plx";
import "../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  useEffect(() => { scrollHome() })
  return (
    <div>
      <Plx
        parallaxData={[{
          start: 0,
          end: 300,
          properties: [
            {
              startValue: 1,
              endValue: 2.5,
              property: "scale",
            },
            {
              startValue: 1,
              endValue: 3,
              property: "brightness",
            },
          ],
        },
        {
          start: 200,
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
          src="/assets/images/anomaly.jpg"
          alt="background"
          width={1600}
          height={900}
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 200,
            properties: [
              {
                startValue: -3,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "1vh",
          width: "100%",
          transform: " translateX(45.5%)"
        }}
      >
        <Image
          src="/assets/images/atlasIcon.png"
          alt="background"
          width={72}
          height={86}
          onClick={() => { scrollHome() }}

          style={{ cursor: "pointer", position: "fixed" }}
        />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 300,
            end: 200,
            properties: [
              {
                startValue: -0,
                endValue: 1,
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
        <Image
          src="/assets/images/No-Mans-Sky-4K-Wallpaper.jpg"
          alt="background"
          width={1600}
          height={900}
          onClick={() => { scrollHome() }}
          style={{ cursor: "pointer", position: "fixed" }}
        />
      </Plx>


    </div >
  );
}
