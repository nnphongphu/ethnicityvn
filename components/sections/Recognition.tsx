import styled from "styled-components";
import { H3, B1, H1 } from "styles/system";

export const RecognitionSection: React.FC = () => {
  return (
    <Container>
      <Decoration src="/recognitionDecoration.svg" />
      <H1>Our Recognition</H1>
      <ContentWrapper>
        <HighlightWrapper>
          <TriangleLeft />
          <TriangleRight />
          <CornerDecorationLeft src="/cornerDecoration.svg" />
          <CornerDecorationRight src="/cornerDecoration.svg" />
          <HighlightTitle>
            1 TRONG 10 DỰ ÁN THUYẾT TRÌNH VỚI BARACK OBAMA
          </HighlightTitle>
          <HighlightContent>
            Dự án vinh dự được chọn là 1 trong 10 dự án trong khối ASEAN trình
            bày với Nguyên Tổng Thống Mỹ Barack Obama năm 2018. Thuyết trình tại
            UNESCO World Heritage Committee 2019 tại Azerbaijan 2019. Giới thiệu
            tại SSEAYP lần thứ 45, International Youth Forum 2019 tại Trung Quốc
            và Better Together Challenge 2019 tại Hàn Quốc.
          </HighlightContent>
        </HighlightWrapper>
        <PresentationWrapper>
          <H3>Presented at</H3>
          <LogoWrapper>
            <Logo src="/presentedAt.png" />
          </LogoWrapper>
          <H3>Feature on</H3>
          <LogoWrapper>
            <Logo src="/featuredOn.png" />
          </LogoWrapper>
          <H3>Partner with</H3>
          <LogoWrapper>
            <Logo src="/partnerWith.png" />
          </LogoWrapper>
        </PresentationWrapper>
      </ContentWrapper>
      <Footer>
        <H3 color="white">Contact us</H3>
      </Footer>
    </Container>
  );
};

export default RecognitionSection;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
  padding-top: 50px;
`;

export const Decoration = styled.img`
  position: absolute;
  top: 0;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 120px;
  margin-top: 6vh;
  margin-bottom: 110px;
  display: flex;

  @media screen and (max-width: 1600px) {
    margin-top: 3vh;
  }
`;

export const HighlightWrapper = styled.div`
  width: 700px;
  height: fit-content;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-red);
  padding: 50px;
  position: relative;

  @media screen and (max-width: 1600px) {
    width: 800px;
  }
`;

export const TriangleLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 125px solid white;
  border-right: 125px solid transparent;
  position: absolute;
  top: -5px;
  left: -5px;
`;

export const TriangleRight = styled.div`
  width: 0;
  height: 0;
  border-bottom: 125px solid white;
  border-left: 125px solid transparent;
  position: absolute;
  bottom: -5px;
  right: -5px;
`;

export const CornerDecorationLeft = styled.img`
  position: absolute;
  top: -50px;
  left: -50px;
`;

export const CornerDecorationRight = styled.img`
  position: absolute;
  bottom: -50px;
  right: -50px;
  transform: rotate(180deg);
`;

export const HighlightTitle = styled(H3)``;

export const HighlightContent = styled(B1)`
  margin-top: 20px;

  @media screen and (max-width: 1600px) {
    margin-top: 10px;
  }
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 158px;

  @media screen and (max-width: 1600px) {
    margin-left: 100px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  height: 10vh;
  width: auto;

  @media screen and (min-width: 1800px) {
    height: 110px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 25px 0;
  background-color: var(--color-red);

  @media screen and (max-width: 1600px) {
    padding: 10px 0;
  }
`;
