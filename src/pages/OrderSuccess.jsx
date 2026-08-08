import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto rounded-full bg-lime-400/10 border border-lime-400 flex items-center justify-center">
          <span className="text-5xl text-lime-400">
            ✓
          </span>
        </div>

        <h1 className="text-4xl font-bold mt-8">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Thank you for shopping with SkyMart.
          Your order has been confirmed and will be
          delivered to you soon.
        </p>

        {/* Order Box */}
        <div className="border border-gray-700 rounded-2xl p-6 mt-8">

          <p className="text-gray-500 text-sm">
            Order Status
          </p>

          <p className="text-lime-400 font-semibold text-lg mt-2">
            Confirmed ✓
          </p>

          <div className="border-t border-gray-800 my-5"></div>

          <p className="text-gray-500 text-sm">
            Payment Method
          </p>

          <p className="font-semibold mt-2">
            Cash on Delivery
          </p>

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button
            onClick={() => navigate("/products")}
            className="flex-1 border border-gray-700 py-4 rounded-xl hover:border-lime-400"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-lime-400 text-black font-bold py-4 rounded-xl hover:bg-lime-300"
          >
            Go Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;