'use client';
import React from 'react';
import Image from 'next/image';
import {
  addToast,
  Button,
  Checkbox,
  Form,
  Input,
  Spinner,
  Textarea,
} from '@heroui/react';

import { BrandIcons, iconTypes } from '@/assets/icons';

const ContactForm = () => {
  const [errors, setErrors] = React.useState({});

  const [acceptTermsIsSelected, setAcceptTermsIsSelected] =
    React.useState<boolean>(false);

  const CONTACTS: { value: string; icon: iconTypes; textColor: string }[] = [
    {
      value: 'info@spacedezyn.com',
      icon: 'envelope',
      textColor: 'text-black',
    },
    {
      value: '(+234) 816 075 0898',
      icon: 'white-telephone',
      textColor: 'text-black',
    },
  ];

  //   const [createExpense, { isLoading }] = useCreateExpenseMutation();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit...');

    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const payload = {
      //   project: projectDetails.id,
      //   amount: Number(form.get('amount')),
      //   type: form.get('type') as
      //     | 'electrical'
      //     | 'wood'
      //     | 'tools'
      //     | 'material'
      //     | 'labor'
      //     | 'logistics',
      //   requestedDate: form.get('requestedDate') as string,
      //   urgencyLevel: form.get('urgencyLevel') as 'low' | 'medium' | 'high',
      //   // requestedBy: form.get('requestedBy') as string,
      //   description: form.get('description') as string,
    };
    console.log('payload: ', payload);

    try {
      //   const res = await sendContactFormData(payload).unwrap();
      const res = {
        message: 'Message sent!',
      };
      console.log(res);

      addToast({
        title: 'Form submitted',
        description: res.message,
        color: 'success',
      });

      setErrors({});
    } catch (error) {
      console.log(error);

      addToast({
        title: 'Expense failed',
        description: 'Please try again.',
        color: 'danger',
      });
    }
  };
  return (
    <section className="w-full bg-[#F8F8F8] relative h-auto sm:py-20 py-14">
      <Image
        src={'/mapBackground.png'}
        alt="Space dezyn contact map"
        width={500}
        height={500}
        className="absolute w-full h-full inset-0 object-cover z-0"
        // className="bg-contain bg-center object-contain"
      />
      <div className="relative max-w-7xl px-2 flex items-center h-full justify-center sm:px-6 z-20 lg:px-8 mx-auto">
        <div className="w-full flex sm:flex-row flex-col gap-16 justify-between">
          <div className="sm:w-1/2 w-full">
            <div className="flex items-center sm:justify-start justify-center gap-2">
              <div className="shadow-[#F19645] shadow-2xl bg-[#F19645] lg:rounded-3xl sm:mb-20 rounded-xl w-[70px] h-[70px] p-4 lg:px-0 lg:w-[100px] lg:h-[100px] flex justify-center items-center ">
                <BrandIcons value={'voice-assistance'} />{' '}
              </div>
              <h1 className="text-3xl sm:hidden flex text-black dark:text-[#F19645] font-extrabold font-montserrat">
                let&apos;s Talk
              </h1>
            </div>
            <h1 className="text-3xl sm:flex hidden text-black dark:text-[#F19645] font-extrabold font-montserrat mb-10">
              let&apos;s Talk
            </h1>
            <ul className="list-disc list-outside text-sm text-black text-left lg:pr-[45px] lg:pl-4 px-10 pt-10 lg:pt-0">
              <li className="my-3">
                Need a consultation or have a design in mind? Let&apos;s discuss
                your ideas!
              </li>
              <li className="my-3">
                Curious about our services or want to know more about our
                process? We&apos;re happy to provide the details.
              </li>
              <li className="my-3">
                Ready to start your project? We can&apos;t wait to get started.
              </li>
              <li className="mt-10">
                Let&apos;s Connect Fill out the form below with your details and
                a brief message about your project or inquiry. We&apos;ll get
                back to you as soon as possible.
              </li>
            </ul>
            <div className="flex lg:justify-between sm:px-0 px-8 sm:gap-8 gap-5 sm:flex-row flex-col mt-10">
              {CONTACTS.map((contact, key) => {
                return (
                  <div
                    key={key}
                    className="bg-[#F4D69F] rounded-lg relative px-4 py-3 lg:py-6 lg:px-8 flex justify-center items-center w-full"
                  >
                    <div className="absolute lg:-left-4 -left-2 bg-[#F19645] rounded-full h-5 w-5 p-1 lg:w-10 lg:h-10  flex justify-center items-center">
                      <BrandIcons value={contact.icon} />
                    </div>
                    <span
                      className={`font-bold ${contact.textColor} lg:text-xs text-[10px]`}
                    >
                      {contact.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <Form
              className="w-full space-y-6 bg-white dark:bg-black p-4 rounded-lg shadow-lg"
              validationErrors={errors}
              onSubmit={onSubmit}
            >
              <div className="flex flex-col gap-6 w-full">
                {/* Email */}
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
                  labelPlacement="outside-top"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />

                {/* Subject */}
                <Input
                  isRequired
                  errorMessage={({
                    validationDetails,
                  }: {
                    validationDetails: ValidityState;
                  }) => {
                    if (validationDetails.valueMissing) {
                      return 'Please enter subject';
                    }

                    return;
                  }}
                  label="Subject"
                  labelPlacement="outside-top"
                  name="subject"
                  placeholder="Enter message subject"
                  type="text"
                />

                {/* Description Full Width */}
                <div className="w-full">
                  <Textarea
                    label="Message (Optional)"
                    labelPlacement="outside"
                    name="message"
                    placeholder="Add note to your enquiry..."
                  />
                </div>
              </div>
              <div className="flex gap-4 sm:flex-row flex-col justify-end">
                <Checkbox
                  color="warning"
                  isSelected={acceptTermsIsSelected}
                  onValueChange={setAcceptTermsIsSelected}
                >
                  Accept terms & conditions
                </Checkbox>
                <Button
                  className="flex items-center bg-[#F19645] text-white"
                  type="submit"
                  disabled={true && !acceptTermsIsSelected}
                >
                  <p>Send message</p>
                  {true && (
                    <Spinner size="sm" variant="spinner" color="white" />
                  )}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
