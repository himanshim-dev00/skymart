import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === ""
    ) {
      alert("Please fill all delivery details");
      return;
    }

    localStorage.removeItem("cart");

    navigate("/order-success");
  };

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

        <button
          onClick={() => navigate("/cart")}
          className="text-gray-400 hover:text-white"
        >
          ← Back to Cart
        </button>

      </nav>


      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Checkout
        </h1>

        <p className="text-gray-500 mt-2">
          Complete your order details.
        </p>


        <div className="grid grid-cols-2 gap-6 mt-8">

          {/* Delivery Details */}
          <div className="border border-gray-700 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6">
              Delivery Details
            </h2>

            {/* Name */}
            <div className="mb-5">

              <label className="text-gray-400 text-sm">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-lime-400"
              />

            </div>


            {/* Email */}
            <div className="mb-5">

              <label className="text-gray-400 text-sm">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-lime-400"
              />

            </div>


            {/* Phone */}
            <div className="mb-5">

              <label className="text-gray-400 text-sm">
                Phone
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-lime-400"
              />

            </div>


            {/* Address */}
            <div>

              <label className="text-gray-400 text-sm">
                Address
              </label>

              <textarea
                placeholder="Enter your delivery address"
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-lime-400"
              ></textarea>

            </div>

          </div>


          {/* Payment */}
          <div className="border border-gray-700 rounded-2xl p-6">

            <h2 className="text-xl font-semibold mb-6">
              Payment Method
            </h2>


            {/* COD */}
            <div className="border border-lime-400 bg-lime-400/10 rounded-xl p-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-lime-400 text-black flex items-center justify-center">
                  💳
                </div>

                <div>
                  <h3 className="font-semibold">
                    Cash on Delivery
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Pay when your order arrives
                  </p>
                </div>

              </div>

            </div>


            {/* Online Payment */}
            <div className="border border-gray-700 rounded-xl p-4 mt-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  💳
                </div>

                <div>
                  <h3 className="font-semibold">
                    Online Payment
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Coming soon
                  </p>
                </div>

              </div>

            </div>


            {/* Summary */}
            <div className="border-t border-gray-700 mt-7 pt-6">

              <div className="flex justify-between text-gray-400">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-gray-400 mt-3">
                <span>Subtotal</span>

                <span>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-400 mt-3">
                <span>Delivery</span>

                <span className="text-lime-400">
                  FREE
                </span>
              </div>


              <div className="flex justify-between mt-5 text-lg font-bold">

                <span>
                  Total
                </span>

                <span className="text-lime-400">
                  ${subtotal.toFixed(2)}
                </span>

              </div>

            </div>


            {/* Place Order */}
            <button
              onClick={handleOrder}
              disabled={cart.length === 0}
              className="w-full mt-7 bg-lime-400 text-black font-bold py-4 rounded-xl hover:bg-lime-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Place Order →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Checkout;