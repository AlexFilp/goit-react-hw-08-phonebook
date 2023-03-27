import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 15px;
  width: 400px;
  padding: 15px;
  border-radius: 10px;

  box-shadow: ${pr => pr.theme.boxShadow};
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  font-size: 20px;
  width: 100%;
  height: 30px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: ${pr => pr.theme.boxShadow};
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
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
