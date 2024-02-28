'use client'
import Image from "next/image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <main className="min-w-full min-h-screen overflow-auto bg-gradient-to-br from-gray-800 to-blue-400">
      <Navbar/>
      <Main />

    </main>

  );
}
