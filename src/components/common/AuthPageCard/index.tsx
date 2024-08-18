'use client';

import useWindowDimensions from '@/hooks/useWindowDimentions/useWindowDimentions.hook';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface IAuthCard {
  isAccount: boolean;
}

const AuthPageCard = ({ isAccount }: IAuthCard) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { width: windowWidth } = useWindowDimensions();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div
      className={cn(
        'diagonal-auth-gradient-border flex w-[35dvw] flex-col items-center gap-4 rounded-lg bg-atlys-bg-2 px-8 py-8',
        windowWidth! < 760 ? 'w-[90dvw]' : 'w-[35dvw]',
      )}
    >
      {<p className="text-sm text-atlys-text-muted-2">{isAccount ? 'WELCOME BACK' : 'SIGN UP'}</p>}
      <p className="mb-[4dvh] text-lg font-bold text-atlys-text">
        {isAccount ? 'Log into your account' : 'Create an account to continue'}
      </p>
      <form className="w-full">
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-atlys-text-muted-1">
            Email or Username
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border-[1px] border-atlys-border bg-atlys-bg-2 px-2 py-2 text-sm text-atlys-text"
            placeholder="Enter your email or username"
            required
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium text-atlys-text-muted-1">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-[1px] border-atlys-border bg-atlys-bg-2 px-2 py-2 text-sm text-atlys-text"
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-atlys-text"
            >
              {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>
        <button
          onClick={() => router.push('/dashboard')}
          type="submit"
          className="text-md animated-btn w-full rounded-md bg-atlys-blue py-2 text-atlys-text"
        >
          {isAccount ? 'Login now' : 'Continue'}
        </button>
      </form>
      {!isAccount && (
        <div onClick={() => router.push('/')}>
          <text className="cursor-pointer text-xs text-atlys-text-muted-1">
            <text className="text-atlys-text-muted-2">Already have an account? </text>Login →
          </text>
        </div>
      )}
      {isAccount && (
        <div onClick={() => router.push('/signup')}>
          <text className="cursor-pointer text-xs text-atlys-text-muted-1">
            <text className="text-atlys-text-muted-2">Not registered yet? </text>Register →{' '}
          </text>
        </div>
      )}
    </div>
  );
};

export default AuthPageCard;
