import styled from "styled-components";
import { H1, H4, B1 } from "styles/system";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: auto;
`;

export const CoverContainer = styled.div<{ url: string }>`
  height: 100vh;
  width: min(600px, 35%);
  display: flex;
  align-items: flex-end;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ url }) => url});
`;

export const Title = styled(H1)`
  color: white;
  height: max-content;
  position: absolute;
  transform: scale(-1, -1) translateY(50%);
  writing-mode: vertical-rl;
  right: -25px;
  top: 50%;
`;

export const Description = styled(B1)`
  color: white;
  margin-left: 50px;
  font-size: 18px;
  line-height: 20px;
  margin-right: 100px;
  margin-bottom: 60px;
  text-align: center;
`;

export const SubContainer = styled.div`
  width: 100%;
  margin-top: 120px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1600px) {
    margin-top: 100px;
  }
`;

export const Button = styled(H4)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  color: white;
  width: 250px;
  height: min(77px, 10vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue);
`;

export const PatternsWrapper = styled.div`
  width: 100%;
  padding: 0 250px;
  margin-top: min(77px, 10vh);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 20px;
  height: min(800px, 70vh);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const DownloadButton = styled(H4)`
  margin: 20px 0px;
  color: white;
  background-color: var(--color-blue);
  padding: 8px 25px;
  border-radius: 25px;
  width: fit-content;
`;
