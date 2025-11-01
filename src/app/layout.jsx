export const metadata = { title: "Akord.al" };

import "../styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body className="bg-sand text-ink antialiased">{children}</body>
    </html>
  );
}
