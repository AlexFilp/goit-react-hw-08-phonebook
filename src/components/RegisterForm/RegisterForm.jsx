import { ContactForm, Label, Span, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  return (
    <ContactForm>
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
    </ContactForm>
  );
};
