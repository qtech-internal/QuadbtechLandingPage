"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

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
    const { name, value } = e.target;
    let processedValue = value;
    if (name.toLowerCase() === "email") {
      processedValue = value.replace(/\s+/g, "").toLowerCase();
    } else if (name === "phone") {
      processedValue = value.replace(/[^0-9+\-]/g, "").substring(0, 15);
    } else {
      processedValue = value.trimStart().replace(/\s+/g, " ");
    }
    setFormData((prev) => ({ ...prev, [name]: processedValue }));
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
      id="contact"
      ref={ref}
      className={`relative max-w-[1500px] mx-auto px-4 py-20 sm:py-24 md:py-32 mt-1 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-semibold text-secondary text-center leading-none relative z-0 select-none">
        CONTACT <span className="ml-2 ">US</span>
      </h1>

      <div className="absolute top-[90px] sm:top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 bg-theme text-theme px-4 py-3 rounded-md w-[260px] sm:w-[280px] text-xs leading-5 shadow-lg z-10 text-center">
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
              placeholder: "Name",
              type: "text",
            },
            {
              name: "email",
              placeholder: "Email",
              type: "email",
            },
            {
              name: "phone",
              placeholder: "Phone No.",
              type: "tel",
            },
            {
              name: "subject",
              placeholder: "Subject",
              type: "text",
            },
          ].map((field, index) => (
            <div className="relative" key={index}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (field.type === "email" && e.key === " ") {
                    e.preventDefault();
                  }
                }}
                placeholder={field.placeholder}
                className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none transition focus:placeholder-transparent"
                required
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative sm:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus:ring-2 focus:ring-orange-500 outline-none resize-none transition focus:placeholder-transparent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`flex flex-col justify-center items-center text-white rounded-2xl w-full py-6 ${
              loading || isRateLimited
                ? "bg-theme cursor-not-allowed"
                : "bg-theme hover:div-bg transition"
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