// "use client";

// import React, { useState, useRef, FormEvent, FocusEvent } from "react"; // Import FormEvent, FocusEvent
// import { Upload, X } from "lucide-react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast, Toaster } from "react-hot-toast";
// import ApplicationSubmittedPopup from "@/app/components/ApplicationSubmittedPopup"; // Import the popup component

// const BlockchainDeveloper = () => {
//   const router = useRouter();

//   // --- State Management ---
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState(""); // Stores processed phone number (digits only, max 10)
//   const [whyJoin, setWhyJoin] = useState("");
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [fileName, setFileName] = useState("");
//   const [loading, setLoading] = useState(false);
//    const [showPopup, setShowPopup] = useState(true);

//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // --- Input Handling ---

//   // General handler for non-email fields or during typing for email/phone
//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name: fieldName, value } = e.target;
//     let processedValue = value;

//     switch (fieldName) {
//       case "name":
//         processedValue = value.replace(/^\s+/, "").replace(/\s+/g, " "); // Trim start, collapse multiple spaces
//         setName(processedValue);
//         break;
//       case "email":
//         // Store raw value during typing, processing happens on blur
//         setEmail(value);
//         break;
//       case "phone":
//         // ** PHONE LOGIC: Keep only digits, limit to 10 **
//         processedValue = value.replace(/[^0-9]/g, "").substring(0, 10);
//         setPhone(processedValue);
//         break;
//       case "whyJoin":
//         processedValue = value.replace(/^\s+/, "").replace(/\s+/g, " "); // Trim start only
//         setWhyJoin(processedValue);
//         break;
//       default:
//         break;
//     }
//   };

//   // Specific handler for email validation when the field loses focus (onBlur)
//   const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     const trimmedValue = value.trim();
//     const finalEmailValue = trimmedValue.toLowerCase(); // Process for state

//     console.log(`Validating email input on blur: '${trimmedValue}'`);
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isRegexValid = emailRegex.test(trimmedValue);
//     const isEmpty = trimmedValue === "";
//     console.log(`Regex Test Result for '${trimmedValue}': ${isRegexValid}`);
//     console.log(`Is Empty: ${isEmpty}`);

//     setEmail(finalEmailValue); // Update state with processed value
//     console.log(
//       `Email field blurred. Processed value set in state: '${finalEmailValue}'`
//     );

//     if (!isEmpty && !isRegexValid) {
//       console.error(`Email regex test failed for: '${trimmedValue}'`);
//       toast.error(
//         "Please enter a valid email address (e.g. example@domain.com)"
//       );
//     }
//   };

//   // ** Handler for phone blur validation feedback **
//   const handlePhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
//     // phone state already holds processed digits (max 10)
//     console.log(`Validating phone input on blur: '${phone}'`);

//     // Show error only if the field is not empty AND has the wrong length (not exactly 10)
//     if (phone.length > 0 && phone.length !== 10) {
//       console.error(`Phone number length is not 10: ${phone.length}`);
//       toast.error("Phone number must be exactly 10 digits.");
//     }
//   };

//   // --- File Handling Logic (With Validation) ---
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const maxSize = 5 * 1024 * 1024; // 5MB
//       if (file.size > maxSize) {
//         toast.error(
//           `File size exceeds the ${maxSize / (1024 * 1024)}MB limit.`
//         );
//         handleRemoveFile(); // Reset file state
//         return;
//       }
//       const allowedTypes = [
//         "application/pdf",
//         "application/msword",
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       ];
//       if (!allowedTypes.includes(file.type)) {
//         toast.error(
//           "Invalid file type. Please upload a PDF, DOC, or DOCX file."
//         );
//         handleRemoveFile(); // Reset file state
//         return;
//       }
//       setFileName(file.name);
//       setResumeFile(file);
//     }
//   };

//   const handleRemoveFile = (e?: React.MouseEvent<HTMLButtonElement>) => {
//     e?.stopPropagation();
//     setFileName("");
//     setResumeFile(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   // --- Form Submission Logic ---
//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // --- Final Validation before Submit ---
//     if (!name.trim()) {
//       toast.error("Please enter your name.");
//       document.getElementById("blockchain-dev-name")?.focus();
//       return;
//     }
//     if (!email.trim()) {
//       // Check processed email from state
//       toast.error("Please enter your email address.");
//       document.getElementById("blockchain-dev-email")?.focus();
//       return;
//     }
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//       // Final check on processed email
//       toast.error("Please enter a valid email address format.");
//       document.getElementById("blockchain-dev-email")?.focus();
//       return;
//     }

