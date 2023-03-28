import { Form, Label, Span, Input, Btn } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(name);
    console.log(email);
    console.log(password);
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Username</Span>
        <Input type="text" name="name" autoComplete="on" />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input type="email" name="email" autoComplete="on" />
      </Label>
      <Label>
        <Span>Password</Span>
        <Input type="password" name="password" autoComplete="off" />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
