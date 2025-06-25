'use client';
import React from 'react';
import { useRouter } from "next/navigation";

type ThankYouPopupProps = {
  onClose: () => void;
};

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ onClose }) => {
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/60"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg max-w-3xl w-full px-6 py-10 text-center shadow-lg overflow-hidden bg-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Background Image INSIDE the popup */}
        <img
          src="back.png"
          alt="Background"
          className="absolute right-0 top-0 h-full w-auto max-w-[60%] object-contain pointer-events-none z-0 translate-y-[-20px]"
          draggable="false"
        />

        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold text-black mb-4">
            Thank You for Reaching Out!
          </h2>
          <p className="text-gray-700 mb-4">
            We've received your message and our team will get back to you soon.
          </p>
          <p className="text-gray-700 mb-2">In the meantime, feel free to:</p>

          <div className="mb-6 space-y-2 text-[15px] font-medium">
            <div>
              <a href="/blogs" className="text-orange-500 underline">Explore Our Blog</a>{' '}
              for insights on Web3 & tech innovation.
            </div>
            <div>
              <a href="/contact" className="text-orange-500 underline">Follow Us</a>{' '}
              on Social Media for the latest updates.
            </div>
          </div>

          <p className="text-[#F97316] font-semibold mb-6 text-lg">
            Stay tuned—exciting things are ahead!
          </p>

          <button
            className="
              bg-[#F97316] 
              border-4 border-[#F97316]
              text-white 
              px-10 py-1 
              rounded-full 
              font-semibold 
              transition 
              hover:bg-white 
              hover:text-white 
              hover:border-[#F97316]
            "
            onClick={() => router.push("/contact")}
          >
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;