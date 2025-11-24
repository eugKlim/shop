import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../services/authApi';
import {
  registerSchema,
  type RegisterFormData,
} from '../../services/auth.schema';
import { ROUTES } from '../../config/routes';

import Input from '../UI/Input';
import AuthFormContainer from '../UI/AuthFormContainer';
import ServerError from '../UI/ServerError';
import SubmitButton from '../UI/SubmitButton';
import AuthFormLink from '../UI/AuthFormLink';

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data).unwrap();
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error('Registration error: ', err);
    }
  };
  return (
    <AuthFormContainer title="Registration">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Name"
          type="text"
          register={registerField('name')}
          error={errors.name}
          placeholder="Enter your name"
          disabled={isLoading}
        />

        <Input
          label="Email"
          type="email"
          register={registerField('email')}
          error={errors.email}
          placeholder="example@mail.com"
          disabled={isLoading}
        />

        <Input
          label="password"
          type="password"
          register={registerField('password')}
          error={errors.password}
          placeholder="Minimum 6 characters"
          disabled={isLoading}
        />

        <ServerError
          error={error}
          defaultMessage="An error occurred while registering"
        />

        <SubmitButton isLoading={isLoading} loadingText="Registration...">
          Register
        </SubmitButton>
      </form>

      <AuthFormLink
        text="Already have an account?"
        linkText="Login"
        to={ROUTES.LOGIN}
      />
    </AuthFormContainer>
  );
};

export default Register;
