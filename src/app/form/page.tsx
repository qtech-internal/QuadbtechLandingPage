"use client";

import React, { useState, useRef, FormEvent } from "react"; // Import FormEvent
import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios"; // Import axios
import { toast, Toaster } from "react-hot-toast"; // Import toast and Toaster

// Removed onBack prop as router.back() is used directly
const BlockchainDeveloper = () => {
  const router = useRouter();

  // --- State Management (Combined from both versions) ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const fileInputRef = useRef<HTMLInputElement>(null); // Typed the ref

  // --- File Handling Logic (With Validation) ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Typed event
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (e.g., 5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds the 5MB limit.");
        setFileName("");
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      // Validate file type (allow PDF, DOC, DOCX)
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error(
          "Invalid file type. Please upload a PDF, DOC, or DOCX file."
        );
        setFileName("");
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      // If validation passes
      setFileName(file.name);
      setResumeFile(file); // Store the file object
    }
  };

  // Handle file remove (Unchanged, but added type to event)
  const handleRemoveFile = (e?: React.MouseEvent<HTMLButtonElement>) => {
    // Optional event
    e?.stopPropagation();
    setFileName("");
    setResumeFile(null); // Clear file object state
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // --- Form Submission Logic ---
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validation
    if (!name || !email || !phone || !whyJoin || !resumeFile) {
      toast.error("Please fill in all required fields and upload your resume.");
      return;
    }
  
    setLoading(true);
    const loadingToastId = toast.loading("Submitting application...");
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("subject", `Job Application: Blockchain Developer - ${name}`);
    formData.append("message", whyJoin);
    formData.append("resume", resumeFile, resumeFile.name);
  
    try {
      const response = await axios.post("/api/ApplyNow", formData);
  
      toast.dismiss(loadingToastId);
  
      if (response.data.success) {
        toast.success("Application submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setWhyJoin("");
        handleRemoveFile(); // Clears file state and input ref
      } else {
        const errorMsg = response.data.error || "Submission failed. Please try again.";
        toast.error(errorMsg);
      }
    } catch (error: unknown) {
      toast.dismiss(loadingToastId);
  
      let errorMsg = "An unexpected error occurred. Please try again later.";
  
      if (axios.isAxiosError(error)) {
        errorMsg = error.response?.data?.error || errorMsg;
      }
  
      console.error("Form submission error:", error);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen py-10 px-4 mt-20">
      {/* Toaster added here, positioned top-right */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-[1500px] mx-auto p-8 relative">
        {/* Back Button - Added disabled state */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 text-secondary hover:text-black disabled:opacity-50"
          disabled={loading} // Disable when loading
        >
          ← Back
        </button>

        <div className="w-full flex justify-center mb-16">
          <h1 className="text-3xl font-semibold text-secondary border-2 border-theme px-8 py-3 rounded-full">
            Blockchain Developer
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left */}
          <div className="lg:col-span-2 lg:pr-8 lg:border-r border-theme">
            <h2 className="text-xl font-semibold mb-4">About The Job</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aliquet nunc. Aliquam vel scelerisque massa. Suspendisse faucibus
              interdum posuere. Mauris quis orci nec magna aliquet imperdiet.
              Maecenas euismod, odio a accumsan sollicitudin, lacus turpis
              vestibulum nisi, et <br />
              porttitor odio metus nec ex. Sed suscipit malesuada faucibus.
              Pellentesque eget bibendum arcu. Quisque posuere eu erat quis
              ultricies. Mauris luctus arcu eu malesuada feugiat. Nullam vel
              ultrices neque. Nulla in lectus metus. Pellentesque facilisis
              libero vel odio efficitur, sit amet rhoncus lacus tincidunt.
            </p>

            {/* Eligibility */}
            <h2 className="text-xl font-semibold mb-8">Eligibility Criteria</h2>
            <ul className="space-y-8 mb-8">
              {[
                "Eger tincidunt dictum. Morbi faucibus venenatis egestas imperdiet elit.",
                "Nuga a dictum varius elit.",
                "Vivamus faucibus nulla id mi lacinia, vitae scelerisque massa scelerisque.",
                "Aliquam ornare felis vel libero aliquet, id tincidunt nisi tincidunt.",
                "Mauris feugiat orci nec fermentum vulputate. Maecenas aliquam cursus arcu in varius.",
                "Pellentesque tincidunt metus in fringilla imperdiet. Vivamus vehicula nisl sed nisi. Suspendisse sit amet ligula ornare.",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="bg-theme h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Perk / Conditions */}
            <h2 className="text-xl font-semibold mb-8">Perk & Conditions</h2>
            <ul className="space-y-8">
              {[
                "Eger tincidunt dictum. Morbi faucibus venenatis egestas imperdiet elit.",
                "Nuga a dictum varius elit.",
                "Vivamus faucibus nulla id mi lacinia, vitae scelerisque massa scelerisque.",
                "Aliquam ornare felis vel libero aliquet, id tincidunt nisi tincidunt.",
                "Mauris feugiat orci nec fermentum vulputate. Maecenas aliquam cursus arcu in varius.",
                "Pellentesque tincidunt metus in fringilla imperdiet. Vivamus vehicula nisl sed nisi. Suspendisse sit amet ligula ornare.",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="bg-theme h-5 w-5 flex items-center justify-center text-xs text-theme rounded-sm">
                    {" "}
                    {/* Kept text-theme as per original */}✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Img */}
            <img
              src="bg22.png"
              alt="Blockchain Visual"
              className="w-full h-auto rounded-lg object-cover"
            />

            {/*Form - Added onSubmit */}
            <h2 className="text-xl font-semibold">Application Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label
                  htmlFor="blockchain-dev-name"
                  className="block text-gray-700 mb-1"
                >
                  {" "}
                  {/* Added htmlFor */}
                  Name<span className="text-p ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-name" // Added id
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 border border-theme rounded-md focus:outline-none focus:ring focus:ring-orange-400 disabled:opacity-60 disabled:bg-gray-100" // Added disabled style
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading} // Added disabled state
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="blockchain-dev-email"
                  className="block text-gray-700 mb-1"
                >
                  {" "}
                  {/* Added htmlFor */}
                  Email<span className="text-p ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-email" // Added id
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-3 border border-theme rounded-md focus:outline-none focus:ring focus:ring-orange-400 disabled:opacity-60 disabled:bg-gray-100" // Added disabled style
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading} // Added disabled state
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="blockchain-dev-phone"
                  className="block text-gray-700 mb-1"
                >
                  {" "}
                  {/* Added htmlFor */}
                  Phone Number<span className="text-p ml-1">*</span>
                </label>
                <input
                  id="blockchain-dev-phone" // Added id
                  type="tel"
                  placeholder="Enter your Contact Number"
                  className="w-full p-3 border border-theme rounded-md focus:outline-none focus:ring focus:ring-orange-400 disabled:opacity-60 disabled:bg-gray-100" // Added disabled style
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  disabled={loading} // Added disabled state
                  aria-required="true"
                />
              </div>

              <div className="w-full">
                <label className="block text-gray-700 mb-1 font-semibold">
                  Resume upload<span className="text-p ml-1">*</span>
                </label>
                <div
                  className={`relative w-full border rounded-md p-6 flex items-center justify-center transition ${
                    fileName
                      ? "border-green-400 bg-green-50" // Added bg hint
                      : "border-gray-300 hover:border-orange-400" // Used orange-400 like inputs
                  } ${loading ? "opacity-60 cursor-not-allowed bg-gray-100" : "cursor-pointer"}`} // Added disabled styles
                  onClick={() => {
                    // Only allow click if not loading
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
                  aria-label="Resume upload area"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" // More specific accepts
                    onChange={handleFileChange}
                    disabled={loading} // Added disabled state
                    aria-required="true"
                  />
                  {fileName ? (
                    <div className="flex items-center space-x-4">
                      <p
                        className="text-gray-700 truncate max-w-[200px]"
                        title={fileName}
                      >
                        {fileName}
                      </p>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        disabled={loading} // Added disabled state
                        className="p-1 rounded-full bg-red-100 hover:bg-red-200 disabled:opacity-50" // Added disabled style
                        aria-label={`Remove ${fileName}`}
                      >
                        <X className="h-4 w-4 text-p" /> {/* Kept text-p */}
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col items-center space-y-2 text-center"
                      aria-hidden="true"
                    >
                      <Upload className="h-8 w-8 text-gray-400" />
                      {/* Added more descriptive text */}
                      <p className="text-gray-400 text-sm">
                        Click to Upload Resume
                      </p>
                      <p className="text-gray-400 text-xs">
                        (PDF, DOC, DOCX | Max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="blockchain-dev-whyjoin"
                  className="block text-gray-700 mb-1"
                >
                  {" "}
                  {/* Added htmlFor */}
                  Why do you want to join?
                  <span className="text-p ml-1">*</span>
                </label>
                <textarea
                  id="blockchain-dev-whyjoin" // Added id
                  placeholder="Write your answer"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-400 disabled:opacity-60 disabled:bg-gray-100" // Added disabled style and border consistency
                  value={whyJoin}
                  onChange={(e) => setWhyJoin(e.target.value)}
                  required
                  disabled={loading} // Added disabled state
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-1/2 mx-auto flex justify-center items-center bg-theme text-theme font-semibold py-2 rounded-full hover:bg-orange-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed" // Added disabled styles
                disabled={loading} // Added disabled state
              >
                {loading ? (
                  <>
                    {/* Simple loading text or add spinner SVG */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDeveloper;
