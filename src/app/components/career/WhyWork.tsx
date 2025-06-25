"use client";
import React from "react";

const WhyWork = () => {
  return (
    <section className="flex flex-col justify-center items-center  py-16 sm:py-20 lg:py-24 relative ">
      {/* Top Section */}
      <div className="w-full mb-12 justify-center text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Why Work With Us?
        </h2>
        <p className="text-base sm:text-lg mt-4   ">
          Leverage the power of our developer network to fuel your next big
          breakthrough!
        </p>
      </div>

      {/* Benefits Section */}
      <div className="flex flex-col gap-6">
        <div className="border-2 w-full h-auto p-8 md:p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl div-bg border-theme">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-black">
            Perks & Benefits
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-black">
            <li>
              <span className="font-semibold">Competitive Salary</span> – We
              offer market-leading compensation, with crypto & fiat payment
              options
            </li>
            <li>
              <span className="font-semibold">Learning & Development</span> –
              Access to courses, certifications, and mentorship
            </li>
            <li>
              <span className="font-semibold">Remote-Friendly</span> – Work from
              anywhere with flexible schedules
            </li>
            <li>
              <span className="font-semibold">Health & Wellness</span> – Medical
              benefits, wellness programs, and mental health support
            </li>
            <li>
              <span className="font-semibold">Team Retreats & Hackathons</span>{" "}
              – Engage in exciting events, meetups, and innovation challenges
            </li>
          </ul>
        </div>

        <div className="border-2 div-bg border-theme w-full h-auto p-6  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Growth & Learning
          </h3>
          <p className="text-sm sm:text-base">
            We invest in our people. From mentorship programs and upskilling
            opportunities to global industry events, we ensure you keep
            evolving.
          </p>
        </div>

        <div className="border-2 div-bg border-theme w-full h-auto p-6  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Work That Matters
          </h3>
          <p className="text-sm sm:text-base">
            We’re building next-generation Web3 & Web2 products, from smart
            contracts and dApps to AI-driven platforms. Your work will have a
            real impact on the future of technology.
          </p>
        </div>

        <div className="border-2 div-bg border-theme w-full h-auto p-6  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Flexible Work Environment
          </h3>
          <p className="text-sm sm:text-base">
            We understand that great work happens in different ways. Whether you
            prefer remote work, hybrid setups, or in-office collaboration, we
            offer flexibility to help you thrive.
          </p>
        </div>

        <div className="border-2 div-bg border-theme w-full h-auto p-6  rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            A Culture of Collaboration
          </h3>
          <p className="text-sm sm:text-base">
            Our team is our greatest strength. We foster an environment where
            ideas are shared, challenges are tackled together, and learning
            never stops.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
