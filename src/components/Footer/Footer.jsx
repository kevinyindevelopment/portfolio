import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <SocialIconsContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:989-971-7008">(989)971-7008</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kevinyindevelopment@gmail.com">
            kevinyindevelopment@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialContainer>
          <SocialIcons target="_blank" rel="noopener noreferrer" href="https://github.com/kevinyindevelopment">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-yin-015aaa1a8/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