//     if (!phone) {
//       // Check if phone state is empty (already processed)
//       toast.error("Please enter your phone number.");
//       document.getElementById("blockchain-dev-phone")?.focus();
//       return;
//     }
//     // ** PHONE LOGIC: Check for exactly 10 digits **
//     if (phone.length !== 10) {
//       toast.error("Phone number must be exactly 10 digits.");
//       document.getElementById("blockchain-dev-phone")?.focus();
//       return; // Stop submission
//     }

//     if (!whyJoin.trim()) {
//       toast.error("Please explain why you want to join.");
//       document.getElementById("blockchain-dev-whyjoin")?.focus();
//       return;
//     }
//     if (!resumeFile) {
//       toast.error("Please upload your resume.");
//       // Note: Can't easily focus the file input area, but the error is shown.
//       return;
//     }
//     // --- End Final Validation ---

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("name", name.trim());
//     formData.append("email", email); // Send processed email
//     formData.append("phone", phone); // Send processed phone
//     formData.append(
//       "subject",
//       `Job Application: Blockchain Developer - ${name.trim()}`
//     );
//     formData.append("message", whyJoin.trim());
//     formData.append("resume", resumeFile, resumeFile.name);

//     try {
//       // Replace '/api/ApplyNow' with your actual API endpoint if different
//       const response = await axios.post("/api/ApplyNow", formData);

//       if (response.data.success) {
//         toast.success("Application submitted successfully!");
//         // Reset form state completely
//         setName("");
//         setEmail("");
//         setPhone("");
//         setWhyJoin("");
//         handleRemoveFile(); // Clears file state and input ref
//       } else {
//         const errorMsg =
//           response.data.message ||
//           response.data.error ||
//           "Submission failed. Please try again.";
//         toast.error(errorMsg);
//       }
//     } catch (error: unknown) {
//       let errorMsg = "An unexpected error occurred. Please try again later.";
//       if (axios.isAxiosError(error)) {
//         console.error(
//           "Axios error details:",
//           error.response?.data || error.message
//         );
//         errorMsg =
//           error.response?.data?.message ||
//           error.response?.data?.error ||
//           error.message ||
//           errorMsg;
//       } else {
//         console.error("Non-Axios error:", error);
//       }
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- JSX ---
//   return (
//     <div className="w-full min-h-screen py-10 px-4 mt-20">
//       {/* Toaster positioned top-right */}
//       <Toaster position="top-right" reverseOrder={false} />

//       <div className="max-w-[1500px] mx-auto p-8 relative">
//         {/* Back Button */}
//         <button
//           onClick={() => router.back()}
//           className="top-4 mb-4   left-4 text-secondary hover:text-black disabled:opacity-50 transition-opacity"
//           disabled={loading} // Disable when submitting
//         >
//           ← Back
//         </button>

