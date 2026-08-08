import { useNavigate } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
const userName = user?.name || "User";
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-12 py-4">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black text-2xl font-bold">
            ⚡
          </div>

          <h1 className="text-2xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <button
            onClick={() => navigate("/")}
            className="text-lime-400 font-medium"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/products")}
            className="text-gray-400 hover:text-white transition"
          >
            Shop
          </button>

          <button
            onClick={() => navigate("/about")}
            className="text-gray-400 hover:text-white transition"
          >
            About
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 border border-gray-800 rounded-xl px-3 py-2">
            <div className="w-7 h-7 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold text-sm">
              H
            </div>

            <span className="text-gray-300 text-sm">
              Himanshi Mis...
            </span>
          </div>

          {/* Cart */}
          <button
            onClick={() => alert("Your cart is empty")}
            className="w-11 h-11 border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:border-lime-400 transition"
          >
            🛒
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-11 h-11 border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:border-lime-400 transition"
          >
            ↪
          </button>

        </div>
      </nav>


      {/* ================= WELCOME HERO ================= */}
      <main className="max-w-6xl mx-auto px-6">

        <section className="mt-10 border border-gray-600 rounded-3xl overflow-hidden">

          <div className="relative p-12 bg-[#111111]">

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            ></div>

            <div className="relative flex justify-between items-center">

              {/* Left */}
              <div>

                <p className="text-lime-400 text-sm tracking-widest mb-5">
                  GOOD EVENING 👋
                </p>

                <h1 className="text-6xl font-semibold leading-tight">
                  Welcome back,
                  <br />

                  <span className="text-lime-400">
                    Himanshi!
                  </span>
                </h1>

                <p className="text-gray-500 text-lg mt-6 max-w-xl">
                  Discover today's picks — hand-curated products across
                  electronics, fashion, and more.
                </p>

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => navigate("/products")}
                    className="bg-lime-400 text-black font-semibold px-7 py-4 rounded-xl hover:bg-lime-300 transition"
                  >
                    Shop Now →
                  </button>

                  <button
                    onClick={() => navigate("/products")}
                    className="border border-gray-700 px-7 py-4 rounded-xl text-gray-300 hover:border-lime-400 transition"
                  >
                    View All Products
                  </button>

                </div>

              </div>


              {/* Right Stats */}
              <div className="flex flex-col gap-4 w-44">

                <div className="border border-lime-500/50 bg-lime-400/10 rounded-2xl p-6 text-center">
                  <h2 className="text-3xl font-bold text-lime-400">
                    20+
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Products Available
                  </p>
                </div>

                <div className="border border-gray-600 rounded-2xl p-6 text-center">
                  <h2 className="text-3xl font-bold">
                    Free
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    Delivery on ₹999+
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}
        <section className="grid grid-cols-4 gap-5 mt-12">

          <StatCard
            icon="◈"
            value="0"
            title="Cart Items"
            subtitle="In your bag"
          />

          <StatCard
            icon="↗"
            value="$0.00"
            title="Cart Value"
            subtitle="Ready to checkout"
          />

          <StatCard
            icon="☆"
            value="5"
            title="Top Products"
            subtitle="Highly rated"
          />

          <StatCard
            icon="◇"
            value="6"
            title="Categories"
            subtitle="To explore"
          />

        </section>


        {/* ================= CATEGORY ================= */}
        <section className="mt-12">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-semibold">
              Shop by Category
            </h2>

            <button
              onClick={() => navigate("/products")}
              className="text-lime-400"
            >
              View All →
            </button>

          </div>


          <div className="grid grid-cols-4 gap-5">

            <CategoryCard
              icon="💻"
              title="Electronics"
              items="17 items"
            />

            <CategoryCard
              icon="👕"
              title="Clothing"
              items="3 items"
            />

            <CategoryCard
              icon="🪑"
              title="Furniture"
              items="3 items"
            />

            <CategoryCard
              icon="🏠"
              title="Home"
              items="18 items"
            />

            <CategoryCard
              icon="🏋️"
              title="Sports"
              items="8 items"
            />

            <CategoryCard
              icon="🎒"
              title="Accessories"
              items="6 items"
            />

          </div>

        </section>


        {/* ================= TOP RATED + NEW ARRIVALS ================= */}
        <section className="grid grid-cols-2 gap-5 mt-12">

          <ProductSection
            title="⭐ Top Rated"
            products={[
              ["🎧", "Wireless Bluetooth Headphones", "4.9"],
              ["⌚", "Smart Watch Series 5", "4.8"],
              ["👕", "Comfortable Cotton T-Shirt", "4.7"],
              ["🪑", "Ergonomic Office Chair", "4.7"],
              ["🧴", "Stainless Steel Water Bottle", "4.6"],
            ]}
            rating={true}
          />


          <ProductSection
            title="✨ New Arrivals"
            products={[
              ["🎧", "Wireless Earbuds", "$99.99"],
              ["💻", "4K Ultra HD Monitor", "$349.99"],
              ["🎒", "Leather Backpack", "$79.99"],
              ["📷", "Digital Camera", "$499.99"],
              ["⌨️", "Mechanical Keyboard", "$149.99"],
            ]}
          />

        </section>


        {/* ================= FEATURES ================= */}
        <section className="grid grid-cols-3 gap-5 mt-12 mb-16">

          <FeatureCard
            icon="⚡"
            title="Fast Delivery"
            text="Same-day delivery on select items"
          />

          <FeatureCard
            icon="🛡️"
            title="Secure Payments"
            text="100% secure checkout"
          />

          <FeatureCard
            icon="💎"
            title="Best Prices"
            text="Price-match guarantee"
          />

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-10 text-center">

        <h2 className="text-lime-400 font-semibold text-xl">
          SkyMart
        </h2>

        <p className="text-gray-600 text-sm mt-3">
          © 2025 SkyMart • Built with React + Redux • Tailwind CSS
        </p>

      </footer>

    </div>
  );
}


