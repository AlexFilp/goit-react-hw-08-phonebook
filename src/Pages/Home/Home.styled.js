import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'animate.css';

export const Container = styled.div`
  padding-top: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
  color: ${pr => pr.theme.color.accentColor};
`;

export const ArrowContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 60px;

  & > svg {
    width: 100px;
    height: 100px;
    fill: ${pr => pr.theme.color.accentColor};

    animation: shakeY;
    animation-duration: 4s;
  }
`;

export const HomeLoginLink = styled(Link)`
  display: block;
  width: 200px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 7px;
  padding-bottom: 12px;
  font-size: 35px;
  transition: color ${pr => pr.theme.transition},
    transform ${pr => pr.theme.transition};
  background-color: #d3d3d373;
  border: 1px solid black;
  border-radius: 4px;
  border: none;
  box-shadow: ${pr => pr.theme.boxShadow};
  &:hover,
  &:focus {
    color: ${pr => pr.theme.color.accentColor};
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const HomeRegisterLink = styled(Link)`
  display: inline-block;
  margin-left: 3px;
  color: ${pr => pr.theme.color.accentColor};
  text-decoration: underline;
  transition: transform ${pr => pr.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
