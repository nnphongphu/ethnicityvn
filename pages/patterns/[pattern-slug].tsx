import Head from "next/head";
import Navbar from "components/Navbar";
import styled from "styled-components";
import { H4 } from "styles/system";
import Link from "next/link";
import { PatternDetails } from "components/PatternDetails";
import Sidebar from "components/Sidebar";

export const PatternPage = () => {
  return (
    <>
      <Head>
        <title>KHO 1</title>
        <meta name="description" content="The site is under construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
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
      <div style={{ paddingTop: "20px" }}>
        <PatternDetails />
      </div>
    </>
  );
};

export default PatternPage;

const Category = styled.div`
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

const Item = styled(H4)<{ active?: boolean }>`
  margin: 10px 50px;
  border-radius: 50px;
  padding: 10px 23px;
  padding-top: 5px;
  cursor: pointer;
  ${({ active }) =>
    active ? " border: 1px solid; border-color: var(--color-red);" : ""}
`;

const SpecialItem = styled(H4)`
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
