import {
  ContactForm,
  Label,
  Span,
  Input,
  ErrorMessageContainer,
  ErrorText,
  Btn,
  Text,
  HomeRegisterLink,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/operations';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onHandleSubmit = data => {
    dispatch(
      logIn({
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };
  return (
    <>
      {' '}
      <ContactForm onSubmit={handleSubmit(onHandleSubmit)}>
        <Label>
          <Span>Email</Span>
          <Input
            type="email"
            {...register('email', { required: 'The field is required' })}
          />
        </Label>
        <ErrorMessageContainer>
          {errors?.email && (
            <ErrorText>{errors?.email?.message || 'Invalid email!'}</ErrorText>
          )}
        </ErrorMessageContainer>
        <Label>
          <Span>Password</Span>
          <Input
            type="password"
            {...register('password', {
              required: 'The field is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 symbols',
              },
            })}
            autoComplete="off"
          />
        </Label>
        <ErrorMessageContainer>
          {errors?.password && (
            <ErrorText>
              {errors?.password?.message || 'Invalid password!'}
            </ErrorText>
          )}
        </ErrorMessageContainer>
        <Btn type="submit" disabled={!isValid}>
          Log in
        </Btn>
      </ContactForm>
      <Text>
        Don't have an account?{' '}
        <HomeRegisterLink to={'/register'}>Go register!</HomeRegisterLink>
      </Text>
    </>
  );
};
