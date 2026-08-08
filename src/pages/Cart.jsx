import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + change,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
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

          <button
            onClick={() => navigate("/products")}
            className="text-gray-400 hover:text-white"
          >
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

          <button className="w-11 h-11 border border-lime-400 rounded-xl text-lime-400">
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


      {/* Cart */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Your Cart
            </h1>

            <p className="text-gray-500 mt-2">
              {totalItems} item(s) in your cart
            </p>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="border border-gray-700 px-5 py-3 rounded-xl hover:border-lime-400"
          >
            ← Continue Shopping
          </button>

        </div>


        {cart.length === 0 ? (

          <div className="border border-gray-700 rounded-2xl p-16 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to get started.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-7 bg-lime-400 text-black font-semibold px-7 py-3 rounded-xl"
            >
              Start Shopping →
            </button>

          </div>

        ) : (

          <div className="grid grid-cols-[1fr_320px] gap-6">

            {/* Items */}
            <div className="space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="border border-gray-700 rounded-2xl p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-5">

                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center">

                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                      />

                    </div>

                    <div>

                      <h2 className="font-semibold">
                        {item.title}
                      </h2>

                      <p className="text-lime-400 font-bold mt-2">
                        ${item.price}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 text-sm mt-3"
                      >
                        Remove
                      </button>

                    </div>

                  </div>


                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                      className="w-9 h-9 border border-gray-700 rounded-lg"
                    >
                      −
                    </button>

                    <span className="w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                      className="w-9 h-9 border border-gray-700 rounded-lg"
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Summary */}
            <div className="border border-gray-700 rounded-2xl p-6 h-fit">

              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6 text-gray-400">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mt-4 text-gray-400">
                <span>Subtotal</span>
                <span>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-gray-700 mt-5 pt-5 flex justify-between">

                <span className="font-semibold">
                  Total
                </span>

                <span className="text-lime-400 font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 bg-lime-400 text-black font-bold py-4 rounded-xl hover:bg-lime-300"
              >
                Checkout →
              </button>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Cart;