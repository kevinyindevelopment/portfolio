import styled from 'styled-components';

export const BackgroundImageWrapper = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    align-self: end;
    justify-self: end;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
      }
`