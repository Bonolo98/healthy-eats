import PageNav from "../components/page-nav";
import contactsImage from "../../public/images/contacts.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <div className="z-20 absolute w-screen h-screen">
        <PageNav title="CONTACTS" />
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
