import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(50px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const Main = styled.div`
  position: relative;
  width: 100%;
`;

export const TitleWrap = styled.div`
  ${props => props.theme.flex('center', 'flex-start')};
  position: absolute;
  width: 100%;
  margin-top: 230px;

  @media ${({ theme }) => theme.laptop} {
    margin-top: 300px;
    margin-left: 50px;
  }

  @media ${({ theme }) => theme.tablet} {
    margin-top: 480px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  color: ${props => props.theme.white};
  font-weight: ${props => props.theme.weightBold};
  font-size: ${props => props.theme.fontExtraLarge};
  line-height: 80px;
  z-index: 100;

  @media ${({ theme }) => theme.tablet} {
    font-size: 36px;
    line-height: 1.33;
  }
`;

export const YellowAccent = styled.div`
  display: flex;
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  z-index: 200;
`;

export const Line = styled.div`
  position: absolute;
  top: 385px;

  @media ${({ theme }) => theme.laptop} {
    width: 360px;
    top: 453px;
    left: 50px;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 150px;
    top: 567px;
    left: 45px;
  }
`;

export const Star = styled.div`
  position: absolute;
  top: 290px;
  left: -10px;

  @media ${({ theme }) => theme.laptop} {
    top: 360px;
    left: 36px;
  }

  @media ${({ theme }) => theme.tablet} {
    top: 510px;
    left: 25px;
  }
`;

export const MouseWrap = styled.div`
  ${props => props.theme.flex('center', 'center')};
  position: relative;
  z-index: 200;
  animation: ${moveUp} 2s ease-in-out infinite;
`;

export const Mouse = styled.div`
  position: absolute;
  bottom: -85vh;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`;

export const MainWrap = styled.div`
  display: flex;
  position: relative;
`;

export const MainImage = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
