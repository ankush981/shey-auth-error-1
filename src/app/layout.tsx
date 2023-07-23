import "./globals.css";
import "./tailwindClasses.css";
import LayoutProvider from "@/components/LayoutProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}
