import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers as HeroUIProvider } from '@/lib/providers/HeroUIProvider';
import { ReduxProvider as ReduxProvider } from '@/lib/providers/ReduxProvider';
import { siteConfig } from '@/config/site';
import { montserrat, raleWay } from '@/config/fonts';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/config/nextAuthOptions';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/logo.jpg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background antialiased',
          montserrat.className
        )}
      >
        <ReduxProvider session={session}>
          <HeroUIProvider
            themeProps={{ attribute: 'class', defaultTheme: 'light' }}
          >
            <div className="relative flex flex-col h-full bg-gray-200 dark:bg-black">
              <Navbar />
              <main className="-mt-28">{children}</main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  className="flex text-sm  items-center gap-1 text-current"
                  href="https://www.advantageng.com"
                  title="Advantage homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-orange-400">Advantage</p>
                </Link>
              </footer>
            </div>
          </HeroUIProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
