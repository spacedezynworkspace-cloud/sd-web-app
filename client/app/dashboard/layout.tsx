import '@/styles/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    'A dashboard for monitoring and managing your business operations.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="pb-20 container mx-auto max-w-7xl pt-10 px-4 flex-grow">
      {children}
    </section>
  );
}
