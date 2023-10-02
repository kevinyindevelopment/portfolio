import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBigWave } from 'react-icons/gi';
import { Container, Div1, Div2, Div3, NavLink, NavLinkList, SocialIcons, Logo } from './HeaderStyles';


function Header() {
  return (
    <Container>

    <Div1>
     <a href="#/">
       <Logo>
         <GiBigWave size="3rem" /> <Div1>Kevin Yin</Div1>
        </Logo>
     </a>
 
   </Div1>
   <Div2>
      <NavLinkList>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </NavLinkList>
      <NavLinkList>
        <a href="#tech">
          <NavLink>Technologies</NavLink>
        </a>
      </NavLinkList>        
      <NavLinkList>
        <a href="#background">
          <NavLink>Background</NavLink>
        </a>
      </NavLinkList>  
      <NavLinkList>
        <a href="#resume">
          <NavLink>Resume</NavLink>
        </a>
      </NavLinkList>      
   </Div2>
     <Div3>
       <SocialIcons target="_blank" rel="noopener noreferrer" href="https://github.com/kevinyindevelopment">
         <AiFillGithub size="3rem" />
       </SocialIcons>
       <SocialIcons target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-yin-015aaa1a8/">
         <AiFillLinkedin size="3rem" />
       </SocialIcons>
     </Div3>

   </Container>
  );
}

export default Header;