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
          end: 800,
          properties: [
            {
              startValue: 5,
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
        ]}
      >
        <Image
          className="mainPageImage"
          src="/assets/images/anomaly.jpg"
          alt="background"
          width={1920}
          height={1080}
          quality={100}
        />
      </Plx>

    </div >
  );
}
