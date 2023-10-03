import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiBigWave } from 'react-icons/gi';
import { Container, Div1, Div2, Div3, NavLink, NavLinkList, SocialIcons, Logo, ResumeModal} from './HeaderStyles';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Header() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyle = {
    overflow: 'hidden',
    width: "100%",
    height: "100%"
  }

  const modalOverlay = {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)"
  }

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
        <a href='#' onClick={openModal}>
          <NavLink>Resume</NavLink>
        </a>
        <ResumeModal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal} 

        >
          <div style={modalStyle}>
            <iframe
                title="PDF Viewer"
                src="./ResumeKevinYin.pdf"
                width="100%"
                height="100%"
            />
          </div>
        </ResumeModal>
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