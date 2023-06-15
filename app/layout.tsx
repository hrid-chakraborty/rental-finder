import { Roboto } from "next/font/google"
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
