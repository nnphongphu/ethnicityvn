import { B2, H4 } from "styles/system";
import Link from "next/link";
import styled from "styled-components";

interface PatternInterface {
  title: string;
  preview: string;
  url: string;
  description?: string;
}

export const Pattern: React.FC<PatternInterface> = ({
  title,
  url,
  preview,
}) => {
  return (
    <>
      <PatternWrapper>
        <Link href={`?patternId=1`} as={`/patterns/1`} passHref>
          <a>
            <PatternImg src={url} />
            <H4 style={{ margin: "8px 0px", height: 30 }}>{title}</H4>
          </a>
        </Link>
        <Preview>{preview}</Preview>
      </PatternWrapper>
    </>
  );
};

export default Pattern;

const Preview = styled(B2)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 100%;
`;

const PatternWrapper = styled.div`
  margin-bottom: 36px;
`;

const PatternImg = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;
