"use client";
import Plx from "react-plx";
import "../../public/assets/styles/mainPage.css";
import Image from "next/image";
import { useEffect } from "react";
import HomeBanner from "./components/homeBanner";
import AnomalyPage from "./components/anomalyPage";
import SideIcon from "./components/sideIcon";

export default function Home() {

  return (
    <div>

      <AnomalyPage />
      <HomeBanner />
      <SideIcon />

    </div >
  );
}
