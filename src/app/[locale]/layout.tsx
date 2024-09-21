import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
  locale: string;
}
export default function Layout({ children, locale }: Readonly<LayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
