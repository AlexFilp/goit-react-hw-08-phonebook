import { RotatingLines } from 'react-loader-spinner';
import { Main, Container } from './PageLoader.styled';

export const PageLoader = () => {
  return (
    <Main>
      <Container>
        <RotatingLines height="80" width="80" strokeColor="blue" />
      </Container>
    </Main>
  );
};
