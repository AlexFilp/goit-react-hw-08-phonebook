import { GlobalContainer } from '../../components/GlobalStyle';
import { Container } from './Register.styled';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <GlobalContainer>
      <Container>
        <RegisterForm />
      </Container>
    </GlobalContainer>
  );
}
