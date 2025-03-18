
'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="relative max-w-[1500px] min-h-screen mx-auto px-4 py-20 sm:py-24 md:py-32 mt-10">
      {/* BACKGROUND TITLE */}
      <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-black text-black text-center leading-none relative z-0 select-none">
        CONTACT <span className="ml-2">US</span>
      </h1>

      {/* FLOATING ADDRESS CARD */}
      <div className="absolute top-[90px] sm:top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-3 rounded-md w-[260px] sm:w-[280px] text-xs leading-5 shadow-lg z-10 text-center">
        <p className="font-bold">QB TOWER</p>
        <p>15313 O&apos;Connell Park,</p>
        <p>Belleville 48990</p>
        <p>sales@quadbtech.com</p>
        <p>+91 8360543857</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mt-40 sm:mt-44 md:mt-48 grid grid-cols-1 gap-6">
        {/* Input Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-3 rounded-md bg-orange-50 placeholder-black text-sm w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 rounded-md bg-orange-50 placeholder-black text-sm w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No."
            className="p-3 rounded-md bg-orange-50 placeholder-black text-sm w-full"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 rounded-md bg-orange-50 placeholder-black text-sm w-full"
          />
        </div>

        {/* Message and Button */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Message box */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="p-3 rounded-md bg-orange-50 placeholder-black text-sm w-full resize-none sm:col-span-2"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex flex-col justify-center items-center bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all w-full py-6"
          >
            <Send className="w-6 h-6 mb-1" />
            <span className="text-base font-medium">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}

