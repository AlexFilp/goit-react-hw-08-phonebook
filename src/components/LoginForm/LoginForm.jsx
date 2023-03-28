import {
  ContactForm,
  Label,
  Span,
  Input,
  Btn,
  Text,
  HomeRegisterLink,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/Auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <>
      {' '}
      <ContactForm onSubmit={handleSubmit}>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" autoComplete="on" />
        </Label>
        <Label>
          <Span>Password</Span>
          <Input type="password" name="password" autoComplete="off" />
        </Label>
        <Btn type="submit">Log in</Btn>
      </ContactForm>
      <Text>
        Don't have an account?{' '}
        <HomeRegisterLink to={'/register'}>Go register!</HomeRegisterLink>
      </Text>
    </>
  );
};
