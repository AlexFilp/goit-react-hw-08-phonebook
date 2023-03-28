import { Container, Text, MailLink, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <Container>
      <Text>
        Logged in with{' '}
        <MailLink href="mailto:mango@mail.com">mango@mail.com</MailLink>
      </Text>
      <Btn>Logout</Btn>
    </Container>
  );
};
