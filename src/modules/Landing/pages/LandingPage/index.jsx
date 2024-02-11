import React from "react";
// import { useState } from "react";
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import OurServices from "../../components/Our Services";
import WhyUsCard from "../../components/WhyUsCard";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import Testimonial from "../../components/Testimonial";
import Image2 from "../../assets/image/img2.png";
import Image1 from "../../assets/image/img1.png";

const LandingPage = () => {
  let WhyUs = [
    {
      icons: "bi bi-hand-thumbs-up bg-warning",
      title: "Mobil Lengkap",
      description:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icons: "bi bi-tag bg-danger",
      title: "Harga Murah",
      description:
        "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icons: "bi bi-clock bg-primary",
      title: "Layanan 24 jam",
      description:
        "Melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia diakhir minggu",
    },
    {
      icons: "bi bi-award bg-success",
      title: "Sopir profesional",
      description:
        "Sopir yang berprofesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  let Our = [
    {
      icons: "bi bi-check2",
      description: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      icons: "bi bi-check2",
      description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      icons: "bi bi-check2",
      description: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      icons: "bi bi-check2",
      description: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      icons: "bi-check2",
      description: "Layanan Airport Transfer / Drop In Out",
    },
  ];

  let Testi = [
    {
      image: Image1,
      icons: "bi bi-star-fill",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"',
      name: "John Dee 32, Bromo",
    },
    {
      image: Image2,
      icons: "bi bi-star-fill",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"',
      name: "John Dee 32, Bromo",
    },
    {
      image: Image1,
      icons: "bi bi-star-fill",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"',
      name: "John Dee 32, Bromo",
    },
    {
      image: Image2,
      icons: "bi bi-star-fill",
      description:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"',
      name: "John Dee 32, Bromo",
    },
  ];

  let FaqSection = [
    {
      text: "Apa saja syarat yang dibutuhkan?",
    },
    {
      text: "Berapa hari minimal sewa mobil lepas kunci?",
    },
    {
      text: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
    },
    {
      text: "Apakah Ada biaya antar-jemput?",
    },
    {
      text: "Bagaimana jika terjadi kecelakaan",
    },
  ];

  return (
    <div>
      <Navigation />

      <Hero showButton={true} />

      <OurServices data={Our} />

      <WhyUsCard data={WhyUs} />

      <Testimonial data={Testi} />

      <Banner />

      <Faq data={FaqSection} />

      <Footer />
    </div>
  );
};

export default LandingPage;
