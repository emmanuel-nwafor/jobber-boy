import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

// svg import
import signup from "../assets/signup2.svg"

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!name.trim() || !email.trim() || !password.trim() || !cpassword.trim()) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (!role) {
      setError("Please select a role.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    if (password !== cpassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name.trim(),
        email: email.trim(),
        role,
        createdAt: serverTimestamp(),
      });

      setShowModal(true);
      setLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.message || "Signup failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
     <div className="w-full max-w-5xl lg:flex bg-white rounded-lg items-center justify-center overflow-hidden">
      <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center">

            <img src={signup} alt="" />

        </div>

        <div className="w-full lg:w-1/2 p-8 items-center justify-center">
          <h2 className="text-3xl mb-6 flex items-center font-semibold">
            <i className="bx bxs-user-plus text-blue-500 text-4xl mr-3"></i> Sign Up
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex mb-6">
            <button
              className={`flex-1 py-3 text-center border rounded-l-lg transition ${
                role === "job_seeker" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("job_seeker")}
            >
              Job Seeker
            </button>
            <button
              className={`flex-1 py-3 text-center border rounded-r-lg transition ${
                role === "recruiter" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setRole("recruiter")}
            >
              Recruiter
            </button>
          </div>

          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <i className="bx bx-user text-gray-500 mr-3"></i>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <i className="bx bx-envelope text-gray-500 mr-3"></i>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="flex items-center border border-gray-300 p-3 rounded-lg">
                <i className="bx bx-lock-alt text-gray-500 mr-3"></i>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="cpassword" className="block text-gray-700">
                Confirm Password
              </label>
              <div
                className={`flex items-center border p-3 rounded-lg ${
                  password !== cpassword ? "border-red-500" : "border-gray-300"
                }`}
              >
                <i className="bx bx-lock text-gray-500 mr-3"></i>
                <input
                  type="password"
                  id="cpassword"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  required
                  className="w-full outline-none"
                />
              </div>
              {password !== cpassword && (
                <p className="text-red-500 text-sm mt-1">Passwords do not match!</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center font-semibold transition hover:bg-blue-600"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <Link to="/login" className="block max-md:text-center mt-4 text-blue-500">
            Already have an account? Login
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-7 m-5 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">You have successfully signed up. Redirecting...</p>
          </div>
        </div>
      )}
    </div>
  );
}
