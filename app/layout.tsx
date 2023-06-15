import { Roboto } from "next/font/google"
import './globals.css'
import Navbar from "./components/navbar/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
