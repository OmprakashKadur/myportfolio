import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omprakash K M - React Frontend Developer | Portfolio",
  description: "Building Scalable UIs | Performance & UX Optimization. 3+ years of experience in React, Next.js, and modern web technologies. Explore my interactive portfolio featuring project galaxy visualization.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Developer", "UI/UX", "JavaScript"],
  authors: [{ name: "Omprakash K M" }],
  creator: "Omprakash K M",
  publisher: "Omprakash K M",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://omprakashkm.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Omprakash K M - React Frontend Developer",
    description: "Building Scalable UIs | Performance & UX Optimization. Explore my interactive portfolio with project galaxy visualization.",
    url: 'https://omprakashkm.dev',
    siteName: 'Omprakash K M Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omprakash K M - React Frontend Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Omprakash K M - React Frontend Developer",
    description: "Building Scalable UIs | Performance & UX Optimization. Interactive portfolio with project galaxy visualization.",
    images: ['/og-image.png'],
    creator: '@omprakashkm',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force dark theme
              document.documentElement.classList.add('dark');
              document.documentElement.style.colorScheme = 'dark';
              // Prevent theme switching
              Object.defineProperty(document.documentElement, 'className', {
                get: function() { return this.getAttribute('class') || ''; },
                set: function(value) { 
                  const newValue = value.includes('dark') ? value : value + ' dark';
                  this.setAttribute('class', newValue);
                }
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-900 text-slate-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
