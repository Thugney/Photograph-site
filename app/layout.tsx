import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eriteach Photography | Professional Photography Services",
  description: "Professional photography services for weddings, portraits, baptisms, and events. Based in Drammen, Norway.",
  keywords: "photography, fotograf, professional photographer, photo sessions, wedding photography, portrait photography, baptism, bryllupsfotograf, portrettfotograf, Drammen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
