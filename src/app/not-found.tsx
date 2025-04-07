'use client';
import { useRouter } from "next/navigation";
export default function NotFound() {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1
        style={{
          fontSize: '150px',
          color: 'var(--bg-card)',
          textShadow: 
            '1px 1px 1px #00593E, ' +
            '2px 2px 1px #00593E, ' +
            '3px 3px 1px #00593E, ' +
            '4px 4px 1px #00593E, ' +
            '5px 5px 1px #00593E, ' +
            '6px 6px 1px #00593E, ' +
            '7px 7px 1px #00593E, ' +
            '8px 8px 1px #00593E, ' +
            '25px 25px 8px rgba(0,0,0, 0.2)'
        }}
        className="font-bold"
      >
        404 
      </h1>
      <p className="text-lg text-gray-600 mt-2">
  Oops!!! The page you&rsquo;re looking for doesn&rsquo;t exist.
</p>

      <button
        onClick={() => router.back()} 
        className="mt-4 button-theme px-6 py-2 rounded-full hover: hover:text-secondary"
      >
        Back to Home
      </button>
    </div>
  );
}
