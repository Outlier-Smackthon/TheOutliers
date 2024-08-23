import "@/styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)
  const router = useRouter();

  const [user, setUser] = useState({token:null})

  useEffect(() => {
    // Top loading bar logic
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    });
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    });

   const myuser = JSON.parse(localStorage.getItem("myuser"));
    if(myuser){
      setUser({token: myuser.token, email: myuser.email})
    }
  }, [router])
  
  return(
    <div>
      <LoadingBar
        color='#33C1FF'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar user={user}/>
      <Component {...pageProps}  user={user}/>
      <Footer></Footer>
    </div>
  ) 
}
