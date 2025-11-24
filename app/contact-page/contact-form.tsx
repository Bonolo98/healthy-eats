"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    // sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
      <h1 className="font-bold text-4xl mb-10 text-center">PLACE YOUR ORDER</h1>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block font-medium text-black">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter You Full Name..."
          className="w-full border border-gray-300 bg-white py-2 px-6 font-medium text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
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
          className="w-full  border border-gray-300 bg-white py-2 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Write your message"
          className="w-full resize-none border border-gray-300 bg-white py-2 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#ef6d6d] focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="w-full hover:shadow-form bg-[#ef6d6d] py-3 px-8 text-base font-semibold text-white outline-none">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
