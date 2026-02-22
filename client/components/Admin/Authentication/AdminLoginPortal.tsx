'use client';
import React from 'react';
import { Form } from '@heroui/form';
import { Select, SelectItem } from '@heroui/select';
import { Checkbox } from '@heroui/checkbox';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Spinner } from '@heroui/spinner';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { addToast } from '@heroui/toast';
import Image from 'next/image';

interface FormErrors {
  name?: string;
  password?: string;
  retryPassword?: string;
  terms?: string;
}

interface FormData {
  name: string;
  email: string;
  retryPassword: string;
  password: string;
  regNo: string;
  role: string;
  terms: string;
}

// interface AdminLoginPortalProps {
//   setSelectedForm: (value: number) => void;
// }
const AdminLoginPortal = () => {
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  const [isRetryPasswordVisible, setIsRetryPasswordVisible] =
    React.useState<boolean>(false);

  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [retryPassword, setRetryPassword] = React.useState('');
  const [term, setTerm] = React.useState<boolean>(false);

  const [errors, setErrors] = React.useState<FormErrors>({});

  // Real-time password validation
  //   const getPasswordError = (value: string) => {
  //     if (value.length < 4) {
  //       return 'Password must be 4 characters or more';
  //     }
  //     if ((value.match(/[A-Z]/g) || []).length < 1) {
  //       return 'Password needs at least 1 uppercase letter';
  //     }
  //     if ((value.match(/[^a-z]/gi) || []).length < 1) {
  //       return 'Password needs at least 1 symbol';
  //     }

  //     return null;
  //   };
  //   const getRetryPasswordError = (value: string) => {
  //     if (value !== password) {
  //       return "Passwords don't match";
  //     }

  //     return null;
  //   };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as unknown as FormData;

    // Custom validation checks
    const newErrors: FormErrors = {};

    // Password validation
    // const passwordError = getPasswordError(data.password);

    // if (passwordError) {
    //   newErrors.password = passwordError;
    // }

    // Username validation
    if (data.name === 'admin') {
      newErrors.name = 'Nice try! Choose a different username';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (!term) {
      setErrors({ terms: 'Please accept the terms & conditions.' });
      return;
    }

    // Clear errors and submit
    setErrors({});

    try {
      setIsLoading(true);
      // 1️⃣ Register user
      //   const res = await registerUser(data);
      //   console.log(res);
      //   addToast({
      //     title: 'Sign Up',
      //     description: res.message,
      //     color: 'success',
      //   });

      setIsLoading(false);
      //   return setSelectedForm(2);
      // 2️⃣ Auto login
      // await signIn("credentials", {
      //   regNo: data.regNo,
      //   password: data.password,
      //   redirect: true,
      //   callbackUrl: "/",
      // });
    } catch (err: any) {
      setErrors(err.message);
      addToast({
        title: 'Error occured',
        description: err.message,
        color: 'danger',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="sm:w-[400px] w-full text-black  bg-white p-6 rounded-2xl sm:shadow">
      <div className="w-full flex mb-10 flex-col items-center gap-3">
        <Image
          src={'/sd-web-app-logo-orange.png'}
          alt="Space Dezyn logo"
          width={100}
          height={75}
          className="object-fill dark:flex hidden"
        />
        <Image
          src={'/sd-web-app-logo.png'}
          alt="Space Dezyn logo"
          width={100}
          height={75}
          className="object-fill dark:hidden "
        />
        <h1 className="sm:text-xl text-lg font-bold">Admin Login Form</h1>
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
          {/* <Input
          isRequired
          errorMessage={({
            validationDetails,
          }: {
            validationDetails: ValidityState;
          }) => {
            if (validationDetails.valueMissing) {
              return 'Enter First & last name';
            }

            return errors.name;
          }}
          label="Reg No. / Matric No."
          labelPlacement="outside"
          name="regNo"
          placeholder="Enter student registration or matric number"
        /> */}

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
              label: 'text-orange-400',
            }}
            labelPlacement="outside-top"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          {/* <div className="-mt-6">
          <Select
            isRequired
            label="Account Type"
            labelPlacement="outside"
            name="role"
            placeholder="Select account type"
            errorMessage="Select account type"
          >
            <SelectItem key="vendor">Vendor</SelectItem>
            <SelectItem key="user">User</SelectItem>
          </Select>
        </div> */}
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
                  <EyeSlashIcon className="size-4 text-orange-400" />
                ) : (
                  <EyeIcon className="size-4  text-orange-400" />
                )}
              </button>
            }
            //   errorMessage={getPasswordError(password)}
            //   isInvalid={getPasswordError(password) !== null}
            label="Password"
            classNames={{
              label: 'text-orange-400',
            }}
            labelPlacement="outside-top"
            name="password"
            placeholder="Enter your password"
            type={isPasswordVisible ? 'text' : 'password'}
            value={password}
            onValueChange={setPassword}
          />

          {/* <Input
          isRequired
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-solid outline-transparent"
              type="button"
              onClick={() => setIsRetryPasswordVisible(!isRetryPasswordVisible)}
            >
              {isRetryPasswordVisible ? (
                <EyeSlashIcon className="size-4" />
              ) : (
                <EyeIcon className="size-4" />
              )}
            </button>
          }
          errorMessage={getRetryPasswordError(retryPassword)}
          isInvalid={getRetryPasswordError(retryPassword) !== null}
          label="Retry Password"
          labelPlacement="outside"
          name="retry_password"
          placeholder="Retry password"
          type={isRetryPasswordVisible ? 'text' : 'password'}
          value={retryPassword}
          onValueChange={setRetryPassword}
        />

        <Checkbox
          isRequired
          color="warning"
          classNames={{
            label: 'text-small',
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          isSelected={term}
          value={term ? 'true' : 'false'}
          onValueChange={setTerm}
        >
          <p className="text-orange-400">
            {' '}
            I agree to the terms and conditions
          </p>
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )} */}

          <div className="flex gap-4 justify-end">
            <Button
              className="w-1/2 flex items-center bg-orange-400 text-white"
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

export default AdminLoginPortal;
