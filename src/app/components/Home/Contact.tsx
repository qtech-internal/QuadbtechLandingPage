"use client";
import { useState } from "react";
import { Send, User, Mail, Phone, FileText, MessageCircle } from "lucide-react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post<{ success: boolean }>("/api/sendEmail", formData);

      if (response.data.success) {
        alert("✅ Email Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("❌ Email Sending Failed. Please try again.");
      }
    } catch (error) {
      alert("❌ Email Sending Failed. Please try again later.");
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative max-w-6xl min-h-screen mx-auto px-6 py-20 sm:py-24 md:py-32 mt-10">
      {/* Contact Heading */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black text-center leading-tight">
        CONTACT <span className="text-orange-500">US</span>
      </h1>

      {/* QB Tower Card - Redesigned */}
      <div className="mt-6 flex justify-center">
        <div className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 px-6 py-5 rounded-lg max-w-lg text-center transition transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-lg font-bold text-orange-600 uppercase">
            QB Tower
          </h2>
          <p className="text-gray-700 text-sm">
            15313 O&apos;Connell Park, Belleville 48990
          </p>
          <div className="mt-2 flex items-center justify-center gap-2 text-gray-800 text-sm">
            <Mail className="w-5 h-5 text-orange-500" />
            <span>sales@quadbtech.com</span>
          </div>
          <div className="mt-1 flex items-center justify-center gap-2 text-gray-800 text-sm">
            <Phone className="w-5 h-5 text-orange-500" />
            <span>+91 8360543857</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-14 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-xl p-6 md:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "name",
              icon: User,
              placeholder: "Your Name",
              type: "text",
            },
            {
              name: "email",
              icon: Mail,
              placeholder: "Your Email",
              type: "email",
            },
            {
              name: "phone",
              icon: Phone,
              placeholder: "Your Phone",
              type: "tel",
            },
            {
              name: "subject",
              icon: FileText,
              placeholder: "Subject",
              type: "text",
            },
          ].map((field, index) => (
            <div className="relative" key={index}>
              <field.icon className="absolute left-3 top-3 text-gray-500" />
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="p-3 pl-10 rounded-md bg-orange-50 placeholder-gray-700 text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none transition"
                required
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative sm:col-span-2">
            <MessageCircle className="absolute left-3 top-3 text-gray-500" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="p-3 pl-10 rounded-md bg-orange-50 placeholder-gray-700 text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none resize-none transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`flex flex-col justify-center items-center text-white rounded-md w-full py-6 ${
              loading
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 transition"
            }`}
            disabled={loading}
          >
            {loading ? (
              <span className="text-base font-medium">Sending...</span>
            ) : (
              <>
                <Send className="w-6 h-6 mb-1" />
                <span className="text-base font-medium">Send</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
