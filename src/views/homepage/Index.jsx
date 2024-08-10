import React, { useEffect, useState } from "react";
import "./Investech.css";
import logo from "../../assets/img/logo/logo-removebg-previewR.png";
import investor from "../../assets/img/logo/investorr.png";
import innovator from "../../assets/img/logo/innovator.png";
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
      <header className="body-font bg-transparent rounded-4xl fixed top-0 z-10 mx-9 w-full text-gray-600 backdrop-blur-md backdrop-filter ">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <img className="h-14 w-20 object-contain" alt="hero" src={logo} />
            <span className="ml-3 text-xl text-blue-200">InvesTech</span>
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

      <section className="body-font from-10% via-30% to-90% bg-gradient-to-l from-black-950 via-slate-900 to-teal-500 text-gray-600">
        <div className="animate-fade-in-and-up container mx-auto flex flex-col items-center px-5 py-48 md:flex-row ">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font text-slate-300 mb-4 text-3xl font-medium sm:text-4xl">
              Welcome to Investech
              <br className="hidden lg:inline-block" />
              Where Innovation Meets Investment!
            </h1>
            <p className="text-slate-400 mb-8  leading-relaxed ">
              At Investech, we're not just building solutions; we're shaping the
              future of business World. Welcome to Investech Hub, your
              destination for connecting innovators with investors. We're here
              to make investing in innovative ideas and technology easier and
              more rewarding for everyone involved.
            </p>
            <div className="flex justify-center">
              <a
                href="/signup"
              >
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
      <section className="body-font mx-9 my-9 rounded-3xl bg-gradient-to-b from-slate-900 via-teal-500 to-slate-900 text-gray-600">
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
                className="absolute inset-0 block h-full w-full object-cover object-center opacity-25"
                src="https://dummyimage.com/820x340"
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="title-font mb-2 text-2xl font-medium text-gray-900">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a className="mt-3 inline-flex items-center text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="-mx-2 flex flex-wrap">
              <div className="w-1/2 px-2">
                <div className="relative flex w-full flex-wrap bg-gray-100 py-16 px-6 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block h-full w-full object-cover object-center opacity-25"
                    src="https://dummyimage.com/542x460"
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="title-font mb-2 text-xl font-medium text-gray-900">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a className="mt-3 inline-flex items-center text-indigo-500">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative flex w-full flex-wrap bg-gray-100 py-16 px-6 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block h-full w-full object-cover object-center opacity-25"
                    src="https://dummyimage.com/542x420"
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="title-font mb-2 text-xl font-medium text-gray-900">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a className="mt-3 inline-flex items-center text-indigo-500">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
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
              <h2 className="title-font mt-6 mb-3 text-3xl font-medium text-gray-400">
                Innovators
              </h2>
              <p className="text-base leading-relaxed text-gray-400 ">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="mx-auto mt-6 flex rounded border-0 bg-indigo-500 py-2 px-5 text-white hover:bg-indigo-600 focus:outline-none">
                Button
              </button>
            </div>
            <div className="mb-10 px-4 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="h-full w-full object-contain object-center"
                  src={investor}
                />
              </div>
              <h2 className="title-font mt-6 mb-3 text-3xl font-medium text-gray-400">
                Investor
              </h2>
              <p className="text-base leading-relaxed text-gray-400 ">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="mx-auto mt-6 flex rounded border-0 bg-indigo-500 py-2 px-5 text-white hover:bg-indigo-600 focus:outline-none">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font mx-9 my-9 rounded-3xl bg-gradient-to-r from-slate-900 to-teal-500 text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className="-mx-4 mt-auto mb-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2">
            <div className="mb-6 w-full px-4 sm:p-4">
              <h1 className="title-font mb-2 text-xl font-medium text-blue-500">
                Moon hashtag pop-up try-hard offal truffaut
              </h1>
              <div className="leading-relaxed text-gray-400">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra sustainable fingerstache kickstarter.
              </div>
            </div>
            <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
              <h2 className="title-font text-3xl font-medium text-red-600">
                2.7K
              </h2>
              <p className="leading-relaxed text-gray-400">Users</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
              <h2 className="title-font text-3xl font-medium text-red-600">
                1.8K
              </h2>
              <p className="leading-relaxed text-gray-400">Subscribes</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
              <h2 className="title-font text-3xl font-medium text-red-600">
                35
              </h2>
              <p className="leading-relaxed text-gray-400">Downloads</p>
            </div>
            <div className="w-1/2 p-4 sm:w-1/2 lg:w-1/4">
              <h2 className="title-font text-3xl font-medium text-red-600">
                4
              </h2>
              <p className="leading-relaxed text-gray-400">Products</p>
            </div>
          </div>
          <div className="mt-6 ml-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/2 lg:w-1/2">
            <img
              className="h-full w-full object-cover object-center"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div>
        </div>
      </section>
      <section className="body-font mx-9 my-9 rounded-3xl bg-gradient-to-b from-teal-500 via-slate-900 to-teal-500 text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium tracking-widest text-blue-300">
              OUR TEAM
            </h1>
            <p className="mx-auto text-base leading-relaxed text-gray-400 lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://dummyimage.com/200x200"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-blue-300">
                    Holden Caulfield
                  </h2>
                  <h3 className="mb-3 text-red-500">UI Developer</h3>
                  <p className="mb-4 text-gray-300">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://dummyimage.com/201x201"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Alper Kamu
                  </h2>
                  <h3 className="mb-3 text-gray-500">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://dummyimage.com/204x204"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Atticus Finch
                  </h2>
                  <h3 className="mb-3 text-gray-500">UI Developer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left">
                <img
                  alt="team"
                  className="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                  src="https://dummyimage.com/206x206"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Henry Letham
                  </h2>
                  <h3 className="mb-3 text-gray-500">Designer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="body-font mx-9  my-9  rounded-3xl bg-gradient-to-l from-slate-900 to-teal-500 text-gray-600 ">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
          <div className="mx-auto mt-10 w-64 flex-shrink-0 text-center md:mx-0 md:mt-0 md:text-left">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div className="order-first -mb-10 flex flex-grow flex-wrap text-center md:pr-20 md:text-left">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-stale-800">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              class="ml-1 text-gray-600"
              target="_blank"
            >
              @knyttneve
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
