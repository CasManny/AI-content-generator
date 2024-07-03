import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Generator",
  description: "Generating Content spontaneously using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
