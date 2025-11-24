import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services/authApi';
import { loginSchema, type LoginFormData } from '../../services/auth.schema';
import { ROUTES } from '../../config/routes';

import Input from '../UI/Input';
import AuthFormContainer from '../UI/AuthFormContainer';
import ServerError from '../UI/ServerError';
import SubmitButton from '../UI/SubmitButton';
import AuthFormLink from '../UI/AuthFormLink';

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data).unwrap();
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error('ERROR: ', err);
    }
  };

  return (
    <AuthFormContainer title="Login to your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email}
          placeholder="example@mail.com"
          disabled={isLoading}
        />

        <Input
          label="Password"
          type="password"
          register={register('password')}
          error={errors.password}
          placeholder="Enter your password"
          disabled={isLoading}
        />

        <ServerError
          error={error}
          defaultMessage="There was an error logging in."
        />

        <SubmitButton isLoading={isLoading} loadingText="Entrance...">
          Войти
        </SubmitButton>
      </form>

      <AuthFormLink
        text="Don't have an account?"
        linkText="Register"
        to={ROUTES.REGISTER}
      />
    </AuthFormContainer>
  );
};

export default Login;
