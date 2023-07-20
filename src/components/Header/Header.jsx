import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBigWave } from 'react-icons/gi';
import { Container, Div1, Div2, Div3, NavLink, NavLinkList, SocialIcons, Logo } from './HeaderStyles';


function Header() {
  return (
    <Container>

    <Div1>
     <Link to="/">
       <Logo>
         <GiBigWave size="3rem" /> <Div1>Kevin Yin</Div1>
        </Logo>
     </Link>
 
   </Div1>
   <Div2>
     <NavLinkList>
       <Link to="#projects">
         <NavLink>Projects</NavLink>
       </Link>
     </NavLinkList>
     <NavLinkList>
       <Link to="#tech">
         <NavLink>Technologies</NavLink>
       </Link>
     </NavLinkList>        
     <NavLinkList>
       <Link to="#background">
         <NavLink>Background</NavLink>
       </Link>
     </NavLinkList>        
   </Div2>
     <Div3>
       <SocialIcons target="_blank" rel="noopener noreferrer" href="https://github.com/kevinyincoding">
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