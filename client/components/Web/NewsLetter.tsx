'use client';

import React from 'react';
import { Button, Form, Input, Spinner } from '@heroui/react';

interface NewsLetterProps {
  header?: string;
  description?: string;
}

interface FormErrors {
  email?: string;
}
const NewsLetter = ({ header, description }: NewsLetterProps) => {
  const [errors, setErrors] = React.useState<FormErrors>({});
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Custom validation checks
    const newErrors: FormErrors = {};

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }
  };
  return (
    <div>
      {header && <p>{header}</p>}
      <Form
        validationErrors={errors.email ? { email: errors.email } : {}}
        onReset={() => console.log('Form reset')}
        onSubmit={onSubmit}
        className="flex flex-col items-center w-full"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          description={description ? description : ''}
          endContent={
            <Button
              className="w-[150px] ml-3 sm:absolute right-0 sm:flex hidden items-center bg-[#F19645] text-white"
              type="submit"
              disabled={true}
            >
              <p>Subscribe</p>
              {true && <Spinner size="sm" variant="spinner" color="white" />}
            </Button>
          }
          className="ring-0 outline-0 sm:w-[500px] w-full"
        />
        <Button
          className="w-full flex sm:hidden items-center bg-[#F19645] text-white"
          type="submit"
          disabled={true}
        >
          <p>Subscribe</p>
          {true && <Spinner size="sm" variant="spinner" color="white" />}
        </Button>
      </Form>
    </div>
  );
};

export default NewsLetter;
