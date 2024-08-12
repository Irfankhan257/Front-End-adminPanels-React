import React, { useEffect, useState } from "react";
import "./Investech.css";
import logo from "../../assets/img/logo/logo-removebg-previewR.png";
import investor from "../../assets/img/logo/investorr.png";
import innovator from "../../assets/img/logo/innovator.png";
import lappy from "../../assets/img/logo/Untitledremovebg-preview.png";
import pic1 from "../../assets/img/logo/pexels-fauxels-3183197.jpg";
import pic2 from "../../assets/img/logo/pexels-karolina-grabowska-7876667.jpg";
import pic3 from "../../assets/img/logo/pexels-sora-shimazaki-5673488.jpg";
import pic4 from "../../assets/img/logo/1.png";
import { Link } from "react-router-dom";

const InvesTechWebsite = () => {
  const [isScrolledToSection, setIsScrolledToSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("animate-fade-in-and-up"); // Replace 'your-section-id' with the actual id of your section
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionPosition < screenHeight * 0.9) {
          setIsScrolledToSection(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black-950">
      <header className="body-font rounded-4xl bg-transparent fixed top-0 z-10 mx-9 w-full text-white backdrop-blur-md backdrop-filter ">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <img className="h-14 w-20 object-contain" alt="hero" src={logo} />
            <span className="ml-3 text-xl text-white">InvesTech</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <a className="mr-5 text-gray-400 hover:text-gray-200"></a>
            <a className="mr-5 text-gray-400 hover:text-gray-200"></a>
            <a className="mr-5 text-gray-400 hover:text-gray-200"></a>
            <a className="mr-5 text-gray-400 hover:text-gray-200"></a>
          </nav>
          <a
            className="mt-4 inline-flex items-center rounded border-0 bg-blue-600 py-1 px-3 text-base text-gray-200 hover:bg-blue-400 focus:outline-none md:mt-0"
            href="/login"
          >
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>

      <section className="body-font bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-300 via-slate-900 to-black-950">
        <div className="animate-fade-in-and-up container mx-auto flex flex-col items-center px-5 py-48 md:flex-row ">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font font-large mb-4 text-6xl text-white sm:text-6xl">
              Welcome to Investech
            </h1>
            <h6 className="title-font font-small mb-2 text-2xl text-white ">
              Where Innovation Meets Investment!
            </h6>
            <p className="mb-8 leading-relaxed  text-gray-200 ">
              At Investech, we're not just building solutions; we're shaping the
              future of business World. Welcome to Investech Hub, your
              destination for connecting innovators with investors. We're here
              to make investing in innovative ideas and technology easier and
              more rewarding for everyone involved.
            </p>
            <div className="flex justify-center">
              <a href="/signup">
                <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  SignUp
                </button>
              </a>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="spinning-image h-full w-full rounded object-fill"
              alt="hero"
              src={logo}
            />
          </div>
        </div>
      </section>
      <section className="body-font mx-9 my-9 rounded-3xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black-950 via-slate-900 to-teal-400">
        <div
          id="animate-fade-in-and-up"
          className={`container mx-auto flex flex-wrap px-5 py-24 ${
            isScrolledToSection ? "animate-left-to-right" : ""
          }`}
        >
          <div className="mx-auto lg:w-2/3">
            <div className="relative mb-4 flex w-full flex-wrap bg-gray-100 py-32 px-10">
              <img
                alt="gallery"
                className="absolute inset-0 block h-full w-full object-fill object-center opacity-40"
                src={pic1}
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="title-font mb-2 text-xl font-semibold text-black-950">
                  Our Mission
                </h2>
                <p className="font-semibold leading-relaxed text-black-950">
                  To streamline the journey from concept to market by providing
                  a seamless connection between investors and innovators,
                  fostering a community where big ideas become reality.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex flex-wrap">
              <div className="w-1/2 px-2">
                <div className="relative flex w-full flex-wrap bg-gray-100 py-16 px-6 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block h-full w-full object-fill object-center opacity-40"
                    src={pic2}
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="title-font mb-2 text-xl font-semibold text-black-950">
                      Why InvesTech?
                    </h2>
                    <p className="font-semibold leading-relaxed text-black-950">
                      Empowering the future by seamlessly connecting visionary
                      entrepreneurs with forward-thinking investors, turning
                      groundbreaking ideas into successful ventures.
                    </p>
                    <ul class="font-semibold list-disc mt-4 max-w-md list-inside space-y-1 text-black-950">
                      <li>Proven Track Record</li>
                      <li>Expert Curation</li>
                      <li>Comprehensive Support</li>
                      <li>User-Friendly Platform</li>
                      <li>Community-Driven</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative flex w-full flex-wrap bg-gray-100 py-16 px-6 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block h-full w-full object-fill object-center opacity-40"
                    src={pic3}
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="title-font mb-9 text-xl font-semibold text-black-950">
                      What We Offer?
                    </h2>
                    <p className="mb-2 font-semibold leading-relaxed text-black-950">
                      At our core, we connect passionate entrepreneurs with the
                      right investors, fostering growth and innovation. Our
                      platform goes beyond a marketplace; it’s a vibrant
                      community dedicated to turning ideas into impactful
                      realities.
                    </p>
                    <ul class="font-semibold space-y-1 mt-5 mt-4 max-w-md list-inside  list-disc text-black-950">
                      <li>Curated Investment Opportunities </li>
                      <li>Entrepreneur Support</li>
                      <li>Seamless Connection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font mx-9  my-9  rounded-3xl bg-gradient-to-b from-slate-900 to-teal-500 text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-mx-4 -mb-10 flex flex-wrap text-center">
            <div className="mb-10 px-4 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-contain object-center"
                  src={innovator}
                />
              </div>
              <h2 className="title-font mt-6 mb-3 text-3xl font-medium text-gray-300">
                Innovators
              </h2>
              <p className="text-base leading-relaxed text-gray-300 ">
                Turn your vision into reality with InvesTech. Gain access to the
                resources, mentorship, and funding needed to accelerate your
                growth. Connect with forward-thinking investors, showcase your
                ideas, and take your innovation to the next level.
              </p>
            </div>
            <div className="mb-10 px-4 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-contain object-center"
                  src={investor}
                />
              </div>
              <h2 className="title-font mt-6 mb-3 text-3xl font-medium text-gray-300">
                Investor
              </h2>
              <p className="text-base leading-relaxed text-gray-300 ">
                Unlock a diverse array of investment opportunities across
                industries and growth stages. Explore innovative startups and
                emerging companies, connect with driven founders, conduct
                thorough research, and make informed, strategic
                investment decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font mx-9 my-9 rounded-3xl bg-gradient-to-r from-slate-900 to-teal-500 text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
            <div className="mb-6 w-full px-4 sm:p-4">
              <h1 className="title-font font-large mb-4 text-4xl text-white sm:text-4xl">
                Portal Showcase:
              </h1>
              <h6 className="title-font font-small mb-2 text-2xl text-white ">
                Explore Opportunities and Resources
              </h6>
              <p className="mb-8 leading-relaxed  text-gray-200 ">
                For Investors: The Investor Portal offers a curated selection of
                ventures across sectors and stages, streamlining exploration and
                due diligence. Connect with founders, track investments, and
                initiate discussions effortlessly.
                <br className="hidden lg:inline-block" />
                <br className="hidden lg:inline-block" />
                For Innovators: Showcase your vision and access resources to
                fuel growth through the Innovator Portal. Simplify collaboration
                with investors, share updates, and receive feedback within a
                user- friendly interface
              </p>
            </div>
          </div>
          <div className="mt-6 ml-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/2 lg:w-1/2">
            <img
              className="h-full w-full object-cover object-center"
              src={lappy}
              alt="stats"
            />
          </div>
        </div>
      </section>
      <section className="body-font relative mx-9 my-9 rounded-3xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black-950 via-slate-900 to-teal-300">
        <div className="container relative mx-auto px-5 py-24">
          <img
            className="h-full w-full object-cover object-center opacity-40"
            src={pic4}
            alt="stats"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center">
            <h2 className="title-font mb-9 text-5xl font-medium text-white">
              Join Our Community
            </h2>
            <p className="font-medium leading-relaxed text-white">
              Join our community of investors, entrepreneurs, and industry
              experts. Together, let's drive innovation and create positive
              <br className="hidden md:inline-block" />
              change. Sign up now to start exploring opportunities and
              connecting with like-minded individuals.
              <br className="hidden md:inline-block" />
              <h2 className="title-font mb-8 mt-5 text-3xl font-medium text-white">
                Get Started Today
              </h2>
              Ready to dive into the world of Investech? Sign up now to unlock
              opportunities, connect with others, and be part of something
              bigger.
            </p>

            <div className="mt-14 flex justify-center">
              <a href="/signup">
                <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  SignUp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="body-font mx-9 rounded-3xl bg-gradient-to-l from-slate-900 to-teal-500 text-gray-600 ">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <div className="mx-auto mt-10 w-64 flex-shrink-0 text-center md:mx-0 md:mt-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <img className="h-14 w-20 object-contain" alt="hero" src={logo} />
              <span className="ml-3 text-xl text-gray-300">InvesTech</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Where Innovation meets Investment
            </p>
          </div>
          <div className="order-first -mb-10 flex flex-grow flex-wrap text-center md:pr-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-3/4">
              <h2 className="title-font mb-3 text-5xl font-medium tracking-widest text-gray-300">
                About Us:
              </h2>
              <br></br>
              <p className="text-gray-300">
                InvestTech is a platform that connects investors with curated
                startup opportunities across various industries. We empower
                investors with the tools to make informed decisions and engage
                actively, while providing startups with the resources and
                support needed for growth. Our mission is to foster a vibrant
                ecosystem where innovation and collaboration thrive.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-stale-800">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            2024 InvesTech —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="ml-1 text-gray-600"
              target="_blank"
            >
              @SSUET
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InvesTechWebsite;
