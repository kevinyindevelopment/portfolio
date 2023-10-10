import { DiMysql, DiReact, DiIllustrator, DiPython } from 'react-icons/di';
import { Section, SectionText, SectionTitle } from '../../themes/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIconContainer } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionTitle main fontSize="45px">Technologies</SectionTitle>
    <SectionText>
      Here's a list of things that I've worked with.
    </SectionText>
    <List>
      <ListItem>
        <ListIconContainer>
          <DiReact size="3rem" />
        </ListIconContainer>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            <li> React </li>
            <li> TypeScript </li>
            <li> Bootstrap </li>
            <li> styled-components </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconContainer>
          <DiMysql size="3rem" />
        </ListIconContainer>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            <li> Node </li>
            <li> MySQL </li>
            <li> Laravel </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconContainer>
          <DiIllustrator size="3rem" />
        </ListIconContainer>
        <ListContainer>
          <ListTitle>UI / UX</ListTitle>
          <ListParagraph>
            <li> Worked with illustrators and designers </li>
            <li> Figma </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListIconContainer>
          <DiPython size="3rem" />
        </ListIconContainer>
        <ListContainer>
          <ListTitle> College </ListTitle>
          <ListParagraph>
            <li> Python </li>
            <li> C++ </li>
            <li> Linux Kernel </li>
            <li> Haskell </li>
            <li> Pascal </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>   
    </List>
  </Section>
);

export default Technologies;
