import styled from "styled-components";

export const H1 = styled.h1<{ color?: string }>`
  font-family: "SFU Futura_07", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 3.8px;
  font-size: 76px;
  font-weight: bold;
  line-height: 120px;
  color: var(--color-${({ color }) => (color ? color : "text")});
`;

export const H2 = styled.h2<{ color?: string }>`
  font-family: "SFU Futura_07", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 2.4px;
  font-size: 48px;
  font-weight: bold;
  color: var(--color-${({ color }) => (color ? color : "text")});
`;

export const H3 = styled.h3<{ color?: string }>`
  font-family: "SFU Futura_07", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 1.8px;
  font-size: 36px;
  font-weight: bold;
  color: var(--color-${({ color }) => (color ? color : "text")});
`;

export const H4 = styled.h4<{ color?: string }>`
  font-family: "SFU Futura_07", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  letter-spacing: 1.8px;
  font-size: 24px;
  color: var(--color-${({ color }) => (color ? color : "text")});
  transition: all 0.8s ease;
`;

export const B1 = styled.p<{ color?: string }>`
  font-family: "SFU Futura_03", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
  letter-spacing: 1.05px;
  font-size: 21px;
  line-height: 35px;
  color: var(--color-${({ color }) => (color ? color : "text")});
`;

export const B2 = styled.span<{ color?: string }>`
  font-family: "SFU Futura_03", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: normal;
  letter-spacing: 0.7px;
  font-size: 14px;
  color: var(--color-${({ color }) => (color ? color : "text")});
`;

export const Logo = styled.a<{ url: string }>`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-origin: content-box;
  top: 32px;
  padding-left: 120px;
  width: 1920px;
  height: 69px;
  position: absolute;
  transition: all 0.8s ease-in-out;
  left: 50%;
  transform: translate(-50%);
`;
