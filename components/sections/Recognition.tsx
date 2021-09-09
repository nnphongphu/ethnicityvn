import { H1, H3 } from "styles/system";
import {
  Container,
  Decoration,
  ContentWrapper,
  HighlightWrapper,
  TriangleLeft,
  TriangleRight,
  CornerDecorationLeft,
  CornerDecorationRight,
  HighlightTitle,
  HighlightContent,
  PresentationWrapper,
  LogoWrapper,
  Logo,
  Footer,
} from "./Recognition.style";

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
