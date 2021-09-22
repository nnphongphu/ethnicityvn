import { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "components/Navbar";
import { SlickSlider } from "styles/collections.style";
import Collection from "components/Collection";

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

      <Navbar color="black" />
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
