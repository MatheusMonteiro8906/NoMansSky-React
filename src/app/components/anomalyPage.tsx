"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";

export default function AnomalyPage() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  useEffect(() => { scrollHome() })
  return (
    <div>

      <Plx
        parallaxData={[{
          start: 340,
          end: 800,
          properties: [
            {
              startValue: 4,
              endValue: 1,
              property: "scale",
            },
            {
              startValue: 3,
              endValue: 1,
              property: "brightness",
            },
          ],
        },
        {
          start: 750,
          duration: 100,
          properties: [
            {
              startValue: 0,
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
          opacity: "0"
        }}
      >
        <Image
          style={{ width: "100%" }}
          src="/assets/images/anomaly.jpg"
          alt="background"
          width={1600}
          height={600}
        />
      </Plx>

    </div >
  );
}
