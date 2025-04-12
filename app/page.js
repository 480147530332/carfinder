import React from "react";
import CarGallery from "./components/CarGallery";
import Contain1 from "./components/Contain1";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
    <div>
      <Navbar />
     
    </div>
    <div>
      <Contain1/>
    </div>
    <div>
      <CarGallery/>
    </div>
    <main className="min-h-screen bg-white flex items-center justify-center">
       <ContactForm/>
      </main>
    <div>
      <Footer/>
    </div>

    </>
  );
}
