import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">

        <p className="text-lime-400 text-sm font-semibold mb-4">
          JOIN SKYMART
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Shop smarter.
          <br />
          <span className="text-lime-400">
            Live better.
          </span>
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-lg">
          Create your account and discover amazing products,
          great prices, and a seamless shopping experience.
        </p>

      </div>


      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center border-l border-gray-700">

        <div className="w-[500px] border border-gray-800 rounded-3xl p-10">

          <h2 className="text-3xl font-bold">
            Create account
          </h2>

          <p className="text-gray-500 mt-2">
            Enter your details to get started
          </p>


          {/* Name */}
          <div className="mt-8">

            <label className="text-gray-400 text-sm">
              Full name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 px-4 py-4 rounded-xl bg-gray-900 border border-gray-700 outline-none focus:border-lime-400"
            />

          </div>


          {/* Email */}
          <div className="mt-5">

            <label className="text-gray-400 text-sm">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-4 rounded-xl bg-gray-900 border border-gray-700 outline-none focus:border-lime-400"
            />

          </div>


          {/* Password */}
          <div className="mt-5">

            <label className="text-gray-400 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-4 py-4 rounded-xl bg-gray-900 border border-gray-700 outline-none focus:border-lime-400"
            />

          </div>


          {/* Signup */}
          <button
            onClick={handleSignup}
            className="w-full mt-7 bg-lime-400 text-black font-bold py-4 rounded-xl hover:bg-lime-300"
          >
            Create account →
          </button>


          <p className="text-center text-gray-500 mt-6">

            Already have an account?

            <span
              onClick={() => navigate("/login")}
              className="text-lime-400 ml-1 cursor-pointer"
            >
              Sign in
            </span>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;