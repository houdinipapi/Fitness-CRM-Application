import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
// import { ProfileProvider } from "@/context/ProfileContext";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitNess",
  description: "CRM fitness application",
  icons: {
    icon: "/assets/logos/achiomwa.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthProvider>
          {/* <ProfileProvider> */}
            <Navbar />
            {children}
            <Footer />
          {/* </ProfileProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
