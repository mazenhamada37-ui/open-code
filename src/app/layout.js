import './globals.css';

export const metadata = {
  title: 'Mazen Hamada — Software Engineer',
  description:
    'Mazen Hamada — software engineer and frontend developer based in Cairo. Building responsive, high-performance web applications with React and Next.js.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
