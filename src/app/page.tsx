"use client";
import Plx from "react-plx";
import "../../public/assets/styles/main.css";
import "../../public/assets/images/background.jpg";
import Image from "next/image";

export default function App() {
  return (
    <div>
      {
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 700,
              easing: "easeIn",
              properties: [
                {
                  startValue: 1,
                  endValue: 1.6,
                  property: "scale",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 100,
          }}
        >
          <Image
            style={{ width: "100%" }}
            src="/assets/images/bg.png"
            alt="background"
            width={200}
            height={850}
          />{" "}
        </Plx>
      }
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "relative",
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
            end: 400,
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
          top: "15vw",
          width: "100%",
        }}
      >
        <Image
          style={{ width: "35%" }}
          src="/assets/images/atlas.webp"
          alt="background"
          width={38}
          height={260}
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>TESTE</p>
    </div>
  );
}
