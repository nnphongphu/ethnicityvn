import Head from "next/head";
import Link from "next/link";
import Navbar from "components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Container,
  Pattern,
  SlickSlider,
  TextSlider,
  WorkContainer,
  Decoration,
  WorkButtonDecoration,
  WorkButton,
  WorkButtonWrapper,
  WorkSectionSubWrapper,
  WorkButtonLabel,
  WorkSectionWrapper,
  Button,
  WorkSliderWrapper,
  WorkSlider,
  WorkSliderButton,
  SlideContainer,
  SlideThumbnail,
  SlideTitle,
} from "styles/index.style";
import { H1, H4, Logo } from "styles/system";
import React, { useRef, useEffect, useState } from "react";

const navTheme = ["white", "black", "white", "black", "black"];

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
        <TeamSection />
        <RecognitionSection />
      </SlickSlider>
    </>
  );
};

export const LandingSection: React.FC = () => {
  return (
    <Container>
      <Pattern src="/pattern.png" />
      <TextSlider vertical arrows={false} autoplay={true} draggable={false}>
        <H1 color="white">Cultural inheritance</H1>
        <H1 color="white">Creative interference</H1>
      </TextSlider>
      <Button>
        <H4>Pattern Library</H4>
      </Button>
    </Container>
  );
};

interface Event {
  title: string;
  thumbnail: string;
}

export const WorkSlide: React.FC<Event> = ({ title, thumbnail }) => {
  return (
    <SlideContainer>
      <SlideThumbnail src={thumbnail} />
      <SlideTitle>{title}</SlideTitle>
    </SlideContainer>
  );
};

const events: Event[] = [
  {
    title: "Title 1",
    thumbnail: "/sample1.png",
  },
  {
    title: "Title 2",
    thumbnail: "/sample2.png",
  },
];

export const WorkSection: React.FC = () => {
  const sliderRef = useRef<any>(null);

  const handleClick = (delta: Number) => {
    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <WorkContainer>
      <Decoration position="top" src="/workDecoration.png" />
      <Decoration position="bottom" src="/workDecoration.png" />
      <H1>Our Work</H1>
      <WorkSliderWrapper>
        <WorkSlider ref={sliderRef} arrows={false}>
          {events.map(({ title, thumbnail }) => (
            <WorkSlide key={title} title={title} thumbnail={thumbnail} />
          ))}
        </WorkSlider>
        <WorkSliderButton
          onClick={() => handleClick(1)}
          type="next"
          src="/nextButton.svg"
        />
        <WorkSliderButton
          onClick={() => handleClick(-1)}
          type="prev"
          src="/prevButton.svg"
        />
      </WorkSliderWrapper>
      <WorkSectionWrapper>
        <WorkSectionSubWrapper>
          <WorkButtonWrapper color="green">
            <WorkButton src="workButton.svg" />
            <WorkButtonLabel color="green">Projects</WorkButtonLabel>
          </WorkButtonWrapper>
          <WorkButtonWrapper color="red">
            <WorkButton src="workButton.svg" />
            <WorkButtonLabel color="red">Services</WorkButtonLabel>
          </WorkButtonWrapper>
          <WorkButtonWrapper color="yellow">
            <WorkButton src="workButton.svg" />
            <WorkButtonLabel color="yellow">On Media</WorkButtonLabel>
          </WorkButtonWrapper>
        </WorkSectionSubWrapper>
        <WorkButtonDecoration src="/workButtonDecoration.svg" />
      </WorkSectionWrapper>
    </WorkContainer>
  );
};

export const ProcedureSection: React.FC = () => {
  return (
    <WorkContainer>
      <H1 color="black">Our Procedure</H1>
    </WorkContainer>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <WorkContainer>
      <H1 color="black">Our Team</H1>
    </WorkContainer>
  );
};

export const RecognitionSection: React.FC = () => {
  return (
    <WorkContainer>
      <H1 color="black">Our Recognition</H1>
    </WorkContainer>
  );
};

export default Home;
