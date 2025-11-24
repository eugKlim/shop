import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useRequestPasswordResetMutation } from '../services/authApi';
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from '../services/auth.schema';
import { ROUTES } from '../config/routes';

import Input from '../components/UI/Input';
import AuthFormContainer from '../components/UI/AuthFormContainer';
import ServerError from '../components/UI/ServerError';
import SubmitButton from '../components/UI/SubmitButton';
import SuccessMessage from '../components/ForgotPassword/SuccessMessage';

const ForgotPasswordPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [requestReset, { isLoading, error }] =
    useRequestPasswordResetMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await requestReset(data).unwrap();
      setIsSuccess(true);
    } catch (err) {
      console.error('Password recovery request error: ', err);
    }
  };

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <AuthFormContainer title="Password recovery">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <p className="text-sm text-gray-600 text-center">
          Enter the email you used when registering. We will send you password
          recovery instructions.
        </p>

        <Input
          label="Email"
          type="email"
          register={register('email')}
          error={errors.email}
          placeholder="example@mail.com"
          disabled={isLoading}
        />

        <ServerError
          error={error}
          defaultMessage="An error occurred while requesting password recovery."
        />

        <SubmitButton isLoading={isLoading} loadingText="Sending...">
          Send instructions
        </SubmitButton>
      </form>

      <div className="mt-6 text-center">
        <Link
          to={ROUTES.LOGIN}
          className="text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
        >
          Return to the entrance
        </Link>
      </div>
    </AuthFormContainer>
  );
};

export default ForgotPasswordPage;
