import styled from "styled-components";
import { H1, H4, B1 } from "styles/system";
import Pattern from "components/Pattern";
import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import PatternModal from "./PatternModal";

interface PatternInterface {
  title: string;
  preview: string;
  url: string;
  description?: string;
}

const SamplePattern: PatternInterface = {
  title: "KHO 01",
  url: "/samplePattern.png",
  preview:
    "A short description about this pattern. A short description about this pattern.",
};

export const Collection: React.FC<{ title: string }> = ({ title }) => {
  const settings = {
    arrows: false,
    draggable: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    initialSlide: 2,
  };

  const sliderRef = useRef<any>(null);

  const handleClick = (delta: Number) => {
    if (delta > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <Container>
        <CoverContainer url="/collectionCover.png">
          <Title>{title}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. modo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate
          </Description>
        </CoverContainer>
        <SubContainer>
          <Link href="/patterns" passHref>
            <a>
              <Button>See patterns</Button>
            </a>
          </Link>
          <SliderContainer>
            <RiArrowLeftSLine
              onClick={() => handleClick(-1)}
              type="prev"
              size="300px"
              cursor="pointer"
              style={{ transform: "translateY(-70px)" }}
            />
            <PatternsWrapper ref={sliderRef} {...settings}>
              <div>
                <Pattern {...SamplePattern} />
              </div>
              <div>
                <Pattern {...SamplePattern} />
              </div>
              <div>
                <Pattern {...SamplePattern} />
              </div>
              <div>
                <Pattern {...SamplePattern} />
              </div>
              <div>
                <Pattern {...SamplePattern} />
              </div>
            </PatternsWrapper>
            <RiArrowRightSLine
              onClick={() => handleClick(1)}
              type="next"
              size="300px"
              cursor="pointer"
              style={{ transform: "translateY(-70px)" }}
            />
          </SliderContainer>
          <DownloadButton>Download Collection</DownloadButton>
        </SubContainer>
      </Container>
      <PatternModal />
    </>
  );
};

export default Collection;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
`;

const CoverContainer = styled.div<{ url: string }>`
  height: 100vh;
  width: min(600px, 35%);
  max-height: 1080px;
  display: flex;
  align-items: flex-end;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
`;

const Title = styled(H1)`
  color: white;
  height: max-content;
  position: absolute;
  transform: scale(-1, -1) translateY(50%);
  writing-mode: vertical-rl;
  right: -25px;
  top: 50%;
`;

const Description = styled(B1)`
  color: white;
  margin-left: 50px;
  font-size: 18px;
  line-height: 20px;
  margin-right: 100px;
  margin-bottom: 60px;
  text-align: center;

  @media screen and (max-width: 1600px) {
    font-size: 12px;
    line-height: 120%;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(/collectionBg.png);
  background-size: 100% 954px;
  max-height: 1080px;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (max-width: 1600px) {
    padding-top: 100px;
  }
`;

const Button = styled(H4)`
  position: absolute;
  right: 0;
  top: 120px;
  cursor: pointer;
  color: white;
  width: 250px;
  height: min(77px, 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
`;

const SliderContainer = styled.div`
  padding: 0 200px;
  display: flex;
  margin-top: min(100px, 15vh);
  align-items: center;

  @media screen and (max-width: 1600px) {
    padding: 0 80px;
  }
`;

const PatternsWrapper = styled(Slider)`
  display: grid;
  overflow: hidden;
  max-height: min(400px, 50vh);

  ::-webkit-scrollbar {
    width: 0;
  }

  & div {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const DownloadButton = styled(H4)`
  margin: 20px 0px;
  color: white;
  background-color: var(--color-blue);
  padding: 8px 25px;
  border-radius: 25px;
  width: fit-content;
`;
