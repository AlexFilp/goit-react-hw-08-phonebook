import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Login.styled';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <GlobalContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <LoginForm />
      </Container>
    </GlobalContainer>
  );
}
