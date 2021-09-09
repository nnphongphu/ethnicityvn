import Head from "next/head";
import Link from "next/link";
import Navbar from "components/Navbar";
import { SlickSlider } from "styles/index.style";
import { Logo } from "styles/system";
import LandingSection from "components/sections/Landing";
import WorkSection from "components/sections/Work";
import ProcedureSection from "components/sections/Procedure";
import RecognitionSection from "components/sections/Recognition";
import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";

const navTheme = ["white", "black", "white", "black", "black"];

Modal.setAppElement("#__next");

export const Home = () => {
  const [section, setSection] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const handleBeforeChange = (oldIndex: any, newIndex: any) => {
    setSection(newIndex);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Head>
        <title>Ethnicity Vietnam</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar color={navTheme[section]} />
      <Link href="/" passHref>
        <Logo
          url={navTheme[section] == "white" ? "/logo-white.png" : "/logo.png"}
        />
      </Link>
      <SlickSlider
        ref={sliderRef}
        draggable={false}
        speed={800}
        vertical
        arrows={false}
        infinite={false}
        beforeChange={handleBeforeChange}
      >
        <LandingSection />
        <WorkSection />
        <ProcedureSection />
        <RecognitionSection />
      </SlickSlider>
    </>
  );
};

export default Home;
