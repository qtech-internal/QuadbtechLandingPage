"use client"
import { useState } from 'react';
import JobCard from '../JobCard';

export default function Career() {
  const [inputValue, setInputValue] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Search');

  const jobs = [
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home7.png' },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home9.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home8.png" },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home9.png" },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home7.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home9.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home9.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home9.png' },
    { title: "Blockchain Developer", location: "Remote", experience: "2+ years", imageSrc: "/home/home8.png" },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home8.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home7.png' },
    { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/home/home9.png' },
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
    const noSpaces = e.target.value.replace(/\s/g, '');
    setInputValue(noSpaces);
  };

  return (
    <div className=" bg-white  flex flex-col items-center mx-auto  max-w-6xl ">

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4  w-full justify-between px-2 gap-x-12 mt-16  ">
        <h1 className="text-[36px] lg:text-[48px] md:text-[30px]  whitespace-nowrap font-bold ">Current Openings</h1>
   
        {/* <div className="w-full lg:w-auto  sm:w-[75%] relative"> */}
        <div className="w-full sm:w-[50%] md:w-[75%] lg:w-auto relative hidden lg:block md:block">

  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
 
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
      onFocus={() => setPlaceholderText('')}
      onBlur={() => setPlaceholderText('Search')}
      className="border border-theme rounded-lg pl-10 pr-4 py-2 w-full  sm:w-72 focus:outline-none text-secondary placeholder-black "
    />
</div>
        {/* 2nd  small*/}
        <div className="w-full sm:hidden relative block">
  <span className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
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
    onFocus={() => setPlaceholderText('')}
    onBlur={() => setPlaceholderText('Search')}
    className="border border-theme rounded-lg pl-10 pr-4 py-2 w-[85%] mx-auto block focus:outline-none text-secondary placeholder-black"
  />
</div>


      </div>
   
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8   m-auto justify-items-center"> */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 mt-8 m-auto justify-items-center">
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

      {/* <div className="flex items-center justify-between gap-4 mt-8"> */}
      <div className="flex items-center mx-auto justify-evenly gap-4 mt-20 w-full  ">

        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-2 py-2 border rounded-lg ${currentPage === 1 ? ' text-gray-500 cursor-not-allowed' : ' text-secondary'}`}
        >
          Previous
        </button>
        <span className="text-lg font-medium whitespace-nowrap">
        Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-2 py-2 border rounded-lg ${currentPage === totalPages ? ' text-gray-500 cursor-not-allowed' : ' text-secondary'}`}
        >
          Next
        </button>
      </div>

    </div>
  );
}

// "use client";

// import { useState } from 'react';
// import JobCard from '../JobCard';

// export default function Career() {
//   const jobs = [
//     { title: 'Blockchain Developer', location: 'Remote', experience: '2+ years', imageSrc: '/bg3.png' },
//     { title: 'UI/UX Designer', location: 'New York', experience: '3+ years', imageSrc: '/hand1 (1).png' },
//     { title: 'Software Engineer', location: 'San Francisco', experience: '4+ years', imageSrc: '/robot.png' },
//     { title: 'Data Scientist', location: 'Remote', experience: '2+ years', imageSrc: '/cardbg.png' },
//     { title: 'Product Manager', location: 'Remote', experience: '5+ years', imageSrc: '/bg3.png' },
//     { title: 'Marketing Specialist', location: 'London', experience: '3+ years', imageSrc: '/hand1 (1).png' },
//     { title: 'DevOps Engineer', location: 'Berlin', experience: '4+ years', imageSrc: '/bg3.png' },
//     { title: 'Cybersecurity Analyst', location: 'Toronto', experience: '3+ years', imageSrc: '/bg3.png' },
//     { title: 'AI Engineer', location: 'Remote', experience: '5+ years', imageSrc: '/robot.png' },
//     { title: 'Technical Writer', location: 'Sydney', experience: '2+ years', imageSrc: '/bg22.png' },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const jobsPerPage = 6;
//   const totalPages = Math.ceil(jobs.length / jobsPerPage);

//   setTimeout(() => setLoading(false), 1000);

//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="bg-white p-10 flex flex-col items-center space-y-10">
//       <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 w-full justify-between">
//         <h1 className="text-3xl font-bold">Current Openings</h1>
//         <div className="w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border border-orange-400 rounded-full px-4 py-2 w-full sm:w-72 focus:outline-none"
//           />
//         </div>
//       </div>

//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto justify-items-center">
//         {loading
//           ? Array.from({ length: jobsPerPage }).map((_, index) => (
//               <div key={index} className="w-[320px] h-[380px] rounded-[20px] border border-orange-400 p-4 animate-pulse bg-gray-200">
//                 <div className="h-5 w-36 bg-gray-300 rounded-full mb-2"></div>
//                 <div className="h-4 w-48 bg-gray-300 rounded-full mb-2"></div>
//                 <div className="h-4 w-40 bg-gray-300 rounded-full mb-4"></div>
//                 <div className="h-[220px] w-full bg-gray-300 rounded-lg"></div>
//               </div>
//             ))
//           : currentJobs.map((job, index) => (
//               <JobCard
//                 key={index}
//                 title={job.title}
//                 location={job.location}
//                 experience={job.experience}
//                 imageSrc={job.imageSrc}
//                 isOdd={index % 2 === 0}
//               />
//             ))}
//       </div>

//       <div className="flex items-center m-auto justify-evenly gap-4 mt-20 w-full">
//         <button
//           onClick={handlePrev}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-400 text-white'}`}
//         >
//           Previous
//         </button>
//         <span className="text-lg font-medium">
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-orange-400 text-white'}`}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
