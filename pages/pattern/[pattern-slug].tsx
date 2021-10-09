import Head from "next/head";
import Navbar from "components/Navbar";
import styled from "styled-components";
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

export const Container = styled.div`
  padding: 0px 120px;
  padding-top: 40px;
  height: calc(100vh - 140px * 2 + 50px);
  display: flex;
  position: relative;
  justify-content: center;
  column-gap: 50px;
  max-width: 1980px;
  margin: auto;
  max-height: 750px;
  min-height: 750px;
`;

export const PatternImg = styled.img`
  width: min(525px, 35vw);
  height: min(525px, 35vw);
`;

export const DescriptionContainer = styled.div`
  width: min(525px, 45%);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin: 25px 0px;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;

export const Button1 = styled(H4)`
  padding: 8px 20px;
  color: white;
  background-color: var(--color-red);
  border-radius: 50px;
  cursor: pointer;
`;

export const Button2 = styled(H4)`
  padding: 8px 20px;
  color: var(--color-blue);
  background-color: var(--color-neutral);
  border-radius: 50px;
  cursor: pointer;
`;

export const Category = styled.div`
  background-color: var(--color-neutral);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1980px;
  margin: auto;
  margin-top: 120px;

  @media screen and (max-width: 1600px) {
    margin-top: 100px;
  }
`;

export const Item = styled(H4)<{ active?: boolean }>`
  margin: 10px 50px;
  border-radius: 50px;
  padding: 10px 23px;
  padding-top: 5px;
  cursor: pointer;
  ${({ active }) =>
    active ? " border: 1px solid; border-color: var(--color-red);" : ""}
`;

export const SpecialItem = styled(H4)`
  position: absolute;
  right: 0;
  color: white;
  background-color: var(--color-red);
  height: 100%;
  padding: 0 23px;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  cursor: pointer;
`;
