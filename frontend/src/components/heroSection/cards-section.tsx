export const CardSection = () => {
  return (
    <div className="grid grid-cols-2">
      <button className="text-black px-8 py-6 border border-gray-400 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default col-span-2 ">
        <div>
          <div className="img-container aspect-[2/1] h-20 relative w-full overflow-hidden rounded-lg bg-slate-100 transition duration-100">
            {/* Mask Image */}
            <div
              className="absolute inset-0 z-20 bg-white
                      [mask-image:linear-gradient(to_bottom,transparent,transparent,white)] 
                      [-webkit-mask-image:linear-gradient(to_bottom,transparent,transparent,white)]"
            ></div>

            {/* Image */}
            <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
              <img
                decoding="async"
                alt="skeleton"
                loading="lazy"
                width="180"
                height="80"
                data-nimg="1"
                className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl text-transparent"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=256&amp;q=75 1x, 
                  /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 via-fuchsia-400 mt-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              ></path>
            </svg>
          </div>

          {/* Text Content */}
          <div className="h-full">
            <h2 className="font-bold text-xl mt-4 mb-2 relative">
              Technical Guide
            </h2>
            <p className="text-sm text-zinc-600">
              Use the technical guide template to write a technical guide
              intended for consumption by developers or other technical users.
            </p>
          </div>
        </div>
      </button>

      <button className="text-black px-8 py-6 border border-gray-400 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
        <div>
          <div className="img-container aspect-[2/1] h-20 relative w-full overflow-hidden rounded-lg bg-slate-100 transition duration-100">
            {/* Mask Image */}
            <div
              className="absolute inset-0 z-20 bg-white
                      [mask-image:linear-gradient(to_bottom,transparent,transparent,white)] 
                      [-webkit-mask-image:linear-gradient(to_bottom,transparent,transparent,white)]"
            ></div>

            {/* Image */}
            <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
              <img
                decoding="async"
                alt="skeleton"
                loading="lazy"
                width="180"
                height="80"
                data-nimg="1"
                className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl text-transparent"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=256&amp;q=75 1x, 
                  /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 via-fuchsia-400 mt-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              ></path>
            </svg>
          </div>

          {/* Text Content */}
          <div className="h-full">
            <h2 className="font-bold text-xl mt-4 mb-2 relative">
              Technical Guide
            </h2>
            <p className="text-sm text-zinc-600">
              Use the technical guide template to write a technical guide
              intended for consumption by developers or other technical users.
            </p>
          </div>
        </div>
      </button>

      <button className="text-black px-8 py-6 border border-gray-400 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
        <div>
          <div className="img-container aspect-[2/1] h-20 relative w-full overflow-hidden rounded-lg bg-slate-100 transition duration-100">
            {/* Mask Image */}
            <div
              className="absolute inset-0 z-20 bg-white
                      [mask-image:linear-gradient(to_bottom,transparent,transparent,white)] 
                      [-webkit-mask-image:linear-gradient(to_bottom,transparent,transparent,white)]"
            ></div>

            {/* Image */}
            <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
              <img
                decoding="async"
                alt="skeleton"
                loading="lazy"
                width="180"
                height="80"
                data-nimg="1"
                className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl text-transparent"
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=256&amp;q=75 1x, 
                  /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 via-fuchsia-400 mt-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              ></path>
            </svg>
          </div>

          {/* Text Content */}
          <div className="h-full">
            <h2 className="font-bold text-xl mt-4 mb-2 relative">
              Technical Guide
            </h2>
            <p className="text-sm text-zinc-600">
              Use the technical guide template to write a technical guide
              intended for consumption by developers or other technical users.
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};
