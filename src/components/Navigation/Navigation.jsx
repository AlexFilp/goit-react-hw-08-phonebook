import { Nav, NaviLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NaviLink to="/">Home</NaviLink>
      <NaviLink to="/contacts">Contacts</NaviLink>
    </Nav>
  );
};
