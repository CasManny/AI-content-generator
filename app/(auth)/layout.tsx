import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Generator",
  description:
    "Sign In and experience the amazing world of spontaneou content generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <section className="flex items-center justify-center h-screen">
          {children}
        </section>
      </body>
    </html>
  );
}
