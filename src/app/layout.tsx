"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar/Sidebar"
import Header from "@/components/Header/Header"
import "./globals.css";
import "../css/mystyle.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";


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



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
{
  const pathname = usePathname();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="main_wrapper"  style={pathname === '/login' || pathname === '/sign_up' ? { marginLeft: '0px', paddingTop: '0px' } : {}} >
        { (pathname === '/login' || pathname === '/sign_up')  ? '' : <Sidebar/> }
        { (pathname === '/login' || pathname === '/sign_up')  ? '' : <Header/> }

        <div className="page_content" style={pathname === '/login' || pathname === '/sign_up' ? { padding: '0px' } : {padding: '1rem'}} >
          <div className="container-fluid p-0">
          {children}
          </div>
        </div>
        </div>
        
      </body>
    </html>
  );
}
