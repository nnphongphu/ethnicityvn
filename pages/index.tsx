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
  ProcedureContainer,
  SelectorContainer,
  SelectorSubContainer,
  Line,
  Selector,
  ProcedureMenuWrapper,
  ProcedureSeperator,
  ProcedureIconWrapper,
  ProcedureIcon,
  ProcedureBody,
  ProcedureLabel,
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
    <Container url="/landingPageBg.png">
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
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const selector = useRef<any>(null);
  const sampleParagraph = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "Nullam ante lorem, auctor a auctor ac, posuere eu massa. Nullam euismod venenatis lacus et tempus. Donec gravida orci nisl, ut pulvinar tellus feugiat in. Aenean aliquam odio risus, condimentum semper orci tincidunt nec. Morbi dictum, mauris ut tincidunt tincidunt, risus dolor iaculis ante, eu tempus nunc sapien nec purus. Suspendisse imperdiet, felis volutpat lobortis scelerisque, justo quam rhoncus est, sed aliquet nisl arcu in dui. Maecenas ultrices nisl aliquet neque mattis, ac egestas mi suscipit. Proin mi libero, bibendum at turpis eleifend, suscipit tristique diam. Proin interdum risus lorem, ac semper ligula ultricies eu. Fusce libero nisi, mollis et quam sit amet, blandit condimentum lacus. Praesent eget dictum mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In feugiat libero at ultrices maximus.",
    "Mauris vehicula tortor sit amet dictum tincidunt. Nunc nec feugiat nunc. Nunc nisi neque, consectetur et rutrum et, consequat et ex. Donec at lorem mi. Pellentesque ac erat ligula. Nam porta ipsum non nulla varius, eget tincidunt ligula pretium. Pellentesque pretium quis lacus vitae finibus. Nunc eget ipsum eget lorem porta porttitor. Quisque elementum eros vel dui finibus, vel dapibus nisl laoreet. Vivamus diam nulla, gravida in egestas sit amet, sagittis sit amet ipsum. Quisque bibendum ligula non est vestibulum consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "Ut sit amet vulputate turpis. Sed ornare ac tellus non sagittis. Sed ac nibh id magna tristique rutrum vel vel nisl. Sed scelerisque viverra magna. Suspendisse non nisi lacus. Aliquam consequat lacus sed metus aliquet, vitae tincidunt mauris egestas. Cras mattis velit vitae tellus euismod, et aliquet sapien dignissim. Proin vel fringilla turpis.",
  ];
  const procedureMenu = [
    {
      label: "Research",
      body: sampleParagraph[0],
    },
    {
      label: "Fieldtrip",
      body: sampleParagraph[1],
    },
    {
      label: "Photo Collection",
      body: sampleParagraph[2],
    },
    {
      label: "Vectorize",
      body: sampleParagraph[3],
    },
    {
      label: "Publish",
      body: sampleParagraph[4],
    },
  ];

  const handleClick = (index: any) => {
    setCurrentIndex(index);
  };

  const handleHover = (index: any) => {
    selector.current.style.transform = `translateX(calc(25% * ${index}))`;
  };

  return (
    <ProcedureContainer url="/procedureBg.png">
      <Decoration position="top" src="/procedureDecoration.png" />
      <H1 color="white">Our Procedure</H1>
      <SelectorContainer>
        <Line />
        <SelectorSubContainer ref={selector}>
          <Selector src="/procedureSelector.svg" />
        </SelectorSubContainer>
      </SelectorContainer>
      <ProcedureMenuWrapper>
        {procedureMenu.map((item, index) => {
          return (
            <React.Fragment key={item.label}>
              {index != 0 && (
                <ProcedureSeperator src="/procedureSeperator.svg" />
              )}
              <ProcedureIconWrapper
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(currentIndex)}
                onClick={() => handleClick(index)}
              >
                <ProcedureIcon
                  src="/procedureIcon.svg"
                  id={index}
                  current={currentIndex}
                />
                <ProcedureLabel>{item.label}</ProcedureLabel>
              </ProcedureIconWrapper>
            </React.Fragment>
          );
        })}
      </ProcedureMenuWrapper>
      <ProcedureBody>{procedureMenu[currentIndex].body}</ProcedureBody>
    </ProcedureContainer>
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