//         {/* Job Title */}
//         <div className="w-full flex justify-center mb-16 ">
//   <h1 className="text-3xl md:text-2xl sm:text-xl font-extrabold text-black border-2 border-theme px-8 py-3 rounded-full text-center">
//     Blockchain Developer
//   </h1>
// </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Column: Job Description */}
//           <div className="lg:col-span-2 lg:pr-8 lg:border-r border-theme">
//             <h2 className="text-xl font-extrabold mb-4">About The Job</h2>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//               Join our innovative team as a Blockchain Developer. You will be
//               responsible for designing, implementing, and supporting
//               blockchain-based networks. Develop smart contracts, work with
//               various consensus protocols, and contribute to the architecture of
//               decentralized applications. We are looking for passionate
//               individuals eager to shape the future of technology.
//               <br /> <br />
//               Strong understanding of blockchain principles, cryptography, and
//               data structures is essential. Experience with languages like
//               Solidity, Go, or Rust, and familiarity with frameworks like
//               Hyperledger Fabric or Ethereum platforms are highly desirable.
//             </p>
//             <h2 className="text-xl font-extrabold  mb-8">Eligibility Criteria</h2>
//             <ul className="space-y-4 mb-8 list-none pl-0">
//               {[
//                 "Bachelor's degree in Computer Science, Engineering, or related field.",
//                 "Proven experience as a Blockchain Developer.",
//                 "Experience with smart contract development and deployment (e.g., Solidity).",
//                 "Familiarity with peer-to-peer networking.",
//                 "Understanding of cryptography and cryptographic protocols.",
//                 "Experience with version control systems like Git.",
//                 "Ability to work independently and collaboratively in a fast-paced environment.",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <span className="mt-1 flex-shrink-0 bg-theme h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">
//                     ✓
//                   </span>
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//             <h2 className="text-xl font-extrabold  mb-8">Perks & Conditions</h2>
//             <ul className="space-y-4 list-none pl-0">
//               {[
//                 "Competitive salary and performance bonuses.",
//                 "Comprehensive health, dental, and vision insurance.",
//                 "Opportunity to work on cutting-edge blockchain projects.",
//                 "Flexible working hours and remote work options.",
//                 "Generous paid time off and holidays.",
//                 "Professional development and learning opportunities.",
//                 "Collaborative and supportive team culture.",
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <span className="mt-1 flex-shrink-0 bg-theme h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">
//                     ✓
//                   </span>
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right Column: Image and Form */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Image */}
//             <img
//               src="/bg22.png" // Ensure this path is correct
//               alt="Blockchain Visual"
//               className="w-full h-auto rounded-lg object-cover shadow-md"
//             />
//             {/* Application Form */}
//             <h2 className="text-xl font-extrabold ">Application Form</h2>
//             <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//               {/* Name Input */}
//               <div>
//                 <label
//                   htmlFor="blockchain-dev-name"
//                   className="block text-sm font-bold text-[#333333] mb-1"
//                 >
//                   Name<span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="blockchain-dev-name"
//                   type="text"
//                   placeholder="Enter your Name"
//                   className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
//                   value={name}
//                   onChange={handleInputChange}
//                   name="name"
//                   required
//                   disabled={loading}
//                   aria-required="true"
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label
//                   htmlFor="blockchain-dev-email"
//                   className="block text-sm font-bold text-[#333333 mb-1"
//                 >
//                   Email<span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="blockchain-dev-email"
//                   type="email"
//                   placeholder="Enter your E-mail"
//                   className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
//                   value={email}
//                   onChange={handleInputChange}
//                   onBlur={handleEmailBlur} // Validate email format on blur
//                   onKeyDown={(e) => e.key === " " && e.preventDefault()}
//                   name="email"
//                   required
//                   disabled={loading}
//                   aria-required="true"
//                   inputMode="email" // Hint for mobile keyboard
//                 />
//               </div>

//               {/* Phone Input */}
//               <div>
//                 <label
//                   htmlFor="blockchain-dev-phone"
//                   className="block text-sm font-bold text-[#333333 mb-1"
//                 >
//                   Phone Number<span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <input
//                   id="blockchain-dev-phone"
//                   type="tel" // Correct type for phone numbers
//                   placeholder="Enter your Contact Number" // Added hint
//                   className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
//                   value={phone} // Controlled component using processed state
//                   onChange={handleInputChange} // Handles digit filtering and length limit
//                   onBlur={handlePhoneBlur} // ** Validate length on blur **
//                   name="phone"
//                   required
//                   disabled={loading}
//                   aria-required="true"
//                   maxLength={10} // Visual max length, state handles actual limit
//                   inputMode="numeric" // Hint for mobile numeric keyboard
//                   onKeyDown={(e) => {
//                     // Prevent non-numeric keys effectively
//                     if (
//                       !/^[0-9]$/.test(e.key) && // Allow digits 0-9
//                       ![
//                         // Allow specific control keys
//                         "Backspace",
//                         "Delete",
//                         "ArrowLeft",
//                         "ArrowRight",
//                         "Tab",
//                         "Enter",
//                         "Home",
//                         "End",
//                       ].includes(e.key) &&
//                       !(e.metaKey || e.ctrlKey) // Allow Ctrl/Cmd combinations (like copy/paste)
//                     ) {
//                       e.preventDefault(); // Block other keys
//                     }
//                   }}
//                 />
//               </div>

