import React from "react";
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb Clone 2.0'
}

const font = Nunito({
    subsets: ["latin"]
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <RentModal />
                <RegisterModal />
                <LoginModal />
                <Navbar currentUser={currentUser} />

                <div className="pb-20 pt-28">
                    {children}
                </div>
            </body>
        </html>
    )
}