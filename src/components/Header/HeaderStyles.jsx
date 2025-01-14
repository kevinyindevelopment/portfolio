import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 60px);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  padding: 1rem;
  padding-top: 1rem;
  font-weight: 500;
  letter-spacing: -.05em;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 4 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.div`
  font-size: 2rem;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary1};
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.linkHoverColor};
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const NavLinkList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${({ theme }) => theme.colors.primary1};
  border-radius: 50px;
  padding: 8px;
  &:hover {
      background-color: ${({ theme }) => theme.colors.linkHoverColor};
      transform: scale(1.2);
      cursor: pointer;
      
    }
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.primary1};
  display: flex;
  alignItems: center;
`

export const ResumeModal = styled(Modal)`
  height: 100%;
  width: 60%;
  margin: auto;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 70%;
  }
`;
