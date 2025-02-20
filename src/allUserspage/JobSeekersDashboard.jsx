import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Import Firestore config
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import navigation for logout
import jobseeker from "../assets/jobSeeker.svg";

export default function JobSeekersDashboard() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ location: "", experience: "", skills: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); // Track the selected job
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      }
    };
    fetchJobs();
  }, []);

  const handleLogout = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setIconPosition({ x: 50, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const filteredJobs = jobs.filter((job) => {
    const jobLocation = job.location?.toLowerCase() || "";
    const jobExperience = job.experience?.toLowerCase() || "";
    const jobSkills = job.skills?.toLowerCase() || "";
    const jobTitle = job.title?.toLowerCase() || "";
    const jobCompany = job.company?.toLowerCase() || "";
    return (
      jobLocation.includes(filters.location.toLowerCase()) &&
      jobExperience.includes(filters.experience.toLowerCase()) &&
      jobSkills.includes(filters.skills.toLowerCase()) &&
      (jobTitle.includes(searchQuery.toLowerCase()) ||
        jobCompany.includes(searchQuery.toLowerCase()))
    );
  });

  useEffect(() => {
    if (filteredJobs.length === 0) {
      setErrorMessage("No job found relating to your filter.");
    } else {
      setErrorMessage("");
    }
  }, [filteredJobs]);

  const handleLearnMore = (job) => {
    setSelectedJob(job); // Set the selected job
    setShowModal(true); // Show the modal
  };

  const closeModal = () => {
    setSelectedJob(null); // Clear the selected job
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Toggle Button */}
      <button
        className="md:hidden p-4 text-gray-700 fixed rounded-full shadow-lg z-50"
        style={{ top: `${iconPosition.y}px`, left: `${iconPosition.x}px`, position: "absolute" }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        onMouseDown={handleMouseDown}
      >
        <i className="bx bx-menu text-2xl"></i>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:translate-x-0 md:w-1/4 p-4`}
      >
        <button
          className="md:hidden p-2 text-gray-700 absolute top-4 right-4"
          onClick={() => setSidebarOpen(false)}
        >
          <i className="bx bx-x text-2xl"></i>
        </button>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Experience"
          className="w-full p-2 mb-2 border rounded"
          onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
        />
        <input
          type="text"
          placeholder="Skills"
          className="w-full p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, skills: e.target.value })}
        />
        <div className="relative w-full mt-2">
          <input
            type="text"
            placeholder="Search by title or company"
            className="w-full p-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold flex items-center">
            Job Listings{" "}
            <img src={jobseeker} className="h-10 ml-2" alt="jobseeker.svg" />
          </h1>
          <button
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
            onClick={handleLogout}
          >
            <i className="bx bx-log-out text-xl mr-2"></i> Logout
          </button>
        </div>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-sm shadow-md">
              <h3 className="text-2xl mb-3 max-md:text-lg">{job.title}</h3>
              <p className="text-gray-700 m-1 text-md max-md:text-sm">Company: {job.company}</p>
              <p className="text-gray-700 m-1 text-md max-md:text-sm">Location: {job.location}</p>
              <p className="text-gray-700 m-1 text-md max-md:text-sm">Experience: {job.experience}</p>
              <button
                className="mt-4 px-4 py-2 m-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleLearnMore(job)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Modal for Job Details */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              onClick={closeModal}
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedJob?.title}</h2>
            <p className="text-gray-700 mb-2">Company: {selectedJob?.company}</p>
            <p className="text-gray-700 mb-2">Location: {selectedJob?.location}</p>
            <p className="text-gray-700 mb-2">Experience: {selectedJob?.experience}</p>
            <p className="text-gray-700 mb-2">Skills: {selectedJob?.skills}</p>
            <p className="text-gray-700 mb-2">Description: {selectedJob?.description || "No description available."}</p>
          </div>
        </div>
      )}
    </div>
  );
}