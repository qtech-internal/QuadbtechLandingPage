'use client';
import React from 'react';

type ThankYouPopupProps = {
  onClose: () => void;
};

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/60">
      <div className="relative rounded-lg max-w-2xl w-full px-6 py-10 text-center shadow-lg overflow-hidden bg-white">
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
          <p className="text-gray-700 mb-4">In the meantime, feel free to:</p>

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
            className="bg-[#F97316] hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            EXPLORE MORE
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl font-bold text-gray-400 hover:text-black z-20"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;