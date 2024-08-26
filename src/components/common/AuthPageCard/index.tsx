'use client';

import useWindowDimensions from '@/hooks/useWindowDimentions/useWindowDimentions.hook';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

interface IAuthCard {
  isAccount: boolean;
  setIsAccount?: Dispatch<SetStateAction<boolean>> | any;
  forgotPassword?: boolean;
}

const AuthPageCard = ({ isAccount = false, setIsAccount }: IAuthCard) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
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
        'border-atlys-bg-1 flex w-[35dvw] flex-col items-center gap-4 rounded-xl border-2 border-atlys-gray-1 bg-atlys-bg-2 px-8 py-8',
        windowWidth! < 760 ? 'w-[90dvw]' : 'w-[35dvw]',
      )}
    >
      {<p className="text-md text-atlys-text-muted-2">{isAccount ? 'WELCOME BACK' : 'SIGN UP'}</p>}
      <p className="mb-[4dvh] text-xl font-bold text-atlys-text">
        {isAccount ? 'Log into your account' : 'Create an account to continue'}
      </p>
      <form className="w-full">
        <div className="mb-4 flex flex-col gap-2">
          {!isAccount && (
            <label htmlFor="email" className="text-sm font-medium text-atlys-text-muted-1">
              Email
            </label>
          )}
          {isAccount && (
            <label htmlFor="email" className="text-sm font-medium text-atlys-text-muted-1">
              Email or Username
            </label>
          )}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border-[1px] border-atlys-border bg-atlys-bg-2 px-2 py-2 text-sm text-atlys-text"
            placeholder={isAccount ? 'Enter your email or username' : 'Enter your email'}
            required
          />
        </div>
        {!isAccount && (
          <div className="mb-4 flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-medium text-atlys-text-muted-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-md border-[1px] border-atlys-border bg-atlys-bg-2 px-2 py-2 text-sm text-atlys-text"
              placeholder="Choose a preferred username"
              required
            />
          </div>
        )}

        <div className="relative mb-4 flex w-full flex-col gap-2">
          <div className="space-between w-full flex-row">
            <label htmlFor="password" className="text-sm font-medium text-atlys-text-muted-1">
              Password
            </label>
            {isAccount && (
              <button className="ml-60 text-sm font-medium text-atlys-text-muted-1">
                Forgot password?
              </button>
            )}
          </div>
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-[1px] border-atlys-border bg-atlys-bg-2 px-2 py-2 text-sm text-atlys-text"
              placeholder={isAccount ? 'Enter your password' : 'Choose a strong password'}
              required
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-atlys-text"
            >
              {isPasswordVisible ? (
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.41667 8C2.41667 7.19329 2.93513 5.70472 4.18608 4.40565C5.40721 3.13755 7.29888 2.08334 10 2.08334C12.7011 2.08334 14.5928 3.13755 15.8139 4.40565C17.0649 5.70472 17.5833 7.19329 17.5833 8C17.5833 8.80671 17.0649 10.2953 15.8139 11.5944C14.5928 12.8624 12.7011 13.9167 10 13.9167C7.29888 13.9167 5.40721 12.8624 4.18608 11.5944C2.93513 10.2953 2.41667 8.80671 2.41667 8ZM10 0.583336C6.8678 0.583336 4.5928 1.82078 3.1056 3.36519C1.64822 4.87862 0.916672 6.72338 0.916672 8C0.916672 9.27662 1.64822 11.1214 3.1056 12.6348C4.5928 14.1792 6.8678 15.4167 10 15.4167C13.1322 15.4167 15.4072 14.1792 16.8944 12.6348C18.3518 11.1214 19.0833 9.27662 19.0833 8C19.0833 6.72338 18.3518 4.87862 16.8944 3.36519C15.4072 1.82078 13.1322 0.583336 10 0.583336ZM8.24993 8C8.24993 7.0335 9.03343 6.25 9.99993 6.25C10.9664 6.25 11.7499 7.0335 11.7499 8C11.7499 8.9665 10.9664 9.75 9.99993 9.75C9.03343 9.75 8.24993 8.9665 8.24993 8ZM9.99993 4.75C8.205 4.75 6.74993 6.20508 6.74993 8C6.74993 9.79493 8.205 11.25 9.99993 11.25C11.7949 11.25 13.2499 9.79493 13.2499 8C13.2499 6.20508 11.7949 4.75 9.99993 4.75Z"
                    fill="#7F8084"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.41667 8C2.41667 7.19329 2.93513 5.70472 4.18608 4.40565C5.40721 3.13755 7.29888 2.08334 10 2.08334C12.7011 2.08334 14.5928 3.13755 15.8139 4.40565C17.0649 5.70472 17.5833 7.19329 17.5833 8C17.5833 8.80671 17.0649 10.2953 15.8139 11.5944C14.5928 12.8624 12.7011 13.9167 10 13.9167C7.29888 13.9167 5.40721 12.8624 4.18608 11.5944C2.93513 10.2953 2.41667 8.80671 2.41667 8ZM10 0.583336C6.8678 0.583336 4.5928 1.82078 3.1056 3.36519C1.64822 4.87862 0.916672 6.72338 0.916672 8C0.916672 9.27662 1.64822 11.1214 3.1056 12.6348C4.5928 14.1792 6.8678 15.4167 10 15.4167C13.1322 15.4167 15.4072 14.1792 16.8944 12.6348C18.3518 11.1214 19.0833 9.27662 19.0833 8C19.0833 6.72338 18.3518 4.87862 16.8944 3.36519C15.4072 1.82078 13.1322 0.583336 10 0.583336ZM8.24993 8C8.24993 7.0335 9.03343 6.25 9.99993 6.25C10.9664 6.25 11.7499 7.0335 11.7499 8C11.7499 8.9665 10.9664 9.75 9.99993 9.75C9.03343 9.75 8.24993 8.9665 8.24993 8ZM9.99993 4.75C8.205 4.75 6.74993 6.20508 6.74993 8C6.74993 9.79493 8.205 11.25 9.99993 11.25C11.7949 11.25 13.2499 9.79493 13.2499 8C13.2499 6.20508 11.7949 4.75 9.99993 4.75Z"
                    fill="#7F8084"
                  />
                </svg>
              )}
              {/* {isPasswordVisible ? <IoEyeOff /> : <IoEye />} */}
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
        <div
          className="w-full"
          onClick={() => {
            if (!setIsAccount) {
              router.push('/');
            }
            setIsAccount && setIsAccount(!isAccount);
          }}
        >
          <div className="flex w-full cursor-pointer gap-2 self-start text-xs text-atlys-text-muted-1">
            <text className="text-atlys-text-muted-2">Already have an account? </text>
            Login →
          </div>
        </div>
      )}
      {isAccount && (
        <div
          onClick={() => {
            if (!setIsAccount) {
              router.push('/signup');
            }
            setIsAccount && setIsAccount(!isAccount);
          }}
          className="w-full"
        >
          <div className="flex w-full cursor-pointer gap-2 text-xs text-atlys-text-muted-1">
            <text className="text-atlys-text-muted-2">Not registered yet? </text>
            Register →{' '}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPageCard;
