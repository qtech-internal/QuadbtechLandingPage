import React from 'react';

type ThankYouPopupProps = {
  onClose: () => void;
};

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 text-center relative">
        <h2 className="text-2xl font-bold text-black mb-2">Thank You for Reaching Out!</h2>
        <p className="text-gray-700 mb-4">We've received your message and our team will get back to you soon.</p>
        <p className="text-gray-700 mb-4">In the meantime, feel free to:</p>
        <div className="mb-4 space-y-1">
          <a href="/blogs" className="text-orange-500 underline font-medium">Explore Our Blog</a> for insights on Web3 & tech innovation. <br />
          <a href="/contact" className="text-blue-600 underline font-medium">Follow Us</a> on Social Media for the latest updates.
        </div>
        <p className="text-p font-medium mb-4">Stay tuned—exciting things are ahead!</p>
        <button className="bg-theme text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
          EXPLORE MORE
        </button>

        {/* Optional Close Button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-xl font-bold text-gray-400 hover:text-black">
          ×
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
