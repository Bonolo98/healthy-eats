import Image from "next/image";
import HomePage from "./components/home-page/home-page";
import ContactPage from "./contact-page/contact-page";
import Menu from "./menu/menu";
import Navbar from "./components/navbar/navbar";
import Beverages from "./menu/beverages";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="menu">
        <Menu />
        <Beverages />
      </section>

      <section id="contacts">
        <ContactPage />
      </section>
    </>
  );
}
