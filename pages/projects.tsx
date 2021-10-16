import styled from "styled-components";
import Head from "next/head";
import { RiArrowLeftSLine } from "react-icons/ri";
import { H1, H2, H3, B1 } from "styles/system";
import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export const Projects = () => {
  const sliderRef = useRef<any>(null);
  const timelineRef = useRef<any>(null);
  const [center, setCenter] = useState(0);

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      sliderRef.current.slickNext();
      timelineRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
      timelineRef.current.slickPrev();
    }
  };

  const handleBeforeChange = (oldIndex: any, newIndex: any) => {
    setCenter(newIndex);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const settings = {
    vertical: true,
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    initialSlide: 0,
    draggable: false,
  };

  const timelineSettings = {
    vertical: true,
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    initialSlide: 0,
    draggable: false,
  };

  return (
    <Container>
      <Head>
        <title>Projects</title>
      </Head>
      <div
        style={{
          display: "flex",
          rowGap: "100px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link scroll={false} href="/" passHref>
          <a>
            <div style={{ display: "flex", columnGap: "30px" }}>
              <RiArrowLeftSLine
                color="var(--color-green)"
                size="70"
                style={{ marginTop: "30px" }}
              />
              <H1 color="green">Projects</H1>
            </div>
          </a>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "30px",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img src="/timelineDecoration.svg" />
            <TimelineSlider ref={timelineRef} {...timelineSettings}>
              {Samples.map((sample, id) => (
                <TimelineText key={sample.time} centerId={center} slideId={id}>
                  {sample.time}
                </TimelineText>
              ))}
              <TimelineText />
              <TimelineText />
            </TimelineSlider>
            <img
              style={{ transform: "scaleX(-1)" }}
              src="/timelineDecoration.svg"
            />
          </div>
        </div>
      </div>
      <SlickSlider
        ref={sliderRef}
        {...settings}
        beforeChange={handleBeforeChange}
      >
        <SlideWrapper />
        {Samples.map((sample, id) => (
          <ProjectSlide
            key={id.toString()}
            slideId={id}
            centerId={center}
            title={sample.title}
            thumbnail={sample.thumbnail}
            description={sample.description}
          />
        ))}
        <SlideWrapper />
      </SlickSlider>
    </Container>
  );
};

const ProjectSlide: React.FC<Project> = ({
  title,
  thumbnail,
  description,
  centerId,
  slideId,
}) => {
  return (
    <SlideWrapper>
      <SlideThumbnail src={thumbnail} centerId={centerId} slideId={slideId} />
      <SlideContent centerId={centerId} slideId={slideId}>
        <SlideTitle>{title}</SlideTitle>
        <SlideDescription>{description}</SlideDescription>
      </SlideContent>
    </SlideWrapper>
  );
};

export default Projects;

const Container = styled.div`
  padding: 0px 120px;
  height: min(100vh, 1080px);
  display: flex;
  position: relative;
  column-gap: 100px;
  max-width: 1980px;
  margin: auto;
`;

const SlickSlider = styled(Slider)`
  width: min(1248px, 70%);
  height: 100vh;
  max-height: 1080px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

interface Project {
  title: string;
  thumbnail: string;
  description: string;
  centerId: number;
  slideId: number;
}

const Samples = [
  {
    time: "Jun 2021",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/fXHSbn1/Group-1627.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
  {
    time: "Jan 2021",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/ZLngRtY/Group-162.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
  {
    time: "Aug 2020",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/vsnMbN5/Group-164.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
  {
    time: "Jul 2020",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/fXHSbn1/Group-1627.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
  {
    time: "May 2020",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/ZLngRtY/Group-162.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
  {
    time: "Feb 2020",
    title: "Project with ISEE",
    thumbnail: "https://i.ibb.co/vsnMbN5/Group-164.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat ",
  },
];

const SlideWrapper = styled.div`
  width: min(1248px, 60vw);
  height: min(365px, 45vh);
  overflow: hidden;
  position: relative;
  border-radius: 35px;
  padding: 15px 0;
`;

const SlideThumbnail = styled.div<{
  src: string;
  slideId: number;
  centerId: number;
}>`
  height: 100%;
  width: 100%;
  border-radius: 35px;
  background-image: linear-gradient(transparent 0%, #242424 100%),
    url(${({ src }) => src});
  background-size: cover;
  transition: all 0.5s ease-in-out;
  ${({ slideId, centerId }) =>
    slideId !== centerId
      ? "filter: contrast(20%) brightness(1.5);  -webkit-filter: contrast(20%) brightness(1.5);"
      : ""}
`;

const SlideContent = styled.div<{ slideId: number; centerId: number }>`
  width: 60%;
  position: absolute;
  left: 60px;
  bottom: 60px;
  transition: all 0.5s ease-in-out;
  ${({ slideId, centerId }) =>
    slideId !== centerId ? "opacity: 0;" : "opacity: 100;"}
`;

const SlideTitle = styled(H2)`
  color: white;
`;

const SlideDescription = styled(B1)`
  color: white;
`;

const TimelineText = styled(H3)<{ slideId?: number; centerId?: number }>`
  transition: all 0.5s ease-in-out;
  text-align: center;
  line-height: 124px;

  ${({ slideId, centerId }) =>
    slideId === centerId ? "color: var(--color-green);" : "height: auto;"}
`;

const TimelineSlider = styled(Slider)`
  width: 180px;
`;
