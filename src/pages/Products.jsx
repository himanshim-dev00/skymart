import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=30")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.title} added to cart!`);
  };

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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

          <button className="text-lime-400 font-medium">
            Shop
          </button>

          <button
            onClick={() => navigate("/about")}
            className="text-gray-400 hover:text-white"
          >
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

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative w-11 h-11 border border-gray-800 rounded-xl hover:border-lime-400 transition"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime-400 text-black text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={() => navigate("/login")}
            className="w-11 h-11 border border-gray-800 rounded-xl"
          >
            ↪
          </button>

        </div>
      </nav>


      {/* Products */}
      <main className="max-w-7xl mx-auto px-8 py-8">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            All Products
          </h1>

          <p className="text-gray-500 mt-2">
            {filteredProducts.length} products found
          </p>
        </div>


        {/* Filters */}
        <div className="border border-gray-700 rounded-2xl p-4 mb-7">

          <div className="grid grid-cols-[1fr_220px_220px] gap-4">

            <input
              type="text"
              placeholder="🔍  Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111827] border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-lime-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#111827] border border-gray-700 rounded-xl px-4 outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all"
                    ? "All Categories"
                    : cat
                        .replace("-", " ")
                        .replace(/\b\w/g, (letter) =>
                          letter.toUpperCase()
                        )}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#111827] border border-gray-700 rounded-xl px-4 outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
              <option value="rating">
                Top Rated
              </option>
            </select>

          </div>

        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-5 gap-5">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white text-black rounded-2xl overflow-hidden border border-gray-700 hover:-translate-y-1 transition"
            >

              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-5"
                />
              </div>

              <div className="p-4">

                <p className="text-[10px] uppercase text-gray-400 mb-2">
                  {product.category}
                </p>

                <h2 className="font-semibold text-sm min-h-[40px]">
                  {product.title}
                </h2>

                <div className="text-yellow-400 text-sm mt-3">
                  ⭐ {product.rating.toFixed(1)}
                </div>

                <div className="flex items-center justify-between mt-4">

                  <span className="text-lime-500 font-bold">
                    ${product.price}
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-lime-400 text-black px-3 py-2 rounded-lg text-sm font-semibold hover:bg-lime-300"
                  >
                    🛒 Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No products found.
            </p>
          </div>
        )}

      </main>

    </div>
  );
}

export default Products;