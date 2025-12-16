import Link from "next/link";

const words: string[] = [
  "Ideas",
  "Concepts",
  "Designs",
  "Code",
  "Ideas",
  "Concepts",
  "Designs",
  "Code",
];

export default function Home() {
  return (
    <>
      <section className="relative top-[72px] w-[100%] h-[calc(100vh-72px)] flex flex-col justify-center items-center text-white">
        <div className="flex flex-col justify-center text-[30px] md:text-[60px] font-semibold relative z-10 pointer-events-none">
          <h1>
            Turning
            <span className="inline-block overflow-hidden absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0">
              <span className="flex flex-col animate-[word-slider_21s_infinite_cubic-bezier(0.9,0.01,0.3,0.99)]">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <h1>into Interactive Experiences</h1>

          <p className="md:text-xl relative z-10 pointer-events-none mb-5">
            A headless component library.
          </p>

          <Link
            href="/component"
            className="pointer-events-auto md:w-60 md:h-10 w-40 h-8 text-xs md:t-sm tracking-[0.2em] uppercase border border-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <span>SEE THE PROJECT</span>
          </Link>

        </div>


      </section>

    </>
  );
}
