import Head from "next/head";
import Link from "next/link";
import Navbar from "components/Navbar";
import styled from "styled-components";
import { H1, H3, B1 } from "styles/system";
import Image from "next/image";

const boxItems = [
  {
    label: "Preserve",
    description:
      "Original brocade patterns vectorized from photos. The patterns are made with high accuration to every stitch",
  },
  {
    label: "Develop",
    description:
      "Patterns customized with simple shapes and youthful colors to fit well with modern design",
  },
  {
    label: "Apply",
    description:
      "Patterns used in different products such as Powerpoint Templates, CV templates, etc.",
  },
  {
    label: "Illustrate",
    description:
      "Illustrations of ethnic groups to describe how brocade patterns are used in their daily activities",
  },
];

export const Library: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Ethnicity Library</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar color="white" />
      <SubContainer>
        <div style={{ display: "flex", flexDirection: "column", width: "60%" }}>
          <H1 color="white">
            What&apos;s in <br /> Ethnicity Library?
          </H1>
          <Grid>
            {boxItems.map(({ label, description }) => (
              <Box key={label} label={label} description={description} />
            ))}
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "50px",
            gap: "60px",
          }}
        >
          <Link href="/patterns" passHref>
            <a>
              <SpecialBox>
                <Image
                  src="/patternsButton.png"
                  alt="patterns icon"
                  width="200px"
                  height="200px"
                />
                <H3 color="white">See Patterns</H3>
              </SpecialBox>
            </a>
          </Link>
          <Link href="/collections" passHref>
            <a>
              <SpecialBox>
                <Image
                  src="/collectionsButton.png"
                  alt="collections icon"
                  width="200px"
                  height="200px"
                />
                <H3 color="white">See Collections</H3>
              </SpecialBox>
            </a>
          </Link>
        </div>
      </SubContainer>
    </Container>
  );
};

const Box: React.FC<{ label: string; description: string }> = ({
  label,
  description,
}) => {
  return (
    <Border>
      <H3 color="white">{label}</H3>
      <B1 color="white">{description}</B1>
    </Border>
  );
};

const Container = styled.div`
  position: absolute;
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  max-width: 1920px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background-image: url(/libraryBg.png);
  background-size: cover;
  z-index: -1;
  padding: 0 120px;
  padding-bottom: 80px;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const SubContainer = styled.div`
  padding-top: 140px;
  height: 100%;
  display: flex;
  position: relative;
  max-width: 1920px;
  margin: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
  justify-content: space-between;
  column-gap: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: 100%;
  margin-top: 60px;
`;

const Border = styled.div`
  border-radius: 35px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  gap: 5px;
`;

const SpecialBox = styled.div`
  border-radius: 35px;
  display: flex;
  align-items: center;
  column-gap: 50px;
  padding: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;

  @media screen and (max-width: 1600px) {
    padding: 30px;
    column-gap: 30px;
  }

  &:hover {
    -webkit-box-shadow: inset 0px 0px 0px 2px white;
    -moz-box-shadow: inset 0px 0px 0px 2px white;
    box-shadow: inset 0px 0px 0px 2px white;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default Library;
