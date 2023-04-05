import { Container, Text, MailLink, Btn } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { selectUser } from '../../redux/Auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <Text>
        Logged in with{' '}
        <MailLink href={'mailto:' + user.email}>{user.email}</MailLink>
      </Text>
      <Btn type="button" onClick={handleLogOut}>
        Logout
      </Btn>
    </Container>
  );
};
