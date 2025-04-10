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

  // General handler to update state for all inputs on change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let processedValue = value;
    if (name === "phone") {
      processedValue = value.replace(/[^0-9]/g, "").substring(0, 10);
    } else if (name !== "email") {
      processedValue = value.replace(/^\s+/, "").replace(/\s+/g, " ");
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
  };
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.toLowerCase() === "email") {
      const trimmedValue = value.trim();
      console.log(`Validating email input on blur: '${trimmedValue}'`);
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      const isRegexValid = emailRegex.test(trimmedValue);
      const isEmpty = trimmedValue === "";

      console.log(`Regex Test Result for '${trimmedValue}': ${isRegexValid}`);
      console.log(`Is Empty: ${isEmpty}`);
      const finalEmailValue = trimmedValue.toLowerCase();
      setFormData((prev) => ({ ...prev, [name]: finalEmailValue }));
      console.log(
        `Email field blurred. Processed value set in state: '${finalEmailValue}'`
      );
      if (!isEmpty && !isRegexValid) {
        console.error(`Regex test failed for: '${trimmedValue}'`);
        toast.error(
          "Please enter a valid email address (e.g. example@domain.com)"
        );
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToCheck = formData.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    for (const key in formData) {
      if (formData[key as keyof typeof formData].trim() === "") {
        toast.error(`Please fill out the ${key} field.`);
        // Optional: focus the first empty field
        const inputElement = document.querySelector(
          `[name="${key}"]`
        ) as HTMLElement;
        inputElement?.focus();
        return;
      }
    }
    if (!emailRegex.test(emailToCheck)) {
      toast.error("Please enter a valid email address before submitting.");
      (document.querySelector('input[name="email"]') as HTMLInputElement)?.focus();
      return;
    }

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
      // Use the processed values directly from formData state
      const response = await axios.post("/api/sendEmail", {
        ...formData,
        recaptchaToken,
      });

      if (response.data.success) {
        toast.success("Email Sent Successfully!");
        setFormData({
          // Reset form
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setRecaptchaToken(null);
        setIsRateLimited(true);
        setTimeout(() => setIsRateLimited(false), 60000); // 60 seconds
      } else {
        // Use backend message if available
        toast.error(
          response.data.message || "Email Sending Failed. Please try again."
        );
      }
    } catch (error: any) {
      // Use backend error message if available in response data
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred. Please try again later.";
      toast.error(errorMessage);
      console.error("Error during form submission:", error);
    } finally {
      setLoading(false);
    }
  };

  // --- Component JSX ---

  return (
    <div
      id="contact"
      ref={ref}
      className={`relative max-w-[1500px] mx-auto px-4 py-20 sm:py-24 md:py-32 mt-1 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Title */}
      <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-semibold text-secondary text-center leading-none relative z-0 select-none">
        CONTACT <span className="ml-2 ">US</span>
      </h1>

      {/* Address Box */}
      <div className="absolute top-[90px] sm:top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 bg-theme text-theme px-4 py-3 rounded-md w-[260px] sm:w-[280px] text-xs leading-5 shadow-lg z-10 text-center">
        <p className="font-bold">QB TOWER</p>
        <p>15313 O&apos;Connell Park,</p>
        <p>Belleville 48990</p>
        <p>sales@quadbtech.com</p>
        <p>+91 8360543857</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-40 sm:mt-44 md:mt-48 grid grid-cols-1 gap-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "name", placeholder: "Name", type: "text" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "phone", placeholder: "Phone No.", type: "tel" },
            { name: "subject", placeholder: "Subject", type: "text" },
          ].map((field) => (
            <div className="relative" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                onBlur={field.name === "email" ? handleEmailBlur : undefined}
                onKeyDown={(e) => {
                  if (field.type === "email" && e.key === " ") {
                    e.preventDefault();
                  }
                  if (
                    field.type === "tel" &&
                    !/^[0-9]$/.test(e.key) &&
                    ![
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                      "Enter",
                    ].includes(e.key)
                  ) {
                    if (!(e.metaKey || e.ctrlKey)) {
                      e.preventDefault();
                    }
                  }
                }}
                placeholder={field.placeholder}
                className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus-ring-bg outline-none transition focus:placeholder-transparent"
                required
                maxLength={field.name === "phone" ? 10 : undefined}
              />
            </div>
          ))}
        </div>

        {/* Message Textarea and Submit Button Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Message Textarea */}
          <div className="relative sm:col-span-2">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              // Optional: Add onBlur for trimming/processing if needed
              onBlur={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  message: e.target.value.trim(),
                }))
              }
              placeholder="Message"
              rows={4}
              className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus-ring-bg outline-none resize-none transition focus:placeholder-transparent"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`flex flex-col justify-center items-center text-white rounded-2xl w-full py-6 transition ${
              loading || isRateLimited
                ? "bg-theme cursor-not-allowed" // Use a clearer disabled style
                : "bg-theme" // Example hover effect
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

      {/* ReCAPTCHA */}
      <div className="flex justify-center mt-8">
        {" "}
        {/* Increased margin-top */}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setRecaptchaToken(token)}
          onErrored={() => {
            toast.error("reCAPTCHA failed. Please try again.");
            setRecaptchaToken(null);
          }}
          onExpired={() => {
            toast.error("reCAPTCHA expired. Please verify again.");
            setRecaptchaToken(null);
          }}
        />
      </div>
    </div>
  );
}
