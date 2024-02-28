import Image from "next/image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  return (

    <main className="container min-w-full min-h-screen overflow-auto ">
      <Navbar/>
      <Main />

    </main>

  );
}
