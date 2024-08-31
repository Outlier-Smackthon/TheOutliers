import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const predefinedPrompt = "A prompt related to a subject will be given, and in exchange, only give the answers related to that subject in short. The question is: ";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const userMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    const fullPrompt = `${predefinedPrompt}${input}`;

    try {
      const result = await model.generateContent(fullPrompt);
      const responseText = await result.response.text();

      const aiMessage = { role: 'ai', text: responseText };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem("myuser")) {
      router.push("/login")
    }
  }, [router])


  return (
    <div>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Chat with AI
        </div>
        {isOpen && (
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '10px',
              width: '300px',
              maxHeight: '400px',
              overflowY: 'auto',
              padding: '10px',
              marginTop: '10px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '10px',
                height: '300px',
                overflowY: 'auto',
                marginBottom: '10px',
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '10px',
                    textAlign: message.role === 'user' ? 'right' : 'left',
                  }}
                >
                  <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong> {message.text}
                </div>
              ))}
              {loading && <p>Loading...</p>}
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your message"
                style={{
                  flex: '1',
                  padding: '10px',
                  borderRadius: '5px',
                  marginRight: '10px',
                  border: '1px solid #ccc',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                }}
              >
                Send
              </button>
            </form>
            {error && (
              <div style={{ marginTop: '10px', color: 'red' }}>
                <p>{error}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <main className={`min-h-screen`}>
        <div className="bg-cyan-300 text-white py-24">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <motion.div
              className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <motion.h1
                className="text-3xl md:text-5xl pb-2 text-black font-bold tracking-loose"
                whileHover={{ scale: 1.1, rotate: 2, color: "#FFCA28" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Gurukul
              </motion.h1>
              <h2 className="text-3xl text-black md:text-4xl leading-relaxed md:leading-snug mb-2">
                Explore. Learn. Conquer.
              </h2>
              <p className="text-sm text-justify md:text-base text-black mb-4">
                Step into the world of GURUKUL, where learning is more than just acquiring knowledge, it`s about building a future. Start your journey with us and unlock your true potential.
              </p>
              <div className="space-x-3 mt-4">
                <Link
                  href="/prequiz"
                  className="bg-transparent hover:bg-yellow-300 text-black rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent"
                >
                  Get Started
                </Link>
                <Link
                  href="/dashboard"
                  className="bg-transparent hover:bg-yellow-300 text-black rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent"
                >
                  Continue Learning
                </Link>
              </div>

            </motion.div>


            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
              <div className="h-48 flex flex-wrap content-center">
                {/* <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Image
                    width={220}
                    height={220}
                    className="inline-block mt-28 hidden xl:block"
                    src="/homepageairplane.png"
                    alt="Illustration 1"
                  />
                </motion.div> */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {/* <Image
                    width={350}
                    height={350}
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="/homepageastronaut.png"
                    alt="Illustration 2"
                  /> */}
                  <Image
                    width={600}
                    height={600}
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0 ml-44"
                    src="/homepage.png"
                    alt="Illustration 2"
                  />

                </motion.div>

                {/* <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image
                    width={200}
                    height={200}
                    className="inline-block mt-28 hidden lg:block"
                    src="/homepagerocket.png"
                    alt="Illustration 3"
                  />
                </motion.div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

