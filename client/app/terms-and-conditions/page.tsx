import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Terms of Service — Space Dezyn' };

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the Space Dezyn website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use the Site or our services.\n\nThese Terms constitute a legally binding agreement between you and Space Dezyn. We reserve the right to update these Terms at any time.`,
  },
  {
    title: '2. Services',
    content: `Space Dezyn provides interior design services including:\n\n-Residential and commercial design\n\n-Space planning\n\n-Design consultations\n\n-Project supervision (where applicable)\n\n Project scope will be defined in individual client agreements.`,
  },
  {
    title: '3. Intellectual Property',
    content: `All content on this Site is the property of Space Dezyn or its content suppliers and is protected by applicable intellectual property laws.\n\nFor client engagements: Unless otherwise agreed in writing, upon receipt of full payment, ownership of deliverables transfers to the client. Space Dezyn retains the right to display the work in its portfolio. Underlying frameworks and proprietary methodologies remain the intellectual property of Space Dezyn.`,
  },
  {
    title: '4. Client Obligations',
    content: `When engaging Space Dezyn for services, clients agree to:\n\n— Provide accurate, complete, and timely information\n— Designate a responsible point of contact\n— Provide timely feedback and approvals\n— Not use our deliverables for any unlawful purpose\n— Maintain the confidentiality of any access credentials`,
  },
  {
    title: '5. Payment Terms',
    content: `Unless otherwise specified in a signed agreement:\n\n— Projects are invoiced in milestones as defined in the Statement of Work\n— Payment is due within 14 days of invoice date\n— Late payments may incur interest at 2% per month\n— Space Dezyn reserves the right to pause work where payment is overdue by more than 14 days\n— All fees are exclusive of applicable taxes`,
  },
  {
    title: '6. Confidentiality',
    content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This includes business strategies, technical architectures, client data, pricing, and any information marked as confidential.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by law, Space Dezyn's total liability shall not exceed the total fees paid by the client in the three months preceding the claim.\n\nSpace Dezyn shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, loss of data, or business interruption.`,
  },
  {
    title: '8. Warranties and Disclaimers',
    content: `Space Dezyn warrants that services will be performed with reasonable skill and care. The Site and its content are provided "as is" without warranties of any kind.\n\nWe reserve the right to modify or discontinue any aspect of the Site at any time without notice.`,
  },
  {
    title: '9. Termination',
    content: `Either party may terminate an engagement with 30 days' written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.\n\nSpace Dezyn reserves the right to terminate an engagement immediately in the event of material breach or non-payment.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of the applicable territory as specified in any signed project agreement.`,
  },
  {
    title: '11. Contact',
    content: `For any questions regarding these Terms of Service:\n\nEmail: info@spacedezyn.com\nSubject: Terms Enquiry`,
  },
];

export default function TermsPage() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      {/* <PulseLines />
      <Navbar /> */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2  text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          Back to Home
        </Link>
        <div className=" text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
          Legal
        </div>
        <h1 className="font-inter text-4xl lg:text-6xl font-bold text-foreground mb-3">
          Terms of Service<span className="text-primary">.</span>
        </h1>
        <p className=" text-xs text-muted-foreground mb-16">
          Last Updated: April 2026
        </p>
        <p className="font-inter text-base text-muted-foreground leading-relaxed mb-16 max-w-2xl">
          Please read these Terms of Service carefully before using the Space
          Dezyn website or engaging our services.
        </p>
        <div className="space-y-12">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-b border-border/30 pb-12"
            >
              <h2 className="font-inter text-xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
