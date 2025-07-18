"use client";
import { useState } from "react";
import JobCard from "../JobCard";
import JobsCarousel from "./JobsCarousel";

export default function Career() {
  const [inputValue, setInputValue] = useState("");
  const [placeholderText, setPlaceholderText] = useState("Search");

  const jobs = [
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home8.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home7.png",
    },
    {
      title: "Blockchain Developer",
      location: "Remote",
      experience: "2+ years",
      imageSrc: "/home/home9.png",
    },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const noSpaces = e.target.value.replace(/\s/g, "");
    setInputValue(noSpaces);
  };

  return (
    <div className="mx-0 lg:mx-10 2xl:mx-0">
      <div className="  flex flex-col items-center  px-4 xl:px-0 mt-10 lg:mt-0  justify-cente w-full  2xl:mx-auto      ">
        {/* <div className="flex flex-col md:flex-row items-center justify-center mb-4 gap-4   md:gap-44 lg:gap-74   2xl:gap-80 3xl:gap-90  md:justify-between  mt-16 w-full 2xl:ml-[30px] 3xl:ml-[25px]  2xl:w-[80vw] 3xl:w-[71vw] "> */}
        <div className="flex flex-col   md:flex-row justify-between items-center   lg:max-w-7xl    w-full ">
          <h1 className=" text-[9.7vw] text-balance   lg:text-[48px]  md:text-[30px] whitespace-nowrap font-bold hidden  md:block ">
            Current Openings
          </h1>
          <h1 className="text-[9.7vw]  text-balance whitespace-nowrap font-bold w-full  md:hidden">
            Current Openings
          </h1>

          <div className="w-[35%]  lg:w-auto h-10 relative hidden md:flex gap-3 border border-theme rounded-lg">
            <span className="flex items-center justify-center h-10 pl-3 pointer-events-none ">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder={placeholderText}
              value={inputValue}
              onChange={handleChange}
              onFocus={() => setPlaceholderText("")}
              onBlur={() => setPlaceholderText("Search")}
              className=" w-full sm:w-72 text-secondary h-10 focus:outline-none border-none placeholder-black placeholder:font-bold"
            />
          </div>

          <div className="w-full  md:hidden relative block mt-5 ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder={placeholderText}
              value={inputValue}
              onChange={handleChange}
              onFocus={() => setPlaceholderText("")}
              onBlur={() => setPlaceholderText("Search")}
              className="border border-theme rounded-xl pl-10 pr-4 py-2 w-full mx-auto block focus:outline-none text-secondary placeholder-black"
            />
          </div>
        </div>

        {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8   m-auto justify-items-center"> */}
        <div className="max-w-7xl mt-8">
          {/* <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-x-24 lg:gap-x-[5vw] xl:gap-x-28 2xl:gap-x-40 gap-y-12 xl:ml-10 2xl:ml-0 hidden"> */}
          <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-28 gap-y-12 items-center mx-auto justify-center hidden ">
            {currentJobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                location={job.location}
                experience={job.experience}
                imageSrc={job.imageSrc}
                isOdd={index % 2 === 0}
                buttonText="Apply Now"
              />
            ))}
          </div>

          {/* Scrollable flex layout for small screens */}
          <JobsCarousel currentJobs={currentJobs} />
          {/* <Job /> */}
        </div>

        {/* <div className="flex items-center justify-between gap-4 mt-8"> */}
        <div className="hidden md:flex items-center mx-auto justify-evenly gap-4 mt-20 w-full  ">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 w-[90px] border cursor-pointer text-center rounded-lg ${currentPage === 1 ? " text-[#949494] cursor-not-allowed" : "text-[#2A2A2A]"}`}
          >
            Previous
          </button>
          <span className="text-lg font-medium whitespace-nowrap">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 w-[90px] border text-center cursor-pointer rounded-lg ${currentPage === totalPages ? " text-[#949494] cursor-not-allowed" : "text-[#2A2A2A]"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
