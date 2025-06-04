'use client';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-36 md:pt-44 xl:pb-32 xl:pt-52">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text Block */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="mb-6 text-4xl font-extrabold text-black dark:text-white sm:text-5xl xl:text-6xl leading-tight">
              Engineering the Future,
              <br className="hidden sm:inline" />
              Digitalizing the Present.
            </h1>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              We craft innovative engineering systems and digital experiences
              that empower industries to evolve — combining technical precision with transformative technology.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-primary/80">
                Explore Solutions
              </button>
              <button className="rounded-full border border-gray-400 px-6 py-3 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                About Us
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative lg:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/logo-toho4.png"
                alt="Digital Engineering"
                fill
                className="object-contain dark:hidden"
              />
              {/* <Image
                src="/images/hero/hero-illustration-dark.svg"
                alt="Digital Engineering Dark"
                fill
                className="object-contain hidden dark:block"
              /> */}
            </div>
            <Image
              src="/images/shape/shape-02.svg"
              alt="decorative shape"
              width={36}
              height={36}
              className="absolute bottom-0 right-0 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
