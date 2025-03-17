"use client";

import Image from 'next/image';

interface JobCardProps {
  title: string;
  location: string;
  experience: string;
  imageSrc: string;
  isOdd: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  experience,
  imageSrc,
  isOdd,
}) => {
  return (
    <div
      className={`rounded-[20px] border ${
        isOdd ? 'bg-orange-400 border-orange-400' : 'bg-white border-orange-400'
        } w-[280px] h-[350px] flex flex-col justify-between p-4 relative`}
  
    >
      {/* Top Content */}
      <div className="space-y-4 z-10 ml-auto">
        <h3
          className={`${
            isOdd ? 'bg-white text-black' : 'bg-orange-400 text-white'
          } inline-block px-3 py-1 rounded-full text-sm`}
        >
          {title}
        </h3>
        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 mb-1 inline-block ${
              isOdd
                ? 'bg-transparent text-white border-white'
                : 'bg-transparent text-black border-black'
            } border rounded-full`}
          >
            Location: {location}
          </p>
        </div>
        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 inline-block ${
              isOdd
                ? 'bg-transparent text-white border-white'
                : 'bg-transparent text-black border-black'
            } border rounded-full`}
          >
            Experience: {experience}
          </p>
        </div>
      </div>


 <div className="flex justify-between items-end ml-[-40px] z-10 overflow-visible">

<div className="w-40 h-40 self-end mb-[-40px] overflow-visible">
  <Image
    src={imageSrc}
    alt="3D Illustration"
    width={500}
    height={500}
    className="object-cover w-full h-full"
  />
</div>

<div className="z-10">
  <button
    className={`text-sm font-medium py-1 px-4 rounded-full border ${
      isOdd
        ? 'bg-white text-black border-white hover:bg-gray-200'
        : 'bg-orange-400 text-white hover:bg-gray-400'
    }`}
  >
    Apply Now
  </button>
</div>
</div>
    </div>
  );
};

export default JobCard;
