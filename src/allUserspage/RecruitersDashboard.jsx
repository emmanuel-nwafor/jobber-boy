import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Import Firestore config
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import navigation for logout

// import recruiterSvg
import recruiter from "../assets/recruiter.svg"

export default function RecruitersDashboard() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", company: "", location: "", experience: "", qualifications: "" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          qualifications: Array.isArray(doc.data().qualifications) 
            ? doc.data().qualifications 
            : doc.data().qualifications?.split(",") || []
        }));
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      }
    };
    fetchJobs();
  }, []);

  const handlePostJob = async () => {
    try {
      const jobData = { 
        ...newJob, 
        qualifications: newJob.qualifications.split(",").map(q => q.trim()) // Convert string to array
      };
      await addDoc(collection(db, "jobs"), jobData);
      setJobs([...jobs, jobData]);
      setNewJob({ title: "", company: "", location: "", experience: "", qualifications: "" });
    } catch (error) {
      console.error("Error posting job: ", error);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar Toggle Button */}
      <button 
        className="md:hidden p-4 text-gray-700 fixed ml-5 rounded-full shadow-lg z-50" 
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className='bx bx-menu text-2xl'></i>
      </button>

      <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:translate-x-0 md:w-1/4 p-4`}>
        <button 
          className="md:hidden p-2 text-gray-700 absolute top-4 right-4" 
          onClick={() => setSidebarOpen(false)}
        >
          <i className='bx bx-x text-2xl'></i>
        </button>
        <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
        <input type="text" placeholder="Job Title" className=" rounded w-full p-2 mb-2 border outline-none" 
          value={newJob.title} 
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
        <input type="text" placeholder="Company" className=" rounded w-full p-2 mb-2 border outline-none" 
          value={newJob.company}
          onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
        <input type="text" placeholder="Location" className=" rounded w-full p-2 mb-2 border outline-none" 
          value={newJob.location}
          onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
        <input type="text" placeholder="Experience" className=" rounded w-full p-2 mb-2 border outline-none" 
          value={newJob.experience}
          onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })} />
        <input type="text" placeholder="Qualifications (comma-separated)" className=" rounded-lg w-full p-2 mb-2 border outline-none" 
          value={newJob.qualifications}
          onChange={(e) => setNewJob({ ...newJob, qualifications: e.target.value })} />
        <button className=" rounded w-full p-2 bg-blue-500 text-white hover:bg-blue-600" onClick={handlePostJob}>
          Post Job
        </button>
      </aside>

      <main className="w-full md:w-3/4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold max-md:text-[20px] flex  items-center ">Your Job Listings<img src={recruiter} className="h-20 m-2" alt="recruiter.svg" /> </h1>

          {/* Logout Button */}
          <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center" onClick={handleLogout}>
            <i className='bx bx-log-out text-xl mr-2'></i> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg ">
              <h3 className="text-xl">
                {job.title}
              </h3>
              <div className="flex items-center justify-between mt-5">
                <p className="text-gray-700 items-center flex max-md:text-sm ">
                  <i className='bx bx-buildings text-2xl'></i>{job.company}
                </p>
                <p className="text-gray-700 items-center flex max-md:text-sm ">
                  <i className='bx bx-location-plus text-2xl'></i>{job.location}
                </p>
              </div>
              <p className="text-gray-700 mt-2 max-md:text-sm">{job.experience}</p>
              <hr className="m-2" />
              <p className="text-gray-700 mb-2 max-md:text-sm">Qualifications:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm ">
                {(Array.isArray(job.qualifications) ? job.qualifications : job.qualifications?.split(",") || []).map((qual, idx) => (
                  <li key={idx}>{qual.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
