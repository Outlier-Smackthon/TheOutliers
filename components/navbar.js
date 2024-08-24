import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = ({user}) => {
    const router  = useRouter()
    const [myUser, setmyUser] = useState(user)

    const logout = () =>{
        localStorage.removeItem("myuser")
        setmyUser({token: null})
        router.push('/login')
    }

    useEffect(() => {
      if(localStorage.getItem("myuser")){
        setmyUser(JSON.parse(localStorage.getItem("myuser")))
      }
    }, [router])
    

    return (
        <div className="">

            <header className="bg-white text-gray-600 body-font border-b-4 border-blue-600 shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src="/guruicon.png" width={50} height={50} alt="Gurukul"></Image>
                        <span className="ml-3 text-xl">Gurukul</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/prequiz"} className="mr-5 hover:text-gray-900">PreQuiz</Link>
                        <Link href={"/dashboard"} className="mr-5 hover:text-gray-900">Dashboard</Link>
                        <Link href={"/myprofile"} className="mr-5 hover:text-gray-900">My Profile</Link>
                        <Link href={"/discussion"} className="mr-5 hover:text-gray-900">Discussion Forum</Link>
                        {/* <Link href={"http://localhost:8080/videoSession"} className="mr-5 hover:text-gray-900">Get Session</Link> */}
                    </nav>
                    {myUser.token && < button onClick={logout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>}
                    {!myUser.token && < Link href="/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                        <svg fill="none" stroke="currentColor" c="round" j="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>}
                </div>
            </header>

        </div>
    )
}

export default Navbar