/* ================= STAT CARD ================= */

function StatCard({ icon, value, title, subtitle }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-7">

      <div className="flex items-center gap-5">

        <div className="w-14 h-14 rounded-xl bg-lime-400/10 flex items-center justify-center text-lime-400 text-2xl">
          {icon}
        </div>

        <div>

          <h3 className="text-2xl font-bold">
            {value}
          </h3>

          <p className="text-gray-500">
            {title}
          </p>

          <p className="text-gray-700 text-sm">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================= CATEGORY CARD ================= */

function CategoryCard({ icon, title, items }) {
  return (
    <div className="bg-white text-black rounded-2xl p-8 text-center hover:scale-[1.02] transition cursor-pointer">

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {items}
      </p>

    </div>
  );
}


/* ================= PRODUCT SECTION ================= */

function ProductSection({ title, products, rating }) {
  return (
    <div className="bg-white text-black rounded-2xl p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <span className="text-lime-500 text-sm cursor-pointer">
          See all →
        </span>

      </div>


      <div className="space-y-3">

        {products.map((product, index) => (

          <div
            key={index}
            className="border border-gray-200 rounded-xl p-3 flex items-center justify-between"
          >

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
                {product[0]}
              </div>

              <div>

                <p className="font-medium">
                  {product[1]}
                </p>

                <p className="text-lime-500 text-sm mt-1">
                  {rating ? `⭐ ${product[2]}` : product[2]}
                </p>

              </div>

            </div>

            <span className="text-gray-400">
              🛒
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="border border-gray-700 rounded-2xl p-6">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-lime-400/10 flex items-center justify-center text-xl">
          {icon}
        </div>

        <div>

          <h3 className="font-semibold text-lg">
            {title}
          </h3>

          <p className="text-gray-500 text-sm">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}


export default Home;