import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';
import {
  useResetPasswordMutation,
  useVerifyResetTokenQuery,
} from '../services/authApi';
import {
  resetPasswordFormSchema,
  type ResetPasswordFormFormData,
} from '../services/auth.schema';

import Input from '../components/UI/Input';
import AuthFormContainer from '../components/UI/AuthFormContainer';
import ServerError from '../components/UI/ServerError';
import SubmitButton from '../components/UI/SubmitButton';
import FailToken from '../components/ResetPassword/FailToken';

import TokenVereficationMessage from '../components/ResetPassword/TokenVereficationMessage';
import SuccessMessage from '../components/ForgotPassword/SuccessMessage';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';

  const {
    data: verifyData,
    isLoading: isVerifying,
    isError: isVerifyError,
  } = useVerifyResetTokenQuery(token, {
    skip: !token,
  });

  const [resetPassword, { isLoading, error, isSuccess }] =
    useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormFormData>({
    resolver: zodResolver(resetPasswordFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.FORGOT_PASSWORD);
    }
  }, [token, navigate]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 3000);
    }
  }, [isSuccess, navigate]);

  const onSubmit = async (data: ResetPasswordFormFormData) => {
    try {
      await resetPassword({ token, password: data.password }).unwrap();
    } catch (err) {
      console.error('Password reset error: ', err);
    }
  };

  if (isVerifying) {
    return <TokenVereficationMessage />;
  }

  if (isVerifyError || !token) {
    return <FailToken />;
  }

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <AuthFormContainer title="New Password">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <p className="text-sm text-gray-600 text-center">
          Enter a new password for {verifyData?.email}
        </p>

        <Input
          label="New Password"
          type="password"
          register={register('password')}
          error={errors.password}
          placeholder="Minimum 6 characters, letter and number"
          disabled={isLoading}
        />

        <ServerError
          error={error}
          defaultMessage="An error occurred while resetting your password."
        />

        <SubmitButton isLoading={isLoading} loadingText="Change...">
          Change password
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

export default ResetPasswordPage;
