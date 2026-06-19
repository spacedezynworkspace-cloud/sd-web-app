import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'DezynLab',
    template: `DezynLab`,
  },
  description:
    'At DEZYNLAB, we train the next generation of design professionals through hands-on Interior Design education, advanced 3D visualization, structured mentorship, and real-world internship programs.',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-28 pb-20 container mx-auto max-w-7xl pt-10 px-4 flex-grow">
      {children}
    </section>
  );
}
