import { useRef } from "react";
import { H1 } from "styles/system";
import {
  Container,
  Decoration,
  SliderWrapper,
  WorkSlider,
  SliderButton,
  NavWrapper,
  NavSubWrapper,
  Button,
  ButtonDecoration,
  ButtonLabel,
  ButtonWrapper,
  SlideWrapper,
  SlideThumbnail,
  SlideTitle,
} from "./Work.style";

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
    <Container>
      <Decoration
        width={1920}
        height={27}
        position="top"
        src="/workDecoration.png"
      />
      <Decoration
        width={1920}
        height={27}
        position="bottom"
        src="/workDecoration.png"
      />
      <H1>Our Work</H1>
      <SliderWrapper>
        <WorkSlider ref={sliderRef} arrows={false}>
          {events.map(({ title, thumbnail }) => (
            <WorkSlide key={title} title={title} thumbnail={thumbnail} />
          ))}
        </WorkSlider>
        <SliderButton
          onClick={() => handleClick(1)}
          type="next"
          src="/nextButton.svg"
        />
        <SliderButton
          onClick={() => handleClick(-1)}
          type="prev"
          src="/prevButton.svg"
        />
      </SliderWrapper>
      <NavWrapper>
        <NavSubWrapper>
          <ButtonWrapper color="green">
            <Button width={498} height={229} src="workButton.svg" />
            <ButtonLabel color="green">Projects</ButtonLabel>
          </ButtonWrapper>
          <ButtonWrapper color="red">
            <Button width={498} height={229} src="workButton.svg" />
            <ButtonLabel color="red">Services</ButtonLabel>
          </ButtonWrapper>
          <ButtonWrapper color="yellow">
            <Button width={498} height={229} src="workButton.svg" />
            <ButtonLabel color="yellow">On Media</ButtonLabel>
          </ButtonWrapper>
        </NavSubWrapper>
        <ButtonDecoration src="/workButtonDecoration.svg" />
      </NavWrapper>
    </Container>
  );
};

interface Event {
  title: string;
  thumbnail: string;
}

export const WorkSlide: React.FC<Event> = ({ title, thumbnail }) => {
  return (
    <SlideWrapper>
      <SlideThumbnail src={thumbnail} />
      <SlideTitle>{title}</SlideTitle>
    </SlideWrapper>
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

export default WorkSection;
