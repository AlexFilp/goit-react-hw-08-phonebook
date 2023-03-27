import { ContactForm, Label, Span, Input, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <ContactForm>
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
  );
};
