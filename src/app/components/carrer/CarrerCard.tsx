"use client"
import { useState } from 'react';
import JobCard from '../JobCard';

export default function Career() {
  const jobs = [
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg3.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/hand1 (1).png' },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/robot.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/card1 (2).svg" },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg3.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/hand1 (1).png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg3.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg3.png' },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/robot.png" },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg22.png' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; 


  const totalPages = Math.ceil(jobs.length / jobsPerPage);


  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" bg-white p-10 flex flex-col items-center space-y-10 ">

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full justify-between">
        <h1 className="text-3xl font-bold">Current Openings</h1>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border border-orange-400 rounded-full px-4 py-2 w-full sm:w-72 focus:outline-none"
          />
        </div>
      </div>

      {/* Jobs Grid */}
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1500px] m-auto justify-items-center">
        {currentJobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            location={job.location}
            experience={job.experience}
            imageSrc={job.imageSrc}
            isOdd={index % 2 === 0}
          />
        ))}
      </div> */}
<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8  m-auto justify-items-center">
  {currentJobs.map((job, index) => (
    <JobCard
      key={index}
      title={job.title}
      location={job.location}
      experience={job.experience}
      imageSrc={job.imageSrc}
      isOdd={index % 2 === 0}
    />
  ))}
</div>

      {/* <div className="flex items-center justify-between gap-4 mt-8"> */}
      <div className="flex items-center m-auto justify-evenly gap-4 mt-20 w-full ">

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-400 text-white'}`}
        >
          Previous
        </button>
        <span className="text-lg font-medium">
         {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-400 text-white'}`}
        >
          Next
        </button>
      </div>

    </div>
  );
}
