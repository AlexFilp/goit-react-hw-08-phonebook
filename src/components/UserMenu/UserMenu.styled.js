import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const MailLink = styled.a`
  display: inline-block;
  text-decoration: underline;
  color: ${pr => pr.theme.color.accentColor};
`;

export const Btn = styled.button`
  display: block;
  padding: 5px;
  font-size: 20px;
  transition: color ${pr => pr.theme.transition},
    transform ${pr => pr.theme.transition};
  background-color: #d3d3d373;
  border-radius: 4px;
  border: none;
  box-shadow: ${pr => pr.theme.boxShadow};
  &:hover,
  &:focus {
    color: ${pr => pr.theme.color.accentColor};
    transform: scale(1.1);
  }
`;
