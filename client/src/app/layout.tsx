import "./globals.css";
import { Providers } from "../redux/provider";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./modals/LoginModal";
import RegisterModal from "./modals/RegisterModal";

export const metadata = {
  title: "Plant More",
  description: "Follow your passion for plants with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LoginModal />
          <RegisterModal />
          <TopHeader></TopHeader>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
