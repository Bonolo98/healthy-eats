import PageNav from "../components/page-nav";
import contactsImage from "../../public/images/contacts.png";
import Image from "next/image";
import ContactForm from "./contact-form";
import Gif from "./../../public/foodgif.gif";

export default function ContactPage() {
  return (
    <>
      <div className="absolute w-full min-h-screen bg-white grid grid-cols-1 lg:grid-cols-12">
        <PageNav title="CONTACTS" />
        {/* Form section - full width on mobile, half on desktop */}
        <div className="col-span-1 lg:col-span-6 flex items-center justify-center py-10 lg:py-0 order-2 lg:order-1">
          <ContactForm />
        </div>
        {/* Contacts info section - full width on mobile, half on desktop */}
        <div className="z-10 col-span-1 lg:col-span-5 px-6 lg:px-10 flex items-center justify-center py-10 lg:py-0 order-1 lg:order-2">
          <Contacts />
        </div>
      </div>
      {/* <ContactImage /> */}
    </>
  );
}

function ContactImage() {
  return (
    <Image
      src={contactsImage}
      className="relative w-full max-h-screen opacity-50"
      alt=""
    />
  );
}

function Contacts() {
  return (
    <>
      <div className="w-full max-w-md lg:max-w-full h-auto lg:h-4/6 bg-[#ffffff] text-[#ef6d6d] p-6 lg:p-10 rounded-lg lg:rounded-none shadow-lg lg:shadow-none">
        <h1 className="font-bold text-2xl lg:text-4xl mb-6 lg:mb-10 text-center">CONTACTS</h1>
        <div className="grid justify-center gap-y-4 lg:gap-y-2">
          <div className="flex gap-x-3 items-center">
            <a href="tel:0712345678">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/deco-glyph/48/ef6d6d/phone.png"
                alt="phone"
                className="w-6 h-6 lg:w-5 lg:h-5"
              />
            </a>
            <p className="font-regular text-lg lg:text-base">071 234 5678</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/50/ef6d6d/email.png"
              alt="email"
              className="w-6 h-6 lg:w-5 lg:h-5"
            />
            <p className="font-regular text-lg lg:text-base">Customer@healthyeats.com</p>
          </div>

          <div className="flex gap-x-3 items-center">
            <a href="#">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios-filled/50/ef6d6d/address--v1.png"
                alt="address--v1"
                className="w-6 h-6 lg:w-5 lg:h-5"
              />
            </a>
            <p className="font-regular text-lg lg:text-base">Sandton, Johannesburg</p>
          </div>
        </div>

        <div className="flex justify-center mt-8 lg:mt-6">
          <Image 
            src={Gif} 
            width={200} 
            height={200} 
            alt="Food Gif" 
            className="w-32 h-32 lg:w-48 lg:h-48"
          />
        </div>
      </div>
    </>
  );
}