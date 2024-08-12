import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "assets/img/nfts/Nft1.png";
import image2 from "assets/img/nfts/Nft2.png";
import image3 from "assets/img/nfts/Nft3.png";
import image4 from "assets/img/nfts/Nft4.png";
import image5 from "assets/img/nfts/Nft5.png";
import Card from "components/card";

const Project = ({}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: image1,
      title: "Green Energy and Sustainability",
      description:
        "Businesses in green energy and sustainability focus on renewable energy sources, eco-friendly products, and sustainable practices. As global demand for clean energy grows, these businesses offer a promising return on investment. The moderate risk is due to regulatory changes and the need for significant upfront capital.",
    },
    {
      src: image2,
      title: "Healthcare Services",
      description:
        "Healthcare services, including hospitals, clinics, and telemedicine platforms, offer steady and reliable returns due to the constant demand for medical care. The sector is less volatile, making it a safer investment. Profitability is driven by an aging population and the continuous need for healthcare innovations.",
    },
    {
      src: image3,
      title: "Biotech and Pharmaceuticals",
      description:
        "Investing in biotech and pharmaceuticals involves backing companies that are developing new drugs and medical treatments. The sector is characterized by high risk due to the lengthy and expensive R&D process and regulatory hurdles. However, successful drug approvals can result in significant returns, making it a high-reward investment. ",
    },
    {
      src: image4,
      title: "E-commerce Platforms",
      description:
        "E-commerce platforms, particularly those catering to niche markets or emerging economies. These businesses benefit from the growing trend of online shopping. Profitability is typically driven by market expansion and the ability to scale operations effectively.",
    },
    {
      src: image5,
      title: "Logistics and Transportation",
      description:
        "The logistics and transportation sector is crucial for supporting global trade and e-commerce, offering steady returns with moderate risk. Profitability is driven by efficient operations and the ability to scale. The sector benefits from consistent demand.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative h-96 w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover"
              />
              <div className="bg-black/75 absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-xl text-black-950 md:text-4xl lg:text-2xl">
                    {slide.title}
                  </h1>
                  <p className="mb-12 text-white">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`mx-1 h-3 w-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
        >
          ❯
        </button>
      </div>
    </Card>
  );
};

export default Project;
