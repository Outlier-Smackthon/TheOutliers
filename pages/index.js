import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    if(!localStorage.getItem("myuser")){
      router.push("/login")
    } 
  }, [router])
  

  return (
    <div>
    <main className={`min-h-screen`}>
      <div className="flex justify-center pt-24">
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Assesment</button>
      </div>
    </main>
    </div>
  );
}
