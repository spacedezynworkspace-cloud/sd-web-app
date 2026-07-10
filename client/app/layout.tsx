import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers as HeroUIProvider } from '@/lib/providers/HeroUIProvider';
import { ReduxProvider as ReduxProvider } from '@/lib/providers/ReduxProvider';
import { siteConfig } from '@/config/site';
import { montserrat, raleWay } from '@/config/fonts';
import Navbar from '@/components/Navbar';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/config/nextAuthOptions';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import 'react-vertical-timeline-component/style.min.css';

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
            themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
          >
            <div className="relative flex flex-col h-full bg-gray-50 dark:bg-black">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </HeroUIProvider>
        </ReduxProvider>
        {/* Start of HubSpot Embed Code  */}

        {/* Forms  */}
        <script
          src="https://js-eu1.hsforms.net/forms/embed/148723280.js"
          defer
        ></script>

        {/* Chat bot  */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/148723280.js"
        ></script>
        {/* End of HubSpot Embed Code  */}
      </body>
    </html>
  );
}
