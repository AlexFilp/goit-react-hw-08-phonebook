import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Login.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <GlobalContainer>
      <Container>
        <LoginForm />
      </Container>
    </GlobalContainer>
  );
}
