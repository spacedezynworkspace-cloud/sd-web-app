'use client';
import React, { useEffect } from 'react';
import { getSession, signIn, useSession } from 'next-auth/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { addToast, Button, Form, Input, Spinner } from '@heroui/react';
import { useRouter } from 'next/dist/client/components/navigation';

interface FormErrors {
  name?: string;
  password?: string;
}

const LoginPortal = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  const [password, setPassword] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Custom validation checks
    const newErrors: FormErrors = {};

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    // Clear errors and submit
    setErrors({});

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log('result: ', result);

      if (result?.ok) {
        const session = await getSession();

        console.log('session', session);

        const role = session?.user?.role;

        console.log('role: ', role);

        // if (role === 'admin') {
        router.push('/dashboard/operations');
        // }
        //  else if (role === 'director') {
        //   router.push('/director/dashboard');
        // } else if (role === 'supervisor') {
        //   router.push('/supervisor/dashboard');
        // }
      }
      if (!result?.ok) {
        addToast({
          title: 'Error occured',
          description: result?.error,
          color: 'danger',
        });
      }
    } catch (err: any) {
      setErrors(err.message);
      addToast({
        title: 'Error occured',
        description: err.message,
        color: 'danger',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const role = session?.user?.role;

    if (role === 'admin') {
      router.push('/dashboard');
    } else if (role === 'director') {
      router.push('/director/dashboard');
    } else if (role === 'supervisor') {
      router.push('/supervisor/dashboard');
    }
  }, []);
  return (
    <div className="sm:w-[400px] w-full text-black  bg-white p-6 rounded-2xl sm:shadow">
      <div className="w-full flex mb-10 flex-col items-center gap-3">
        <Image
          src={'/sd-web-app-logo.png'}
          alt="Space Dezyn logo"
          width={100}
          height={75}
          className="object-fill "
        />
        <h1 className="sm:text-xl text-lg font-bold">Staff Login Form</h1>
        <small className="text-center">
          Log in to manage all your projects, staff, operations, finance and
          overview.
        </small>
      </div>
      <Form
        className="w-full justify-center items-center space-y-4"
        validationErrors={errors.name ? { name: errors.name } : {}}
        onReset={() => console.log('Form reset')}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 w-full">
          <Input
            isRequired
            errorMessage={({
              validationDetails,
            }: {
              validationDetails: ValidityState;
            }) => {
              if (validationDetails.valueMissing) {
                return 'Please enter your email';
              }
              if (validationDetails.typeMismatch) {
                return 'Please enter a valid email address';
              }
              return;
            }}
            label="Email"
            classNames={{
              label: 'text-[#F19645]',
            }}
            labelPlacement="outside-top"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onValueChange={setEmail}
          />

          <Input
            isRequired
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-solid outline-transparent"
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <EyeSlashIcon className="size-4 text-[#F19645]" />
                ) : (
                  <EyeIcon className="size-4  text-[#F19645]" />
                )}
              </button>
            }
            //   errorMessage={getPasswordError(password)}
            //   isInvalid={getPasswordError(password) !== null}
            label="Password"
            classNames={{
              label: 'text-[#F19645]',
            }}
            labelPlacement="outside-top"
            name="password"
            placeholder="Enter your password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onValueChange={setPassword}
          />

          <div className="flex gap-4 justify-end">
            <Button
              className="w-1/2 flex items-center bg-[#F19645] text-white"
              type="submit"
              disabled={isLoading}
            >
              <p>Log In</p>
              {isLoading && (
                <Spinner size="sm" variant="spinner" color="white" />
              )}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPortal;
