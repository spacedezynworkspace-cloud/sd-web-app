import type { Metadata } from 'next';
import Link from 'next/link';
// import { ArrowLeft } from 'lucide-react'
// import { PulseLines } from '@/components/landing/motion'
// import Navbar from '@/components/landing/Navbar'
// import Footer from '@/components/landing/Footer'

export const metadata: Metadata = { title: 'Privacy Policy — Space Dezyn' };

const sections = [
  {
    title: '1. Introduction',
    content: `Welcome to Space Dezyn, an interior design company based in Abuja, Nigeria. We are committed to protecting your personal information and respecting your privacy.\n\nThis Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website, services, or contact forms.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect information in the following ways:\n\nInformation you provide directly: When you submit a contact form, request a consultation, or communicate with us via email or phone, we collect your name, email address, phone number, company name, job title, and any other details you choose to share.\n\nInformation collected automatically: When you visit our website, we may automatically collect your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs through cookies and analytics tools.`,
  },
  {
    title: '3. How We Use Your Data',
    content: `We use the information we collect for the following purposes:\n\n— To respond to your enquiries and provide the services you request\n— To send you information about our services, case studies, and updates (where you have consented)\n— To improve and personalise your experience on our website\n— To analyse website traffic and usage patterns\n— To comply with our legal obligations\n\nWe will never sell your personal data to third parties.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `Where applicable under data protection law (including GDPR), we process your personal data on the following legal bases:\n\nContractual necessity: Processing required to enter into or perform a contract with you.\nLegitimate interests: Processing for our legitimate business interests.\nConsent: Where you have given us clear consent.\nLegal obligation: Where processing is necessary to comply with a legal obligation.`,
  },
  {
    title: '5. Cookies',
    content: `Our website uses cookies to enhance your experience and analyse usage. We use essential cookies (required for the website to function), analytics cookies (used with your consent), and marketing cookies (used with your consent).\n\nYou can manage your cookie preferences at any time through our cookie consent banner or your browser settings.`,
  },
  {
    title: '6. Data Sharing',
    content: `We may share your personal data with service providers that assist us in operating our website and delivering our services. These parties process data on our behalf and are bound by appropriate data processing agreements. We also share data with professional advisors and regulatory authorities where required by law.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected. Typically, contact and enquiry data is retained for up to 3 years after our last interaction.`,
  },
  {
    title: '8. Your Rights',
    content: `Depending on your location, you may have the following rights:\n\n— Right of access\n— Right to rectification\n— Right to erasure\n— Right to restrict processing\n— Right to data portability\n— Right to object\n— Right to withdraw consent\n\nTo exercise any of these rights, contact us at info@spacedezyn.com. We will respond within 30 days.`,
  },
  {
    title: '9. Security',
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date. Continued use of our website following any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at:\n\nEmail: info@spacedezyn.com\nSubject line: Privacy Enquiry`,
  },
];

export default function PrivacyPage() {
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
          Privacy Policy<span className="text-primary">.</span>
        </h1>
        <p className=" text-xs text-muted-foreground mb-16">
          Last Updated: April 2026
        </p>
        <p className="font-inter text-base text-muted-foreground leading-relaxed mb-16 max-w-2xl">
          At Space Dezyn, we respect your privacy and are committed to
          protecting your personal data. This policy explains how we collect,
          use, and safeguard your information when you visit our website or
          engage with our services.
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
