import { Nav, NaviLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      {!isLoggedIn ? (
        <NaviLink to="/">Home</NaviLink>
      ) : (
        <NaviLink to="/contacts">Contacts</NaviLink>
      )}
    </Nav>
  );
};
