import { Nav, NaviLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <NaviLink to={'/register'}>Register</NaviLink>
      <NaviLink to={'/login'}>Log in</NaviLink>
    </Nav>
  );
};