//               {/* Resume Upload */}
//               <div className="w-full">
//                 <label className="block text-sm font-bold text-[#333333 mb-1">
//                  Resume Upload<span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <div
//                   className={`relative w-full border rounded-md p-6 flex items-center justify-center text-center transition duration-150 ease-in-out ${
//                     fileName
//                       ? "border-green-400 bg-green-50"
//                       : "border-gray-300 brd-theme"
//                   } ${
//                     loading
//                       ? "opacity-60 cursor-not-allowed bg-gray-100"
//                       : "cursor-pointer"
//                   }`}
//                   onClick={() => {
//                     if (!loading && !fileName) fileInputRef.current?.click();
//                   }}
//                   role="button"
//                   tabIndex={loading || fileName ? -1 : 0}
//                   onKeyDown={(e) => {
//                     if (
//                       !loading &&
//                       !fileName &&
//                       (e.key === "Enter" || e.key === " ")
//                     )
//                       fileInputRef.current?.click();
//                   }}
//                   aria-label={
//                     fileName
//                       ? `File uploaded: ${fileName}. Click button to remove.`
//                       : "Resume upload area. Click or press enter to upload."
//                   }
//                 >
//                   <input
//                     type="file"
//                     ref={fileInputRef}
//                     className="hidden"
//                     accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                     onChange={handleFileChange}
//                     disabled={loading}
//                     aria-required="true"
//                   />
//                   {fileName ? (
//                     <div className="flex flex-col sm:flex-row items-center justify-between w-full px-2 space-y-2 sm:space-y-0 sm:space-x-4">
//                       <p
//                         className="text-sm text-gray-700 truncate flex-grow"
//                         title={fileName}
//                       >
//                         {fileName}
//                       </p>
//                       <button
//                         type="button"
//                         onClick={handleRemoveFile}
//                         disabled={loading}
//                         className="flex-shrink-0 p-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
//                         aria-label={`Remove ${fileName}`}
//                       >
//                         <X className="h-4 w-4" />
//                       </button>
//                     </div>
//                   ) : (
//                     <div
//                       className="flex flex-col items-center space-y-1 text-gray-500"
//                       aria-hidden="true"
//                     >
//                       <Upload className="h-8 w-8 text-gray-400" />
//                       <p className="text-sm">Upload Your Resume Here</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Why Join Textarea */}
//               <div>
//                 <label
//                   htmlFor="blockchain-dev-whyjoin"
//                   className="block text-sm font-bold text-[#333333 mb-1"
//                 >
//                   Why do you want to join?
//                   <span className="text-red-500 ml-1">*</span>
//                 </label>
//                 <textarea
//                   id="blockchain-dev-whyjoin"
//                   placeholder="Write your answer here."
//                   rows={5}
//                   className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition resize-none"
//                   value={whyJoin}
//                   onChange={handleInputChange}
//                   name="whyJoin"
//                   required
//                   disabled={loading}
//                   aria-required="true"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full sm:w-1/2 mx-auto flex justify-center items-center bg-theme text-white font-semibold py-3 px-6 rounded-full hover:bg-theme/90 focus-ring-bg transition duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed" // Added hover
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Submitting...
//                   </>
//                 ) : (
//                   "Submit"
//                 )}
//               </button>
//             </form>
//                {showPopup && (
//         <ApplicationSubmittedPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
//       )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlockchainDeveloper;
"use client";

import React, { useState, useRef, FormEvent, FocusEvent } from "react";
import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import ApplicationSubmittedPopup from "@/app/components/ApplicationSubmittedPopup";

