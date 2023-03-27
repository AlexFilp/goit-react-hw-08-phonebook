import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  width: calc((100% - 20px) / 3);
  padding: 10px;
  border-radius: 10px;
  box-shadow: ${pr => pr.theme.boxShadow};
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Btn = styled.button`
  padding: 7px;
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
