import { Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
          <Zap className="w-7 h-7 text-black fill-black" />
        </div>

        <h1 className="text-3xl font-bold">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </Link>

      {/* Navigation */}
      <ul className="flex items-center gap-8 text-lg">

        <li>
          <Link
            to="/"
            className="hover:text-lime-400 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="hover:text-lime-400 transition"
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="hover:text-lime-400 transition"
          >
            About
          </Link>
        </li>

        {/* User */}
        <li className="flex items-center gap-2 border border-gray-800 rounded-xl px-3 py-2">

          <div className="w-8 h-8 rounded-lg bg-lime-400 text-black flex items-center justify-center font-bold">
            {userName.charAt(0).toUpperCase()}
          </div>

          <span className="text-gray-300 text-sm">
            {userName}
          </span>

        </li>

        {/* Cart */}
        <li>
          <button
            onClick={() => navigate("/cart")}
            className="w-11 h-11 border border-gray-800 rounded-xl hover:border-lime-400 transition"
          >
            🛒
          </button>
        </li>

        {/* Logout */}
        <li>
          <button
            onClick={handleLogout}
            className="w-11 h-11 border border-gray-800 rounded-xl hover:border-lime-400 transition"
          >
            ↪
          </button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;