import styled from 'styled-components';

export const ContactsTitle = styled.h1`
  font-size: 35px;
  color: ${pr => pr.theme.color.accentColor};
  text-align: center;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 250px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: ${pr => pr.theme.boxShadow};
  margin-bottom: 7px;
`;

export const Label = styled.span`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 19px;
  text-align: center;
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: ${pr => pr.theme.boxShadow};
`;
