import BookConsultation from '@/components/Web/BookConsultation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Book a consultation',
    template: `%s - Book consultation`,
  },
  description: '',
  icons: {
    icon: '/logo.jpg',
  },
};
export default async function BlogPage() {
  return (
    <section className="container mx-auto max-w-7xl sm:p-8 p-4 min-h-screen w-full  flex flex-col sm:gap-20 gap-14">
      <BookConsultation />
    </section>
  );
}
