import localFont from "next/font/local";
import "./globals.css";
import asm from "../assets/asm.png"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ACM Lnmiit",
  description: "ACM Student Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://lnmiit.ac.in/wp-content/uploads/2023/11/cropped-lnmiit-icon-32x32.png" /> {/* Update this line if you use a different file name or type */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}
