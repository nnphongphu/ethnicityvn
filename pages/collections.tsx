import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import Collection from "components/Collection";
import styled from "styled-components";
import Slider from "react-slick";

export const Collections = () => {
  const sliderRef = useRef<any>(null);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Head>
        <title>Collections</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar color="black" hideLogo={true} />
      <SlickSlider
        ref={sliderRef}
        draggable={false}
        speed={800}
        vertical
        arrows={false}
        infinite={false}
      >
        <Collection title="Nature of K'ho" />
        <Collection title="In the wild" />
      </SlickSlider>
    </>
  );
};

export default Collections;

const SlickSlider = styled(Slider)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;
