import Head from "next/head";
import Link from "next/link";
import Navbar from "components/Navbar";
import { H3 } from "styles/system";
import { Container, SubContainer, Box } from "styles/library.style";

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
        <Link href="/patterns" passHref>
          <Box>
            <H3 color="white">See Patterns</H3>
          </Box>
        </Link>
        <Link href="/collections" passHref>
          <Box>
            <H3 color="white">See Collection</H3>
          </Box>
        </Link>
      </SubContainer>
    </Container>
  );
};

export default Library;
