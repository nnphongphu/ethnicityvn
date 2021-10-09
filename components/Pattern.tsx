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
    <PatternWrapper>
      <Link href="/pattern/1" passHref>
        <a>
          <PatternImg src={url} />
          <H4 style={{ margin: "8px 0px", height: 30 }}>{title}</H4>
        </a>
      </Link>
      <Preview>{preview}</Preview>
    </PatternWrapper>
  );
};

export default Pattern;

const Preview = styled(B2)`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 250px;
`;

const PatternWrapper = styled.div`
  margin-bottom: 36px;
`;

const PatternImg = styled.img`
  width: 250px;
  height: 250px;
`;