const BlockchainDeveloper = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: fieldName, value } = e.target;
    let processedValue = value;

    switch (fieldName) {
      case "name":
        processedValue = value.replace(/^\s+/, "").replace(/\s+/g, " ");
        setName(processedValue);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        processedValue = value.replace(/[^0-9]/g, "").substring(0, 10);
        setPhone(processedValue);
        break;
      case "whyJoin":
        // Replace two or more consecutive spaces/tabs with a single space.
        // This leaves newline characters (`\n`) untouched.
        processedValue = value.replace(/[ \t]{2,}/g, " ");
        setWhyJoin(processedValue);
        break;
      default:
        break;
    }
  };

  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const trimmedValue = value.trim();
    const finalEmailValue = trimmedValue.toLowerCase();

    console.log(`Validating email input on blur: '${trimmedValue}'`);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isRegexValid = emailRegex.test(trimmedValue);
    const isEmpty = trimmedValue === "";
    console.log(`Regex Test Result for '${trimmedValue}': ${isRegexValid}`);
    console.log(`Is Empty: ${isEmpty}`);

    setEmail(finalEmailValue);
    console.log(
      `Email field blurred. Processed value set in state: '${finalEmailValue}'`
    );

    if (!isEmpty && !isRegexValid) {
      console.error(`Email regex test failed for: '${trimmedValue}'`);
      toast.error(
        "Please enter a valid email address (e.g. example@domain.com)"
      );
    }
  };

  const handlePhoneBlur = (e: FocusEvent<HTMLInputElement>) => {
    console.log(`Validating phone input on blur: '${phone}'`);
    if (phone.length > 0 && phone.length !== 10) {
      console.error(`Phone number length is not 10: ${phone.length}`);
      toast.error("Phone number must be exactly 10 digits.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        toast.error(
          `File size exceeds the ${maxSize / (1024 * 1024)}MB limit.`
        );
        handleRemoveFile();
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Invalid file type. Please upload a PDF, DOC, or DOCX file."
        );
        handleRemoveFile();
        return;
      }
      setFileName(file.name);
      setResumeFile(file);
    }
  };

  const handleRemoveFile = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.stopPropagation();
    setFileName("");
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name.");
      document.getElementById("blockchain-dev-name")?.focus();
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      document.getElementById("blockchain-dev-email")?.focus();
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address format.");
      document.getElementById("blockchain-dev-email")?.focus();
      return;
    }

    if (!phone) {
      toast.error("Please enter your phone number.");
      document.getElementById("blockchain-dev-phone")?.focus();
      return;
    }
    if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      document.getElementById("blockchain-dev-phone")?.focus();
      return;
    }

    if (!whyJoin.trim()) {
      toast.error("Please explain why you want to join.");
      document.getElementById("blockchain-dev-whyjoin")?.focus();
      return;
    }
    if (!resumeFile) {
      toast.error("Please upload your resume.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append(
      "subject",
      `Job Application: Blockchain Developer - ${name.trim()}`
    );
    formData.append("message", whyJoin.trim());
    formData.append("resume", resumeFile, resumeFile.name);

    try {
      const response = await axios.post("/api/ApplyNow", formData);

      if (response.data.success) {
        // toast.success("Application submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setWhyJoin("");
        handleRemoveFile();
        setShowPopup(true);
      } else {
        const errorMsg =
          response.data.message ||
          response.data.error ||
          "Submission failed. Please try again.";
        toast.error(errorMsg);
      }
    } catch (error: unknown) {
      let errorMsg = "An unexpected error occurred. Please try again later.";
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error details:",
          error.response?.data || error.message
        );
        errorMsg =
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          errorMsg;
      } else {
        console.error("Non-Axios error:", error);
      }
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 lg:px-10 mt-20">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-[1500px] mx-auto  relative">
        <button
          onClick={() => router.back()}
          className="top-4 mb-4   left-4 text-secondary hover:text-black disabled:opacity-50 transition-opacity"
          disabled={loading}
        >
          ← Back
        </button>

        <div className="w-full flex justify-center mb-16 ">
          <h1 className="text-xl md:text-2xl sm:text-xl font-extrabold text-black border-2 border-theme px-8 py-3 rounded-full text-center">
            Blockchain Developer
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 lg:pr-8 lg:border-r border-theme">
            <h2 className="text-2xl font-extrabold mb-4">About The Job</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our innovative team as a Blockchain Developer. You will be
              responsible for designing, implementing, and supporting
              blockchain-based networks. Develop smart contracts, work with
              various consensus protocols, and contribute to the architecture of
              decentralized applications. We are looking for passionate
              individuals eager to shape the future of technology.
              <br /> <br />
              Strong understanding of blockchain principles, cryptography, and
              data structures is essential. Experience with languages like
              Solidity, Go, or Rust, and familiarity with frameworks like
              Hyperledger Fabric or Ethereum platforms are highly desirable.
            </p>
            <h2 className="text-2xl font-extrabold  mb-8">
              Eligibility Criteria
            </h2>
            <ul className="space-y-4 mb-8 list-none pl-0">
              {[
                "Bachelor's degree in Computer Science, Engineering, or related field.",
                "Proven experience as a Blockchain Developer.",
                "Experience with smart contract development and deployment (e.g., Solidity).",
                "Familiarity with peer-to-peer networking.",
                "Understanding of cryptography and cryptographic protocols.",
                "Experience with version control systems like Git.",
                "Ability to work independently and collaboratively in a fast-paced environment.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 bg-theme h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-extrabold  mb-8">
              Perks & Conditions
            </h2>
            <ul className="space-y-4 list-none pl-0">
              {[
                "Competitive salary and performance bonuses.",
                "Comprehensive health, dental, and vision insurance.",
                "Opportunity to work on cutting-edge blockchain projects.",
                "Flexible working hours and remote work options.",
                "Generous paid time off and holidays.",
                "Professional development and learning opportunities.",
                "Collaborative and supportive team culture.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 bg-theme h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <img
              src="/bg22.png"
              alt="Blockchain Visual"
              className="w-full h-auto rounded-lg object-cover "
              draggable="false"
            />
            <h2 className="text-2xl font-extrabold ">Application Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="blockchain-dev-name"
                  className="block text-[18px] font-bold text-[#333333] mb-1"
                >
                  Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-name"
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
                  value={name}
                  onChange={handleInputChange}
                  name="name"
                  required
                  disabled={loading}
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="blockchain-dev-email"
                  className="block text-[18px] font-bold text-[#333333] mb-1"
                >
                  Email<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-email"
                  type="email"
                  placeholder="Enter your E-mail"
                  className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
                  value={email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  onKeyDown={(e) => e.key === " " && e.preventDefault()}
                  name="email"
                  required
                  disabled={loading}
                  aria-required="true"
                  inputMode="email"
                />
              </div>

              <div>
                <label
                  htmlFor="blockchain-dev-phone"
                  className="block text-[18px] font-bold text-[#333333 mb-1"
                >
                  Phone Number<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-phone"
                  type="tel"
                  placeholder="Enter your Contact Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition"
                  value={phone}
                  onChange={handleInputChange}
                  onBlur={handlePhoneBlur}
                  name="phone"
                  required
                  disabled={loading}
                  aria-required="true"
                  maxLength={10}
                  inputMode="numeric"
                  onKeyDown={(e) => {
                    if (
                      !/^[0-9]$/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        "Enter",
                        "Home",
                        "End",
                      ].includes(e.key) &&
                      !(e.metaKey || e.ctrlKey)
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>

              <div className="w-full">
                <label className="block text-[18px] font-bold text-[#333333 mb-1">
                  Resume Upload<span className="text-red-500 ml-1">*</span>
                </label>
                <div
                  className={`relative w-full border rounded-md p-6 flex items-center justify-center text-center transition duration-150 ease-in-out ${
                    fileName
                      ? "border-green-400 bg-green-50"
                      : "border-gray-300 brd-theme"
                  } ${
                    loading
                      ? "opacity-60 cursor-not-allowed bg-gray-100"
                      : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!loading && !fileName) fileInputRef.current?.click();
                  }}
                  role="button"
                  tabIndex={loading || fileName ? -1 : 0}
                  onKeyDown={(e) => {
                    if (
                      !loading &&
                      !fileName &&
                      (e.key === "Enter" || e.key === " ")
                    )
                      fileInputRef.current?.click();
                  }}
                  aria-label={
                    fileName
                      ? `File uploaded: ${fileName}. Click button to remove.`
                      : "Resume upload area. Click or press enter to upload."
                  }
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    disabled={loading}
                    aria-required="true"
                  />
                  {fileName ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-2 space-y-2 sm:space-y-0 sm:space-x-4">
                      <p
                        className="text-[18px]text-gray-700 truncate flex-grow"
                        title={fileName}
                      >
                        {fileName}
                      </p>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        disabled={loading}
                        className="flex-shrink-0 p-1.5 rounded-full bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        aria-label={`Remove ${fileName}`}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col items-center space-y-1 text-gray-500"
                      aria-hidden="true"
                    >
                      <Upload className="h-8 w-8 text-gray-400" />
                      <p className="text-[18px]">Upload Your Resume Here</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="blockchain-dev-whyjoin"
                  className="block text-[18px] font-bold text-[#333333 mb-1"
                >
                  Why do you want to join?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  id="blockchain-dev-whyjoin"
                  placeholder="Write your answer here."
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus-ring-bg focus:border-transparent disabled:opacity-60 disabled:bg-gray-100 disabled:cursor-not-allowed focus:placeholder-transparent transition resize-none"
                  value={whyJoin}
                  onChange={handleInputChange}
                  name="whyJoin"
                  required
                  disabled={loading}
                  aria-required="true"
                ></textarea>
              </div>
              {/* at 1044 i changed bg-theme to bg-[#F97F07] */}
              <button
                type="submit"
                className="w-full cursor-pointer sm:w-1/2 mx-auto flex justify-center items-center bg-[#ecad6e] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#F97F07] focus-ring-bg transition duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
            {showPopup && (
              <ApplicationSubmittedPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDeveloper;
