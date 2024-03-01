"use client";
import Plx from "react-plx";
import "../../../public/assets/styles/mainPage.css";
import Image from "next/image";

export default function SideIcon() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>

      <Plx
        className="sideIcon"
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

    </div >
  );
}
