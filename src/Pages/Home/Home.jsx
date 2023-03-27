import { GlobalContainer } from '../../components/GlobalStyle';
import { Container, Title } from './Home.styled';

import { HomeLoginLink, Text, HomeRegisterLink } from './Home.styled';

export default function Home() {
  return (
    <GlobalContainer>
      <Container>
        <Title>Your own Phonebook!</Title>
        <HomeLoginLink to={'/login'}>Log in!</HomeLoginLink>
        <Text>
          Don't have an account?{' '}
          <HomeRegisterLink to={'/register'}>Go register!</HomeRegisterLink>
        </Text>
      </Container>
    </GlobalContainer>
  );
}
