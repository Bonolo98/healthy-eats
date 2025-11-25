import PageNav from "../components/page-nav";
import contactsImage from "../../public/images/contacts.png";
import Image from "next/image";
import ContactForm from "./contact-form";
import Gif from "./../../public/foodgif.gif";

export default function ContactPage() {
  return (
    <>
      <div className="absolute w-screen h-screen grid grid-cols-12">
        <PageNav title="CONTACTS" />
        <div className="col-span-6 flex items-center justify-center">
          <ContactForm />
        </div>
        <div className="z-10 col-span-5 px-10 flex items-center justifiy-center">
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
      <div className="w-full h-4/6 bg-[#ffffff] text-[#ef6d6d] p-10">
        <h1 className="font-bold text-4xl mb-10 text-center">CONTACTS</h1>
        <div className="grid justify-center gap-y-2">
          <div className="flex gap-x-2 items-center">
            <a href="">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/deco-glyph/48/ef6d6d/phone.png"
                alt="phone"
              />
            </a>
            <p className="font-regular">071 234 5678</p>
          </div>

          <div className="flex gap-x-2 items-center">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/ef6d6d/email.png"
              alt="email"
            />
            <p className="font-regular">Customer@healthyeats.com</p>
          </div>

          <div className="flex gap-x-2 items-center">
            <a href="">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/ef6d6d/address--v1.png"
                alt="address--v1"
              />
            </a>
            <p className="font-regular">Sandton, Johannesburg</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image src={Gif} width={200} height={200} alt="Food Gif" />
        </div>
      </div>
    </>
  );
}
