import PageNav from "../components/page-nav";
import contactsImage from "../../public/images/contacts.png";
import Image from "next/image";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <>
      <div className="absolute w-screen h-screen grid grid-cols-12">
        <PageNav title="CONTACTS" />
        <div className="col-span-6 flex items-center justify-center">
          <ContactForm />
        </div>
        <div className="z-10 col-span-5 p-20 flex items-center justifiy-center">
          <Contacts />
        </div>
      </div>
      <ContactImage />
    </>
  );
}

function ContactImage() {
  return (
    <Image
      src={contactsImage}
      className="w-full max-h-screen bg-contain opacity-50"
      alt=""
    />
  );
}

function Contacts() {
  return (
    <>
      <div className="w-full h-full bg-[#ef6d6d]"></div>
    </>
  );
}
