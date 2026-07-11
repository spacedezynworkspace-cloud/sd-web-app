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
    <section className="pt-[510px] pb-20 container mx-auto font-montserrat max-w-7xl flex-grow">
      {children}
    </section>
  );
}
