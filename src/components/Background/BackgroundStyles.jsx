import styled from 'styled-components'

export const SwapSide = styled.div`
    @media ${(props) => props.theme.breakpoints.md} {
        order: 2;
    }
`

export const BackgroundSectionImage = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`
export const SoundCloudContainer = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
    overflow: hidden;
    justify-content: center;
    margin: auto;
`

export const BackgroundSection = styled.h2`
display: grid;
gap: 5%;
font-size: 24px;
line-height: 40px;
font-weight: 300;
padding-bottom: 3.6rem;
margin: ${(props) => props.center ? "0 0 0 auto" : "0"};
grid-template-columns: ${(props) => props.center ? "1fr" : "1fr 1fr"};
color: ${({ theme }) => theme.colors.primary1};

@media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  max-width: 670px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 40px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
}
`
