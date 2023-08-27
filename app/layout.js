import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'API-INFO',
  description: 'Generated by Boussada Noureddine',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            width: '100%',
            background: 'teal',
            fontSize: '30px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link style={{ margin: '7px' }} href="/">
            Home
          </Link>
          <Link style={{ margin: '7px' }} href="/posts">
            Postes
          </Link>
          <Link style={{ margin: '7px' }} href="/articles">
            articles
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
