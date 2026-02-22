export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex mt-24 flex-col h-screen items-center justify-center gap-4 py-8 md:py-10 bg-white">
      <div className="inline-block justify-center">{children}</div>
    </section>
  );
}
