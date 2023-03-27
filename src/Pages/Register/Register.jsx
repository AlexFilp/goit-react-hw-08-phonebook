import { GlobalContainer } from '../../components/GlobalStyle';
import { Container, Title } from './Register.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <GlobalContainer>
      <Container>
        <Title>REGISTER PAGE</Title>
        <RegisterForm />
      </Container>
    </GlobalContainer>
  );
}
