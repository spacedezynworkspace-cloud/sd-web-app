import '@/styles/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description:
    'A dashboard for monitoring and managing your business operations.',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // if (!session) {
  //   redirect('/dashboard-login-portal');
  // }
  return (
    <section className="mt-28 pb-20 container mx-auto max-w-7xl pt-10 px-4 flex-grow">
      {children}
    </section>
  );
}
