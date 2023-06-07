import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Practice from "./components/practice";
import Student from "./components/student";
import Products from "./components/products";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      {/* <Practice /> */}
      <Navbar />
      <Header />
      <Student />
      <Products />
      <Footer/>
    </>
  );
}
