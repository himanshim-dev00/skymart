function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
      <h1 className="text-6xl font-bold leading-tight">
        Shop Smarter <br />
        with <span className="text-lime-400">SkyMart</span>
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-2xl">
        Discover the latest products at the best prices. Fast delivery,
        trusted quality, and a seamless shopping experience.
      </p>

      <button className="mt-8 bg-lime-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-300 transition">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;