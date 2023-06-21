import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modal/RegisterModal";
import { Toaster } from "react-hot-toast"
import LoginModal from "./components/modal/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modal/RentModal";

export const metadata = {
  title: "Rental Finder",
  description: "The best rental service",
};

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
