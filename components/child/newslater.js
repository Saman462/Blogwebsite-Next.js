export default function newslater() {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe Newslater</h1>
        <div className="py-4">
          <input
            type="text"
            className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none shadow-outline"
            placeholder="Enter your Email"
          ></input>
        </div>
        <button className="bg-blue-700 px-20 py-3 rounded-full text-gray-50 text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
}
