import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/site-header";
import HeaderMobile from "@/components/site-header-mobile";
import Footer from "@/components/site-footer";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
// import "node_modules/react-modal-video/scss/modal-video.scss";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mëkan",
  description: "Mekan",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          manrope.className
        )}
      >
        <ThemeProvider
          enableSystem={false}
          defaultTheme="dark"
          attribute="class"
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <HeaderMobile />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
