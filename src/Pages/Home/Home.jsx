import { GlobalContainer } from '../../components/GlobalStyle';
import { Container, Title } from './Home.styled';
import { ImArrowDown } from 'react-icons/im';
import {
  HomeLoginLink,
  ArrowContainer,
  Text,
  HomeRegisterLink,
} from './Home.styled';

export default function Home() {
  return (
    <GlobalContainer>
      <Container>
        <Title>Your own Phonebook!</Title>
        <ArrowContainer>
          <ImArrowDown className=" animate__animated animate__infinite" />
        </ArrowContainer>
        <HomeLoginLink to={'/login'}>Log in!</HomeLoginLink>
        <Text>
          Don't have an account?{' '}
          <HomeRegisterLink to={'/register'}>Go register!</HomeRegisterLink>
        </Text>
      </Container>
    </GlobalContainer>
  );
}
