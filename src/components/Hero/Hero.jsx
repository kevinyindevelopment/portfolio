import React from 'react';

import { Section, SectionText, SectionTitle } from '../../themes/GlobalComponents';
import Button from '../../themes/Button';
import { HeroSection, LeftSection } from './HeroStyles';

import { BiChevronsDown } from 'react-icons/bi';
function Hero(props) { return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center fontSize="60px">
            Hi, I'm Kevin!
        </SectionTitle>
        <SectionText>
            I'm a frontend developer who's always looking to incorporate new techniques and technologies into my work.
        </SectionText>
          <Button onClick={props.handleClick}>About Me&nbsp;   
            <BiChevronsDown/>
          </Button>
      </LeftSection>
    </Section>
  </>
)};

export default Hero;