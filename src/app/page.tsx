"use client";
import Plx from "react-plx";
import "../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";
import HomeBanner from "./components/homeBanner";
import AnomalyPage from "./components/anomalyPage";

export default function Home() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  useEffect(() => { scrollHome() })
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 200,
            properties: [
              {
                startValue: 1.2,
                endValue: 0.2,
                property: "scale",
              },
              {
                unit: "%",
                startValue: 0,
                endValue: 45,
                property: "translateX"
              },
              {
                unit: "%",
                startValue: 0,
                endValue: -70,
                property: "translateY"
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          top: "20vh",
          width: "100%",
          zIndex: "100"
        }}
      >
        <Image
          src="/assets/images/nmsPrisma.png"
          alt="helperIcon"
          width={216}
          height={300}
          onClick={() => { scrollHome() }}

          style={{ cursor: "pointer" }}
        />
      </Plx>

      <AnomalyPage />
      <HomeBanner />

    </div >
  );
}
