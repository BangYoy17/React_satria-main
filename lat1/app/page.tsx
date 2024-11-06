// Tandai komponen sebagai Client Component
"use client";

import { useState } from "react";
import ContactForm from "./component/contackform";
import Hero from "./component/hero";
import RiwayatPekerjaan from "./component/riwayatPekerjaan";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import Skills from "./component/skills";
import Info from "./component/info";
import Hobby from "./component/hobby";
import "./insho-style.css";
import Color from "./component/color";

export default function MyApp() {
  const [warna, setWarna] = useState("light"); // Menambahkan state untuk warna

  return (
    <section
      className={`min-h-screen p-4 transition-colors duration-300 ${
        warna === "dark"
          ? "bg-black text-white"
          : warna === "light"
          ? "bg-white text-black"
          : "bg-blue-300 text-gray-900"
      }`}
    >
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <Info />
      <Hobby />
      <Color setWarna={setWarna} />
      <ContactForm />
    </section>
  );
}
