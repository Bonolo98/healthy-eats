"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
      <h1 className="font-bold text-4xl mb-10 text-center text-[#ef6d6d]">
        PLACE YOUR ORDER
      </h1>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block font-regular text-black">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter You Full Name..."
          className="w-full border border-gray-300 bg-white py-2 px-6 font-regular text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="w-full  border border-gray-300 bg-white py-2 px-6 text-base font-regular text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-regular text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Write your message"
          className="w-full resize-none border border-gray-300 bg-white py-2 px-6 text-base font-regular text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="w-full hover:shadow-form bg-[#ef6d6d] py-3 px-8 mb-4 text-base font-semibold text-white outline-none"
        >
          Send Message
        </button>
        {showAlert && (
          <Alert className="text-[#ef6d6d]">
            <CheckCircle2Icon />
            <AlertTitle>Success! Message is Sent</AlertTitle>
            <AlertDescription>
              We will reach out to you as soon as possible.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </form>
  );
};

function sendEmail(data: FormData) {
  console.log(sendEmail);
}

export default ContactForm;
