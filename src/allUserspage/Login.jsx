import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// svg import
import login from "../assets/login.svg"

const auth = getAuth(app);
const firestore = getFirestore(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(firestore, "users", user.uid));
      if (!userDoc.exists()) {
        setError("User role not found. Please sign up again.");
        setLoading(false);
        return;
      }

      const userData = userDoc.data();
      setUserRole(userData.role);
      setShowModal(true);

      setTimeout(() => {
        navigate(`/dashboard/${userData.role}`);
      }, 2000);
    } catch (error) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-5xl lg:flex bg-white rounded-lg items-center justify-center overflow-hidden">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover bg-center">

            <img src={login} alt="" />

        </div>

        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl mb-6 flex items-center font-semibold">
            <i className="bx bxs-user text-blue-500 text-4xl mr-3"></i> Login
          </h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
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

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center font-semibold transition hover:bg-blue-600"
            >
              {loading ? "Logging In..." : "Login"}
            </button>
          </form>

          <Link to="/signup" className="block max-md:text-center mt-4 text-blue-500">
            Don't have an account? Signup
          </Link>

        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-7 m-5 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-green-600">Login Successful!</h3>
            <p className="mt-2 text-gray-700">
              Redirecting to your {userRole === "job_seeker" ? "Job Seeker" : "Recruiter"} Dashboard...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
