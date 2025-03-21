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
      // className={`rounded-[20px] border font-roboto ${isOdd ? 'bg-orange-400 border-orange-400' : 'bg-white border-orange-400'
      //   } w-[320px] h-[380px] flex flex-col justify-between p-4 relative`}
      className={`rounded-[20px] border font-roboto  ${isOdd ? 'bg-orange-400 border-orange-400' : 'bg-white border-orange-400'
        } w-[320px] h-[380px] flex flex-col justify-between p-4 relative shadow-md transition-all duration-300 
      hover:shadow-gray-400 hover:shadow-lg hover:scale-102`}

    >
      {/* rop Content */}
      {/* <div className="space-y-4 z-10 ml-auto">
        <h3
          className={`${isOdd ? 'bg-white text-black' : 'bg-orange-400 text-white'
            } inline-block px-3 py-1 rounded-full text-sm`}
        >
          {title}
        </h3>
        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 mb-1 inline-block ${isOdd
              ? 'bg-transparent text-white border-white'
              : 'bg-transparent text-black border-black'
              } border rounded-full`}
          >
            Location: {location}
          </p>
        </div>
        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 inline-block ${isOdd
              ? 'bg-transparent text-white border-white'
              : 'bg-transparent text-black border-black'
              } border rounded-full`}
          >
            Experience: {experience}
          </p>
        </div>
      </div> */}
      <div className="space-y-4 z-10 ml-auto relative">
        <div className="relative inline-block">
          <img
            src="Group 6.png"
            alt=""
            className="absolute -top-2 -left-3 w-8 h-8 z-0"
          />
          <h3
            className={`${isOdd ? 'bg-white text-black' : 'bg-orange-400 text-white'} 
        inline-block px-3 py-1 rounded-full text-sm relative z-10`}
          >
            {title}
          </h3>
        </div>

        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 mb-1 inline-block ${isOdd
              ? 'bg-transparent text-white border-white'
              : 'bg-transparent text-black border-black'} border rounded-full`}
          >
            Location: {location}
          </p>
        </div>

        <div>
          <p
            className={`rounded-full text-sm px-2 py-1 inline-block ${isOdd
              ? 'bg-transparent text-white border-white'
              : 'bg-transparent text-black border-black'} border rounded-full`}
          >
            Experience: {experience}
          </p>
        </div>
      </div>


      <div className="relative w-full h-72 flex flex-col justify-end overflow-visible">

        <div className="absolute left-[-30px] bottom-[-40px] w-56 h-80 z-10 overflow-visible ">
          <Image
            src={imageSrc}
            alt="3D Illustration"
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>


        <div className="z-20 flex justify-end pb-4">
          <button
            className={`text-sm font-medium py-2 px-6 rounded-full border ${isOdd
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
