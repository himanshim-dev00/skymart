import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-12 py-4">

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black text-2xl font-bold">
            ⚡
          </div>

          <h1 className="text-2xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        <div className="flex items-center gap-8">

          <button
            onClick={() => navigate("/")}
            className="text-gray-400 hover:text-white"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/products")}
            className="text-gray-400 hover:text-white"
          >
            Shop
          </button>

          <button className="text-lime-400 font-medium">
            About
          </button>

          <div className="flex items-center gap-2 border border-gray-800 rounded-xl px-3 py-2">
            <div className="w-7 h-7 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
              H
            </div>

            <span className="text-gray-300 text-sm">
              Himanshi Mis...
            </span>
          </div>

          <button className="w-11 h-11 border border-gray-800 rounded-xl">
            🛒
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-11 h-11 border border-gray-800 rounded-xl"
          >
            ↪
          </button>

        </div>
      </nav>


      {/* About Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Heading */}
        <section className="text-center">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-lime-400 flex items-center justify-center text-black text-2xl">
            ⚡
          </div>

          <h1 className="text-4xl font-semibold mt-6">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>

        </section>


        {/* Stats */}
        <section className="grid grid-cols-4 gap-4 mt-10">

          <AboutStat value="20K+" text="Products" />

          <AboutStat value="50K+" text="Happy Customers" />

          <AboutStat value="4.9" text="Avg. Rating" />

          <AboutStat value="99%" text="On-time Delivery" />

        </section>


        {/* Our Story */}
        <section className="border border-gray-700 rounded-2xl p-8 mt-10">

          <h2 className="text-xl font-semibold mb-5">
            Our Story
          </h2>

          <p className="text-gray-500 text-sm leading-7">
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves:
            what if shopping could be simple, fast, and actually enjoyable?
          </p>

          <p className="text-gray-500 text-sm leading-7 mt-4">
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>

          <p className="text-gray-500 text-sm leading-7 mt-4">
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you
            make here.
          </p>

        </section>


        {/* What We Stand For */}
        <section className="mt-10">

          <h2 className="text-2xl font-semibold text-center mb-6">
            What We Stand For
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <ValueCard
              icon="◉"
              title="Trust"
              text="Every product is verified for quality and authenticity before listing."
            />

            <ValueCard
              icon="↗"
              title="Speed"
              text="We obsess over delivery times so your orders arrive when promised."
            />

            <ValueCard
              icon="♢"
              title="Community"
              text="Built around real customer feedback, not just business metrics."
            />

            <ValueCard
              icon="★"
              title="Quality"
              text="We curate the best — no filler, no junk, just great products."
            />

          </div>

        </section>


        {/* Team */}
        <section className="mt-10">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Meet the Team
          </h2>

          <div className="grid grid-cols-4 gap-4">

            <TeamCard
              letter="A"
              name="Aryan Shah"
              role="Founder & CEO"
            />

            <TeamCard
              letter="P"
              name="Priya Mehta"
              role="Head of Product"
            />

            <TeamCard
              letter="R"
              name="Rohan Verma"
              role="Lead Engineer"
            />

            <TeamCard
              letter="S"
              name="Sneha Kapoor"
              role="Design Director"
            />

          </div>

        </section>


        {/* CTA */}
        <section className="border border-lime-400/30 rounded-2xl p-10 text-center mt-10">

          <h2 className="text-xl font-semibold">
            Ready to shop?
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-6 bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-lime-300"
          >
            Browse Products →
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center mt-12">

        <h2 className="text-lime-400 font-semibold">
          SkyMart
        </h2>

        <p className="text-gray-600 text-sm mt-3">
          © 2025 SkyMart • Built with React + Redux • Tailwind CSS
        </p>

      </footer>

    </div>
  );
}


function AboutStat({ value, text }) {
  return (
    <div className="border border-gray-700 rounded-xl p-5 text-center">
      <h3 className="text-xl font-bold text-lime-400">
        {value}
      </h3>

      <p className="text-gray-500 text-xs mt-2">
        {text}
      </p>
    </div>
  );
}


function ValueCard({ icon, title, text }) {
  return (
    <div className="border border-gray-700 rounded-xl p-5">

      <div className="flex gap-4">

        <div className="w-9 h-9 rounded-lg bg-lime-400/10 text-lime-400 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {text}
          </p>
        </div>

      </div>

    </div>
  );
}


function TeamCard({ letter, name, role }) {
  return (
    <div className="border border-gray-700 rounded-xl p-5 text-center">

      <div className="w-10 h-10 mx-auto rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
        {letter}
      </div>

      <h3 className="font-semibold text-sm mt-3">
        {name}
      </h3>

      <p className="text-gray-500 text-xs mt-1">
        {role}
      </p>

    </div>
  );
}


export default About;