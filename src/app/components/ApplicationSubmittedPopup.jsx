// import { useRouter } from 'next/navigation';
// import React from 'react';

// const ApplicationSubmittedPopup = ({ isOpen, onClose }) => {
//   const router = useRouter();

//   const handleExplore = () => {
//     onClose()
//     router.push('/contact')  // navigate to /form
//   }

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm  z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl w-full relative">
//         {/* <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           &times;
//         </button> */}
//         <h2 className="text-3xl font-extrabold mb-4">Application Submitted!</h2>
//         <p className="text-lg mb-2">
//           Thank you for applying to <strong>QuadB Tech</strong>!
//         </p>
//         <p className="text-gray-700 mb-2">
//           Our team is reviewing your application, and if there's a fit, we’ll reach out soon.
//         </p>
//         <p className="font-semibold mt-4">What’s Next?</p>
//         <p className="text-gray-700">Keep an eye on your inbox for updates.</p>
//         <p className="text-gray-700 mb-4">Follow us on social media to stay connected.</p>
//         <p className="text-p font-semibold mb-6">
//           We appreciate your interest and can’t wait to learn more about you!
//         </p>
//         <button
//           onClick={handleExplore}
//           className="bg-theme text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
//         >
//           EXPLORE MORE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplicationSubmittedPopup;




import { useRouter } from 'next/navigation';
import React from 'react';

const ApplicationSubmittedPopup = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleExplore = () => {
    onClose();
    router.push('/contact');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl w-full relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Uncomment this if you want a close button as well */}
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button> */}
        <h2 className="text-3xl font-extrabold mb-4">Application Submitted!</h2>
        <p className="text-lg mb-2">
          Thank you for applying to <strong>QuadB Tech</strong>!
        </p>
        <p className="text-gray-700 mb-2">
          Our team is reviewing your application, and if there's a fit, we’ll reach out soon.
        </p>
        <p className="font-semibold mt-4">What’s Next?</p>
        <p className="text-gray-700">Keep an eye on your inbox for updates.</p>
        <p className="text-gray-700 mb-4">Follow us on social media to stay connected.</p>
        <p className="text-p font-semibold mb-6">
          We appreciate your interest and can’t wait to learn more about you!
        </p>
        <button
          onClick={handleExplore}
          className="bg-[#F97F07] text-white px-6 py-2 border border-theme cursor-pointer  rounded-full font-semibold hover:bg-orange-50 transition"
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default ApplicationSubmittedPopup;
