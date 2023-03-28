import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, AppBarContainer } from './AppBar.styled';
import { GlobalContainer } from '../GlobalStyle';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Appbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <GlobalContainer>
        <AppBarContainer>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </AppBarContainer>
      </GlobalContainer>
    </Header>
  );
};
