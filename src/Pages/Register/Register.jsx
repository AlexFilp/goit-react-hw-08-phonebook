import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Register.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export default function Register() {
  return (
    <GlobalContainer>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container>
        <RegisterForm />
      </Container>
    </GlobalContainer>
  );
}
