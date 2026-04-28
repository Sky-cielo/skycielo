import type { Metadata, Viewport } from 'next';
import './globals.css';
import EnquireModal from '@/components/EnquireModal';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'SkyCielo Realty Ventures - Exceptional European Themed Properties in Bangalore',
  description: 'SkyCielo Realty Ventures represents the finest residential plotted developments and bespoke villas across Bangalore. Discover homes of extraordinary character and craftsmanship.',
  keywords: [
    'SkyCielo', 
    'Sky Cielo', 
    'SkyCielo Realty Ventures', 
    'Bangalore Real Estate', 
    'European Themed Properties', 
    'Villas in Bangalore', 
    'Plots in Bangalore', 
    'Luxury Real Estate Bangalore',
    'Premium plots Bangalore',
    'Luxury villas Bangalore',
    'Real estate investment Bangalore',
    'European style homes',
    'Gated community Bangalore',
    'Residential plots for sale in Bangalore',
    'SkyCielo Properties',
    'Realty Ventures Bangalore',
    'Luxury real estate developers Bangalore',
    'Bespoke homes Bangalore',
    'Plotted development Bangalore',
    'Best real estate company in Bangalore'
  ],
  authors: [{ name: 'SkyCielo Realty Ventures' }],
  alternates: {
    canonical: 'https://www.skycielo.in',
  },
  openGraph: {
    title: 'SkyCielo Realty Ventures - Exceptional European Themed Properties',
    description: 'SkyCielo represents the finest residential plotted developments and bespoke villas across Bangalore. Discover homes of extraordinary character.',
    url: 'https://www.skycielo.in',
    siteName: 'SkyCielo Realty Ventures',
    images: [
      {
        url: 'https://www.skycielo.in/logo-full.png',
        width: 1200,
        height: 630,
        alt: 'SkyCielo Realty Ventures Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyCielo Realty Ventures - Exceptional European Themed Properties',
    description: 'Discover homes of extraordinary character and craftsmanship in Bangalore.',
    images: ['https://www.skycielo.in/logo-full.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://www.skycielo.in'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <EnquireModal />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
