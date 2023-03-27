import { GlobalContainer } from '../../components/GlobalStyle';
import { Container, Title } from './Login.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <GlobalContainer>
      <Container>
        <Title>LOGIN PAGE</Title>
        <LoginForm />
      </Container>
    </GlobalContainer>
  );
}
