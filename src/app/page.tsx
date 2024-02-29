"use client";
import Plx from "react-plx";
import "../../public/assets/styles/main.css";
import "../../public/assets/images/background.jpg";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("teswe");
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
          start: 230,
          duration: 300,
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
        <Image
          style={{ width: "100%" }}
          src="/assets/images/no-mans-sky-original-logo_1920.0.jpg"
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
                startValue: -2,
                endValue: 816,
                property: "translateX",
              },
              {
                startValue: -34,
                endValue: -242,
                property: "translateY",
              },
              {
                startValue: 5.6,
                endValue: 1,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "15vw",
          width: "100%",
        }}
      >
        <Image
          src="/assets/images/atlas.webp"
          alt="background"
          width={160}
          height={82}
          onClick={() => { scrollHome() }}

          style={{ cursor: "pointer" }}
        />
      </Plx>
    </div>
  );
}
