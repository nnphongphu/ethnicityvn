import { B2, H4 } from "styles/system";
import Link from "next/link";
import { PatternImg, PatternWrapper } from "./Pattern.style";

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
          <H4 style={{ margin: "8px 0px" }}>{title}</H4>
        </a>
      </Link>
      <B2>{preview}</B2>
    </PatternWrapper>
  );
};
export default Pattern;
