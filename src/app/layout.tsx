import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Express Gourmet",
  description: "Uma plataforma de delivery de comida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange>
        <body className={inter.className}>
          <QueryProvider>
            <Navbar/>
            {children}
            <Toaster/>
          </QueryProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
