import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 30px;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 15px;
  width: 400px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
  padding-left: 10px;
  padding-right: 10px;
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 7px;
  font-size: 20px;
  transition: color 150ms ease-in, background-color 150ms ease-in;
  background-color: #d3d3d373;
  &:hover,
  &:focus {
    color: white;
    background-color: #010101;
  }
`;
