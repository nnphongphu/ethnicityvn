import { Category, Item, SpecialItem } from "styles/patterns.style";
import Head from "next/head";
import Navbar from "components/Navbar";
import {
  Container,
  PatternImg,
  DescriptionContainer,
  ButtonWrapper,
  Button1,
  Button2,
} from "styles/pattern.style";
import { H2, H4, B1 } from "styles/system";
import Link from "next/link";

export const PatternPage = () => {
  return (
    <>
      <Head>
        <title>KHO 1</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="black" />
      <Category>
        <Item active={true}>Preserve</Item>
        <Item>Develop</Item>
        <Item>Apply</Item>
        <Item>Illustration</Item>
        <Link href="/collections" passHref>
          <a>
            <SpecialItem>See Collection</SpecialItem>
          </a>
        </Link>
      </Category>
      <Container>
        <PatternImg src="/samplePattern.png" />
        <DescriptionContainer>
          <H2>KHO 01</H2>
          <B1 style={{ margin: "20px 0px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.{" "}
          </B1>
          <ButtonWrapper>
            <Button1>Download</Button1>
            <Button2>Download Pattern Family</Button2>
          </ButtonWrapper>
          <H4 color="blue">+ Add to your favourite</H4>
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default PatternPage;
