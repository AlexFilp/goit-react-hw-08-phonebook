import { GlobalStyle } from '../GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const HomePage = lazy(() => import('../../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../../Pages/Register/Register'));
const LoginPage = lazy(() => import('../../Pages/Login/Login'));
const ContactsPage = lazy(() => import('../../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer autoClose={2000} limit={3} position="top-right" />
    </>
  );
};
