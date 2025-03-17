'use client';
import React from 'react';
import { useState,useRef } from 'react';
import { Upload, X } from 'lucide-react';
const BlockchainDeveloper = ({onBack}) => {
  const [fileName, setFileName] = useState(""); // To store uploaded file name
  const fileInputRef = useRef(null); // To reference the input element

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Handle file remove
  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFileName(""); 
    fileInputRef.current.value = ""; 
  };
  return (
    <div className="w-full min-h-screen py-10 px-4 mt-20">
      <div className="max-w-[1500px] mx-auto  p-8  relative">

        {/* Back Button */}
              <button  onClick={onBack} 
                  className="absolute top-4 left-4 text-gray-600 hover:text-black">&larr; Back</button>

     
        <div className="w-full flex justify-center mb-16">
          <h1 className="text-3xl font-semibold text-black border-2 border-orange-500 px-8 py-3 rounded-full">
            Blockchain Developer
          </h1>
        </div>

      
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left  */}
         
          <div className="lg:col-span-2 lg:pr-8 lg:border-r lg:border-orange-200">
            
            <h2 className="text-xl font-semibold mb-4">About The Job</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Aliquet nunc. Aliquam vel scelerisque massa. Suspendisse faucibus interdum posuere. Mauris quis orci nec magna aliquet
              imperdiet. Maecenas euismod, odio a accumsan sollicitudin, lacus turpis vestibulum nisi,
              et  <br />porttitor odio metus nec ex.
              Sed suscipit malesuada faucibus. Pellentesque eget bibendum arcu. Quisque posuere eu erat quis ultricies. Mauris luctus
              arcu eu malesuada feugiat. Nullam vel ultrices neque. Nulla in lectus metus. Pellentesque facilisis libero vel odio
              efficitur, sit amet rhoncus lacus tincidunt.
            </p>

            {/* Eligibility */}
            <h2 className="text-xl font-semibold mb-8">Eligibility Criteria</h2>
            <ul className="space-y-8 mb-8">
              {[
                'Eger tincidunt dictum. Morbi faucibus venenatis egestas imperdiet elit.',
                'Nuga a dictum varius elit.',
                'Vivamus faucibus nulla id mi lacinia, vitae scelerisque massa scelerisque.',
                'Aliquam ornare felis vel libero aliquet, id tincidunt nisi tincidunt.',
                'Mauris feugiat orci nec fermentum vulputate. Maecenas aliquam cursus arcu in varius.',
                'Pellentesque tincidunt metus in fringilla imperdiet. Vivamus vehicula nisl sed nisi. Suspendisse sit amet ligula ornare.',
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  
                  <span className="bg-orange-500 h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">&#10003;</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Perk / Conditions */}
            <h2 className="text-xl font-semibold mb-8">Perk & Conditions</h2>
            <ul className="space-y-8">
              {[
                'Eger tincidunt dictum. Morbi faucibus venenatis egestas imperdiet elit.',
                'Nuga a dictum varius elit.',
                'Vivamus faucibus nulla id mi lacinia, vitae scelerisque massa scelerisque.',
                'Aliquam ornare felis vel libero aliquet, id tincidunt nisi tincidunt.',
                'Mauris feugiat orci nec fermentum vulputate. Maecenas aliquam cursus arcu in varius.',
                'Pellentesque tincidunt metus in fringilla imperdiet. Vivamus vehicula nisl sed nisi. Suspendisse sit amet ligula ornare.',
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
               
                  <span className="bg-orange-500 h-5 w-5 flex items-center justify-center text-xs text-white rounded-sm">&#10003;</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          {/* <div className="lg:pl-8 space-y-6"> */}
          <div className="lg:col-span-1  space-y-6">
            {/* Img */}
            <img
              src="bg22.png"
              alt="Blockchain Visual"
              className="w-full h-auto rounded-lg object-cover"
            />

            {/*Form */}
            <h2 className="text-xl font-semibold">Application Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name<span className="text-red-500 ml-1">*</span></label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email<span className="text-red-500 ml-1">*</span></label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone Number<span className="text-red-500 ml-1">*</span></label>
                <input
                  type="tel"
                  placeholder="Enter your Contact Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
                />
              </div>
        
     
  <div className="w-full">
      <label className="block text-gray-700 mb-1 font-semibold">
        Resume upload<span className="text-red-500 ml-1">*</span>
      </label>


      <div
        className={`relative w-full border rounded-md p-6 flex items-center justify-center transition ${
          fileName ? "border-green-400" : "border-gray-300 hover:border-orange-400"
        }`}
      
        onClick={() => {
          if (!fileName) fileInputRef.current.click();
        }}
      >
        {/* File Input - hidden */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
                  />
                  {fileName ? (
          <div className="flex items-center space-x-4">
            <p className="text-gray-700 truncate max-w-[200px]">{fileName}</p>
            <button
              type="button"
              onClick={handleRemoveFile} // Remove 
              className="p-1 rounded-full bg-red-100 hover:bg-red-200"
            >
              <X className="h-4 w-4 text-red-500" />
            </button>
          </div>
        ) : (
          // Default uploading file
          <div className="flex flex-col items-center space-y-2">
            <Upload className="h-8 w-8 text-gray-400" />
            <p className="text-gray-400">Upload Your Resume Here</p>
          </div>
        )}
      </div>
    </div>
              <div>
                <label className="block text-gray-700 mb-1">Why do you want to join?<span className="text-red-500 ml-1">*</span></label>
                <textarea
                  placeholder="Write your answer"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-400"
                ></textarea>
              </div>
              <button
  type="submit"
  className="w-1/2 mx-auto flex justify-center items-center bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600 transition-all"
>
  Submit
</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlockchainDeveloper;