import Image from "next/image";
import HomePage from "./components/home-page/home-page";
import ContactPage from "./components/contact-page/contact-page";
import Menu from "./components/menu/menu";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="contacts">
        <ContactPage />
      </section>
    </>
  );
}
