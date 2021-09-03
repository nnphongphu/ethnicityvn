import Head from "next/head";
import { Container, Title, Subtitle, Description } from "../styles/index.style";

export const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Ethnicity Vietnam</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Ethnicity Vietnam</Title>
        <Subtitle>The site is under construction</Subtitle>
        <Description>Coming soon</Description>
      </Container>
    </div>
  );
};

export default Home;
