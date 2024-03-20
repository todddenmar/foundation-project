import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from '@/components/NavigationBar';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
