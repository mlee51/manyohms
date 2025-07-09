'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 pulse-gradient"></div>
      
      {/* Background Image */}
      <div className="relative z-10 flex items-center justify-center opacity-30">
        <div className="relative w-96 h-96 mt-50 hover:animate-pulse">
        <Image
            src="/manyohms.png"
            alt="Manyohms Background"
            fill
            className="object-contain select-none"
          priority
        />
        </div>
      </div>
      
      {/* Performance Links Section */}
      <div className="relative z-10 flex flex-col items-center p-4 pb-32 ">
        
        <div className="space-y-4 max-w-md w-full">
          <a
            href="https://www.youtube.com/watch?v=LTMGdUPSGY4"
            target="_blank"
            className="block w-full transition-all duration-300  p-4  text-center border border-white/30 hover:border-white/5 underline hover:animate-pulse"
          >
            <div className=" script-font ">many ohms live at maann studio</div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=Qi6EZF3kTyI"
             target="_blank"
            className="block w-full transition-all duration-300  p-4  text-center  underline hover:animate-pulse"
          >
            <div className=" script-font ">many ohms live at Fou Gallery</div>
          </a>

          <a
            href="https://www.youtube.com/watch?v=U8-GsCQlETc"
            target="_blank"
            className="block w-full transition-all duration-300  p-4  text-center border border-white/30 hover:border-white/50 underline hover:animate-pulse"
          >
            <div className=" script-font ">many ohms Live at Portraits of Aufhebung</div>
          </a>
        </div>

        {/* Images Section */}
        <div className="space-y-20 max-w-md w-full mt-20">
          <div className="w-full">
          <Image
              src="/avi.jpg"
              alt="Avi"
              width={400}
              height={300}
              className="w-full h-auto "
            />
          </div>
          <div className="w-full">
          <Image
              src="/michael.jpg"
              alt="Michael"
              width={400}
              height={300}
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/10  p-4 z-20">
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/manyohms"
          target="_blank"
            className=" hover:text-gray-800 transition-colors duration-300 hover:animate-pulse"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
