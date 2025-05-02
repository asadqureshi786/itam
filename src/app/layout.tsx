"use client"
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar/Sidebar"
import Header from "@/components/Header/Header"
import "./globals.css";
import "../css/mystyle.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePathname } from "next/navigation";
import {UserProvider} from "@/context/UserContext"


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
      <UserProvider>
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable}`}>

        <div className="main_wrapper"  style={pathname === '/login' || pathname === '/signup' ? { marginLeft: '0px', paddingTop: '0px' } : {}} >
        { (pathname === '/login' || pathname === '/signup')  ? '' : <Sidebar/> }
        { (pathname === '/login' || pathname === '/signup')  ? '' : <Header/> }

        <div className="page_content" style={pathname === '/login' || pathname === '/signup' ? { padding: '0px' } : {padding: '1rem'}} >
          <div className="container-fluid p-0">
          {children}
          </div>
        </div>
        </div>
      </body>
        </UserProvider>
    </html>
  );
}
