"use client";
import Plx from "react-plx";
import "../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";
import HomeBanner from "./components/homeBanner";
import AnomalyPage from "./components/anomalyPage";
import SideIcon from "./components/sideIcon";

export default function Home() {

  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  useEffect(() => { scrollHome() })
  return (
    <div>

      <SideIcon />
      <AnomalyPage />
      <HomeBanner />

    </div >
  );
}
