import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { SupabaseProvider } from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { ModalProvider } from "@/providers/ModalProvider";
import { ToasterProvider } from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import { Player } from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music!",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <Sidebar songs={userSongs}>
              <ModalProvider />
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
