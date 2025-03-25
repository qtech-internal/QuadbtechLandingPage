"use client";
import { useState } from "react";
import { Send, User, Mail, Phone, FileText, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

export default function ContactUs() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  const [formData, setFormData] = useState<{
    [key in "name" | "email" | "phone" | "subject" | "message"]: string;
  }>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return;
    }

    if (isRateLimited) {
      toast.error("Please wait before sending another message.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/sendEmail", {
        ...formData,
        recaptchaToken,
      });

      if (response.data.success) {
        toast.success("Email Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Apply client-side rate limiter (Disable for 60 seconds)
        setIsRateLimited(true);
        setTimeout(() => setIsRateLimited(false), 60000);
      } else {
        toast.error("Email Sending Failed. Please try again.");
      }
    } catch (error) {
      toast.error("Email Sending Failed. Please try again later.");
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative max-w-[1500px] mx-auto px-4 py-20 sm:py-24 md:py-32 mt-1 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-black text-black text-center leading-none relative z-0 select-none">
        CONTACT <span className="ml-2 text-orange-500">US</span>
      </h1>

      <div className="absolute top-[90px] sm:top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-3 rounded-md w-[260px] sm:w-[280px] text-xs leading-5 shadow-lg z-10 text-center">
        <p className="font-bold">QB TOWER</p>
        <p>15313 O&apos;Connell Park,</p>
        <p>Belleville 48990</p>
        <p>sales@quadbtech.com</p>
        <p>+91 8360543857</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-40 sm:mt-44 md:mt-48 grid grid-cols-1 gap-6"
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
                className="p-3 pl-10 rounded-md bg-orange-50 placeholder-black text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none transition"
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
              className="p-3 pl-10 rounded-md bg-orange-50 placeholder-black text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none resize-none transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`flex flex-col justify-center items-center text-white rounded-md w-full py-6 ${
              loading || isRateLimited
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 transition"
            }`}
            disabled={loading || isRateLimited}
          >
            {loading ? (
              <span className="text-base font-medium">Sending...</span>
            ) : isRateLimited ? (
              <span className="text-base font-medium">Wait...</span>
            ) : (
              <>
                <Send className="w-6 h-6 mb-1" />
                <span className="text-base font-medium">Send</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-center mt-4">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setRecaptchaToken}
        />
      </div>
    </div>
  );
}
