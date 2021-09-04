import Head from "next/head";
import Navbar from "components/Navbar";
import {
  Container,
  SlickSlider,
  TextSlider,
  TitleContainer,
  Logo,
  H1,
  Button,
} from "styles/index.style";
import React, { useRef, useEffect } from "react";

export const Home: React.FC = () => {
  const slider = useRef<any>(null);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) slider.current.slickNext();
    else slider.current.slickPrev();
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

      <Navbar />
      <SlickSlider ref={slider} vertical arrows={false} infinite={false}>
        <LandingSection />
        <WorkSection />
        <ProcedureSection />
        <TeamSection />
      </SlickSlider>
    </>
  );
};

export const LandingSection: React.FC = () => {
  return (
    <Container>
      <Logo src="/logo.svg" />
      <TextSlider vertical arrows={false} autoplay={true}>
        <H1>Cultural inheritance</H1>
        <H1>Creative interference</H1>
      </TextSlider>
      <Button>Pattern Library</Button>
    </Container>
  );
};

export const WorkSection: React.FC = () => {
  return (
    <TitleContainer>
      <H1 black>Our Work</H1>
    </TitleContainer>
  );
};

export const ProcedureSection: React.FC = () => {
  return (
    <TitleContainer>
      <H1 black={true}>Our Procedure</H1>
    </TitleContainer>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <TitleContainer>
      <H1 black={true}>Our Team</H1>
    </TitleContainer>
  );
};

export default Home;
