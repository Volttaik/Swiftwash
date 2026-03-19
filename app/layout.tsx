import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Swift wash - Online Shopping',
  description: 'Shop household essentials, cleaning products, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
