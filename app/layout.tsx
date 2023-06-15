import { Roboto } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";

export const metadata = {
  title: 'Rental Finder',
  description: 'The best rental service',
}

const font = Roboto({subsets: ["latin"],weight: "400"});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
