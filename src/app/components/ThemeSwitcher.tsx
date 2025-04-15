// "use client";
// import { useEffect, useState } from "react";
// import { FaPalette } from "react-icons/fa"; 

// export default function ThemeSwitcher() {
//   const [theme, setTheme] = useState<string>("orange");
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "orange";
//     setTheme(savedTheme);
//     document.documentElement.className = savedTheme;
//   }, []);

//   const handleThemeChange = (newTheme: string) => {
//     setTheme(newTheme);
//     document.documentElement.className = newTheme;
//     localStorage.setItem("theme", newTheme);
//     setIsDropdownOpen(false);
//   };

//   const colors = [
//     { name: "orange", color: "text-orange-500" },
//     { name: "olive", color: "text-green-600" },
//     { name: "purple", color: "text-purple-500" },
//     { name: "pink", color: "text-pink-500" },
//     { name: "cyan", color: "text-cyan-500" },
//     { name: "brown", color: "text-brown-500" },
//     { name: "red", color: "text-red-500" },
//   ];

//   return (
//     <div className="flex flex-col items-center ">
//    <div className="relative">
//         <button
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           className="flex items-center gap-2 px-4 py-2  "
//         >
         
//           <FaPalette className={`w-8 h-8 ${colors.find(c => c.name === theme)?.color}`} />
      
//         </button>

      
//         {isDropdownOpen && (
//           <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-300 z-50 p-3 flex flex-wrap gap-3 justify-center">
//             {colors.map(({ name, color }) => (
//               <div
//                 key={name}
//                 className={`w-10 h-10 flex items-center justify-center cursor-pointer border-2 rounded-full ${
//                   theme === name ? "border-gray-300" : "border-transparent"
//                 } hover:border-gray-400 transition`}
//                 onClick={() => handleThemeChange(name)}
//               >
//                 <FaPalette className={`w-6 h-6 ${color}`} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

  

//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import { FaPalette } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("orange");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "orange";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
    setIsDropdownOpen(false);
  };

  const colors = [
    { name: "orange", color: "text-orange-500" },
    { name: "olive", color: "text-green-600" },
    { name: "purple", color: "text-purple-500" },
    { name: "pink", color: "text-pink-500" },
    { name: "cyan", color: "text-cyan-500" },
    { name: "brown", color: "text-brown-500" },
    { name: "red", color: "text-red-500" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2"
        >
          <FaPalette
            className={`w-8 h-8 ${colors.find((c) => c.name === theme)?.color}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md border border-gray-300 z-50 p-3 flex flex-wrap gap-3 justify-center">
            {colors.map(({ name, color }) => (
              <div
                key={name}
                className={`w-10 h-10 flex items-center justify-center cursor-pointer border-2 rounded-full ${
                  theme === name ? "border-gray-300" : "border-transparent"
                } hover:border-gray-400 transition`}
                onClick={() => handleThemeChange(name)}
              >
                <FaPalette className={`w-6 h-6 ${color}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
