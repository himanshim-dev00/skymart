import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">

  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center">
  <Zap className="w-6 h-6 text-black fill-black" />
</div>

    <h1 className="text-3xl font-bold">
      Sky<span className="text-lime-400">Mart</span>
    </h1>
  </div>

  <ul className="flex items-center gap-10 text-lg font-medium">
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>Products</li>

  <li>Categories</li>

  <li>
    <Link
      to="/login"
      className="cursor-pointer hover:text-lime-400"
    >
      Login
    </Link>
  </li>
</ul>
</nav>
  );
}

export default Navbar;