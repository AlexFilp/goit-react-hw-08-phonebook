import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, AppBarContainer } from './AppBar.styled';
import { GlobalContainer } from '../GlobalStyle';

export const Appbar = () => {
  return (
    <Header>
      <GlobalContainer>
        <AppBarContainer>
          <Navigation />
          <AuthNav />
        </AppBarContainer>
      </GlobalContainer>
    </Header>
  );
};
