import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="">
            <footer className="text-gray-600 body-font">
                <div className="container px-5 pt-8 pb-3 mx-auto flex justify-center items-center sm:flex-row flex-col">
                    <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/guruicon.png" width={50} height={50} alt="Gurukul"></Image>
                        <span className="ml-3 text-xl">Gurukul</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Gurukul —
                        <a href="https://twitter.com/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@smackathon</a>
                    </p>
                </div>
                <div>
                    <p className={"text-center mb-5"}>
                        Made with ❤️ by <span className="font-semibold">Anshul, Yash, Nikhil, Priya </span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer