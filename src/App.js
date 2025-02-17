import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import "./index.css";

import SignUp from './allUserspage/Signup';
import Login from './allUserspage/Login';
import AllRendering from './Homepages&comp/AllRendering';
import JobSeekersDashboard from './allUserspage/JobSeekersDashboard';
import RecruitersDashboard from './allUserspage/RecruitersDashboard';

export default function App() {
  return (
      <div className='bg-zinc-900'>
        <Routes>
          <Route path="/" element={<AllRendering />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/job_seeker" element={<JobSeekersDashboard />} />
          <Route path="/dashboard/recruiter" element={<RecruitersDashboard />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths */}
        </Routes>
      </div>
  );
}
