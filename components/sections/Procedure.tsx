import React, { useState, useRef } from "react";
import {
  Container,
  Decoration,
  Selector,
  SelectorLine,
  SelectorWrapper,
  SelectorSubWrapper,
  Description,
  ItemIcon,
  ItemLabel,
  NavItemWrapper,
  NavSeperator,
  NavWrapper,
} from "./Procedure.style";
import { H1 } from "styles/system";

export const ProcedureSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const selector = useRef<any>(null);

  const handleClick = (index: any) => {
    setCurrentIndex(index);
  };

  const handleHover = (index: any) => {
    selector.current.style.transform = `translateX(calc(25% * ${index}))`;
  };

  return (
    <Container url="/procedureBg.png">
      <Decoration position="top" src="/procedureDecoration.png" />
      <H1 color="white">Our Procedure</H1>
      <SelectorWrapper>
        <SelectorLine />
        <SelectorSubWrapper ref={selector}>
          <Selector src="/procedureSelector.svg" />
        </SelectorSubWrapper>
      </SelectorWrapper>
      <NavWrapper onMouseLeave={() => handleHover(currentIndex)}>
        {procedureMenu.map((item, index) => {
          return (
            <React.Fragment key={item.label}>
              {index != 0 && <NavSeperator src="/procedureSeperator.svg" />}
              <NavItemWrapper
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleClick(index)}
              >
                <ItemIcon
                  src="/procedureIcon.svg"
                  id={index}
                  width={187}
                  height={132}
                  current={currentIndex}
                />
                <ItemLabel>{item.label}</ItemLabel>
              </NavItemWrapper>
            </React.Fragment>
          );
        })}
      </NavWrapper>
      <Description>{procedureMenu[currentIndex].body}</Description>
    </Container>
  );
};

const sampleParagraph = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse.",
  "Nullam ante lorem, auctor a auctor ac, posuere eu massa. Nullam euismod venenatis lacus et tempus. Donec gravida orci nisl, ut pulvinar tellus feugiat in. Aenean aliquam odio risus, condimentum semper orci tincidunt nec. Morbi dictum, mauris ut tincidunt tincidunt, risus dolor iaculis ante, eu tempus nunc sapien nec purus. Suspendisse imperdiet, felis volutpat lobortis scelerisque, justo quam rhoncus est, sed aliquet nisl arcu in dui. Maecenas ultrices nisl aliquet neque.",
  "Mauris vehicula tortor sit amet dictum tincidunt. Nunc nec feugiat nunc. Nunc nisi neque, consectetur et rutrum et, consequat et ex. Donec at lorem mi. Pellentesque ac erat ligula. Nam porta ipsum non nulla varius, eget tincidunt ligula pretium. Pellentesque pretium quis lacus vitae finibus. Nunc eget ipsum eget lorem porta porttitor. Quisque elementum eros vel dui finibus, vel dapibus nisl laoreet. Vivamus diam nulla, gravida in egestas sit amet, sagittis sit amet ipsum.",
  "Ut sit amet vulputate turpis. Sed ornare ac tellus non sagittis. Sed ac nibh id magna tristique rutrum vel vel nisl. Sed scelerisque viverra magna. Suspendisse non nisi lacus. Aliquam consequat lacus sed metus aliquet, vitae tincidunt mauris egestas. Cras mattis velit vitae tellus euismod, et aliquet sapien dignissim. Proin vel fringilla turpis.",
];

const procedureMenu = [
  {
    label: "Research",
    body: sampleParagraph[0],
  },
  {
    label: "Fieldtrip",
    body: sampleParagraph[1],
  },
  {
    label: "Photo Collection",
    body: sampleParagraph[2],
  },
  {
    label: "Vectorize",
    body: sampleParagraph[3],
  },
  {
    label: "Publish",
    body: sampleParagraph[4],
  },
];

export default ProcedureSection;
