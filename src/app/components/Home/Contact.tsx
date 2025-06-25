"use client";
import { useState, useRef } from "react"; // Added useRef for potential ReCAPTCHA reset
import { useInView } from "react-intersection-observer";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import ThankYouPopup from "../ThankYouPopup";


export default function ContactUs() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const recaptchaRef = useRef<ReCAPTCHA>(null); // Ref for ReCAPTCHA
   const [showSuccessPopup, setShowSuccessPopup] = useState(false); 

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
      // Keep only digits and limit to 10 characters maximum during input
      processedValue = value.replace(/[^0-9]/g, "").substring(0, 10);
    } else if (name !== "email") {
      // Trim leading space and replace multiple spaces with single for other fields
      processedValue = value.replace(/^\s+/, "").replace(/\s+/g, " ");
    }
    // Note: Email trimming/lowercasing is handled on blur for better UX

    setFormData((prev) => ({ ...prev, [name]: processedValue }));
  };

  // Handler for email blur validation and processing
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Process email only on blur: trim and lowercase
    const trimmedValue = value.trim();
    const finalEmailValue = trimmedValue.toLowerCase();
    setFormData((prev) => ({ ...prev, [name]: finalEmailValue }));

    console.log(`Validating email input on blur: '${finalEmailValue}'`);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isRegexValid = emailRegex.test(finalEmailValue);
    const isEmpty = finalEmailValue === "";

    console.log(`Regex Test Result for '${finalEmailValue}': ${isRegexValid}`);
    console.log(`Is Empty: ${isEmpty}`);

    // Show error only if not empty and invalid format
    if (!isEmpty && !isRegexValid) {
      console.error(`Regex test failed for: '${finalEmailValue}'`);
      toast.error(
        "Please enter a valid email address (e.g. example@domain.com)"
      );
    }
  };

  // Optional: Handler for phone blur validation feedback
  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const phoneValue = formData.phone; // Use the already processed value from state
    // console.log(`Validating phone input on blur: '${phoneValue}'`);

    // Only show error if the field is not empty AND has the wrong length (not exactly 10)
    if (phoneValue.length > 0 && phoneValue.length !== 10) {
      // console.error(`Phone number length is not 10: ${phoneValue.length}`);
      toast.error("Phone number must be exactly 10 digits.");
    }
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Pre-submission Validation ---

    // 1. Check for empty fields (Trim relevant fields before checking)
    for (const key in formData) {
      const fieldKey = key as keyof typeof formData;
      let valueToCheck = formData[fieldKey];

      // Trim fields that allow spaces before checking if they are empty
      if (
        fieldKey === "name" ||
        fieldKey === "subject" ||
        fieldKey === "message"
      ) {
        valueToCheck = valueToCheck.trim();
      }

      if (valueToCheck === "") {
        toast.error(`Please fill out the ${key} field.`);
        const inputElement = document.querySelector(
          `[name="${key}"]`
        ) as HTMLElement;
        inputElement?.focus();
        return; // Stop submission
      }
    }

    // 2. Validate Email Format (using the already processed state value)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address before submitting.");
      (
        document.querySelector('input[name="email"]') as HTMLInputElement
      )?.focus();
      return; // Stop submission
    }

    // 3. Validate Phone Number Length (MUST be exactly 10 digits)
    if (formData.phone.length !== 10) {
      // Checks for < 10 and > 10 (though >10 is prevented by handleChange)
      toast.error("Phone number must be exactly 10 digits.");
      (
        document.querySelector('input[name="phone"]') as HTMLInputElement
      )?.focus();
      return; // Stop submission
    }

    // 4. Check reCAPTCHA token presence
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return; // Stop submission
    }

    // 5. Check Rate Limiting status
    if (isRateLimited) {
      toast.error("Please wait before sending another message.");
      return; // Stop submission
    }

    // --- Submission Logic ---
    setLoading(true);
    try {
      const response = await axios.post("/api/sendEmail", {
        ...formData, // Send the processed data from state
        recaptchaToken,
      });

      if (response.data.success) {
         setShowSuccessPopup(true);
        // toast.success("Email Sent Successfully!");
        setFormData({
          // Reset form fields
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        recaptchaRef.current?.reset(); // Reset ReCAPTCHA widget
        setRecaptchaToken(null); // Clear token state
        setIsRateLimited(true); // Enable rate limiting
        setTimeout(() => setIsRateLimited(false), 60000); // Disable rate limiting after 60 seconds
      } else {
        // Show error from backend response if available, otherwise generic message
        toast.error(
          response.data.message || "Email Sending Failed. Please try again."
        );
        recaptchaRef.current?.reset(); // Also reset ReCAPTCHA on backend failure
        setRecaptchaToken(null);
      }
    } catch (error: any) {
      // Handle network errors or errors thrown by the backend
      const errorMessage =
        error.response?.data?.message || // Use backend error message if present
        "An error occurred. Please try again later.";
      toast.error(errorMessage);
      console.error("Error during form submission:", error);
      recaptchaRef.current?.reset(); // Reset ReCAPTCHA on catch block error
      setRecaptchaToken(null);
    } finally {
      setLoading(false);
       setShowSuccessPopup(true);// Ensure loading state is turned off
    }
  };

  // --- Component JSX ---
  return (
    <div
      id="contact"
      ref={ref}
      className={`relative max-w-[1500px]  mx-auto px-4 py-20 sm:py-24 md:py-32 mt-1 transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Title */}
      <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-semibold text-secondary text-center leading-none relative z-0 select-none">
        CONTACT <span className="ml-2 ">US</span>
      </h1>

      {/* Address Box */}
      <div className="absolute top-[120px]  sm:top-[100px] md:top-[140px] left-1/2 transform -translate-x-1/2 bg-theme text-theme px-4 py-3 rounded-2xl w-[260px] sm:w-[280px] text-xs leading-5 shadow-lg z-10 text-center">
        <p className="font-bold">QB TOWER</p>
        <p>15313 O&apos;Connell Park,</p>
        <p>Belleville 48990</p>
        <p>sales@quadbtech.com</p>
        <p>+91 8360543857</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate // Disable browser's native validation to rely on custom logic
        className="mt-40 sm:mt-44 md:mt-48 grid grid-cols-1 gap-6 lg:translate-y-[-90px]"
      >
        {/* Input Fields Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "name", placeholder: "Name", type: "text" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "phone", placeholder: "Phone No.", type: "tel" }, // Use tel type
            { name: "subject", placeholder: "Subject", type: "text" },
          ].map((field) => (
            <div className="relative" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                // Assign specific blur handlers
                onBlur={
                  field.name === "email"
                    ? handleEmailBlur
                    : field.name === "phone"
                      ? handlePhoneBlur
                      : undefined
                }
                onKeyDown={(e) => {
                  // Prevent space in email input
                  if (field.type === "email" && e.key === " ") {
                    e.preventDefault();
                  }
                  // Allow only digits and specific control keys for phone input
                  if (
                    field.type === "tel" &&
                    !/^[0-9]$/.test(e.key) && // Check if key is NOT a digit
                    ![
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                      "Enter",
                      "Home",
                      "End",
                    ].includes(e.key) && // Check if key is NOT an allowed control/navigation key
                    !(e.metaKey || e.ctrlKey) // Allow Cmd/Ctrl shortcuts (e.g., Cmd+A, Cmd+C)
                  ) {
                    e.preventDefault(); // Prevent the key press if it's not allowed
                  }
                }}
                // placeholder={field.placeholder}
                placeholder={
                  formData[field.name as keyof typeof formData] ? "" : field.placeholder
                }
                className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus-ring-bg outline-none transition "
                required // Indicates field is mandatory (useful for accessibility)
                // Set maxLength only for phone (already handled by substring, but good defense)
                maxLength={field.name === "phone" ? 10 : undefined}
                // Use appropriate input modes for better mobile keyboards
                inputMode={
                  field.type === "tel"
                    ? "numeric"
                    : field.type === "email"
                      ? "email"
                      : "text"
                }
              />
            </div>
          ))}
        </div>

        {/* Message Textarea and Submit Button Row */}
      {/* ✅ ReCAPTCHA - Visible only on SMALL SCREENS */}


{/* ✅ Message Textarea + Submit Button (Visible on all screens) */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
  {/* Message Textarea */}
  <div className="relative lg:col-span-2">
    <textarea
      name="message"
      id="message"
      value={formData.message}
      onChange={handleChange}
      onBlur={(e) =>
        setFormData((prev) => ({
          ...prev,
          message: e.target.value.trim(),
        }))
      }
      placeholder="Message"
      rows={4}
      className="p-3 rounded-2xl div-bg placeholder-black placeholder:font-bold text-sm w-full focus-ring-bg outline-none resize-none transition "
      required
    ></textarea>
  </div>
  <div className="flex justify-center  block md:hidden">
  <ReCAPTCHA
    ref={recaptchaRef}
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    onChange={(token) => setRecaptchaToken(token)}
    onErrored={() => {
      toast.error("reCAPTCHA failed. Please refresh and try again.");
      setRecaptchaToken(null);
    }}
    onExpired={() => {
      toast.error("reCAPTCHA expired. Please verify again.");
      setRecaptchaToken(null);
    }}
  />
</div>



  {/* Submit Button */}
  <button
    type="submit"
    className={`flex flex-col justify-center items-center text-white rounded-2xl w-full py-6 transition ${
      loading || isRateLimited
        ? "bg-theme cursor-not-allowed"
        : "bg-theme hover:bg-theme/90"
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

{/* ✅ ReCAPTCHA - Visible only on MEDIUM+ SCREENS */}
<div className="flex justify-center mt-8 hidden md:flex">
  <ReCAPTCHA
    ref={recaptchaRef}
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    onChange={(token) => setRecaptchaToken(token)}
    onErrored={() => {
      toast.error("reCAPTCHA failed. Please refresh and try again.");
      setRecaptchaToken(null);
    }}
    onExpired={() => {
      toast.error("reCAPTCHA expired. Please verify again.");
      setRecaptchaToken(null);
    }}
  />
</div>



      </form>
{showSuccessPopup && (
  <ThankYouPopup
    onClose={() => {
      setShowSuccessPopup(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      recaptchaRef.current?.reset(); // Optional: also reset CAPTCHA if desired
      setRecaptchaToken(null);
    }}
  />
)}

      {/* ReCAPTCHA */}
      {/* <div className="flex justify-center mt-8">
        <ReCAPTCHA
          ref={recaptchaRef} // Assign the ref
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} // Ensure this env variable is set
          onChange={(token) => setRecaptchaToken(token)} // Update token state on success
          onErrored={() => {
            // Handle ReCAPTCHA load/verification errors
            toast.error("reCAPTCHA failed. Please refresh and try again.");
            setRecaptchaToken(null);
          }}
          onExpired={() => {
            // Handle token expiration
            toast.error("reCAPTCHA expired. Please verify again.");
            setRecaptchaToken(null);
          }}
        />
      </div> */}
    </div>
  );
}
