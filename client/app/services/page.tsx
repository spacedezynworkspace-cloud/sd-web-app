export default async function BlogPage() {
  return (
    <section className="container mx-auto min-h-screen max-w-7xl sm:p-8 p-4 flex flex-col sm:gap-20 gap-14">
      <div className="flex items-center justify-center w-full mt-10">
        <div className="text-center flex flex-col gap-4 items-center">
          {' '}
          <h1 className="sm:text-5xl text-4xl font-bold">
            Inside Design: Stories and Interviews
          </h1>
          <p className="sm:text-xl text-xs mb-3">
            Subscribe to learn more about space transformation & practical
            design inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
