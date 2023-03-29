import {
  Form,
  Label,
  Span,
  Input,
  ErrorMessageContainer,
  ErrorText,
  Btn,
  Text,
  HomeRegisterLink,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { doRegister } from '../../redux/Auth/operations';
import { useForm } from 'react-hook-form';

export const RegisterForm = () => {
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
    console.log(data.name);
    console.log(data.email);
    console.log(data.password);
    dispatch(
      doRegister({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onHandleSubmit)}>
        <Label>
          <Span>Username</Span>
          <Input
            {...register('name', {
              required: 'The field is required',
              minLength: {
                value: 4,
                message: 'Minimum 4 symbols',
              },
            })}
          />
        </Label>
        <ErrorMessageContainer>
          {errors?.name && (
            <ErrorText>{errors?.name?.message || 'Error!'}</ErrorText>
          )}
        </ErrorMessageContainer>
        <Label>
          <Span>Email</Span>
          <Input
            type="email"
            {...register('email', {
              required: 'The field is required',
            })}
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
          Register
        </Btn>
      </Form>
      <Text>
        Already have an account?{' '}
        <HomeRegisterLink to={'/login'}>Go log in!</HomeRegisterLink>
      </Text>
    </>
  );
};
