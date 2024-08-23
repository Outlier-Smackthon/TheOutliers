import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";


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
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <motion.div
            className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Gurukul
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Space : The Timeless Infinity
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Explore your favourite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <div className="space-x-3">
            <Link
              href="/prequiz"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Get Started
            </Link>
            <Link
              href="/prequiz"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Continue Learning
            </Link>
            </div>
            
          </motion.div>

          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                <Image width={220} height={220}
                  className="inline-block mt-28 hidden xl:block"
                  src="/homepageairplane.png"
                  alt="Illustration 1"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                <Image width={350} height={350}
                  className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src="/homepageastronaut.png"
                  alt="Illustration 2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.6 }}
              >
                <Image width={200} height={200}
                  className="inline-block mt-28 hidden lg:block"
                  src="/homepagerocket.png"
                  alt="Illustration 3"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

