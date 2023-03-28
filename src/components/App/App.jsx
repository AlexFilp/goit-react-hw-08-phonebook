import { GlobalStyle } from '../GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { RestrictedRoute } from '../../RestrictedRoute';
import { PrivateRoute } from '../../PrivateRoute';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/Auth/selectors';
import { refreshUser } from '../../redux/Auth/operations';
import { RotatingLines } from 'react-loader-spinner';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../../Pages/Register/Register'));
const LoginPage = lazy(() => import('../../Pages/Login/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    console.log('refreshing');
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Container>
          <RotatingLines height="80" width="80" strokeColor="blue" />
        </Container>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            ></Route>
          </Route>
        </Routes>
      )}
      <GlobalStyle />
      <ToastContainer autoClose={3000} limit={3} position="top-center" />
    </>
  );
};
