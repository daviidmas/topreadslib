import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Top Reads",
  description: "The best online library of books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
