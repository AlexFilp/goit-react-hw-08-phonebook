import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 150px;
  color: ${pr => pr.theme.color.accentColor};
`;

export const HomeLoginLink = styled(Link)`
  display: block;
  width: 200px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 7px;
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
  color: ${pr => pr.theme.color.accentColor};
  text-decoration: underline;
`;
