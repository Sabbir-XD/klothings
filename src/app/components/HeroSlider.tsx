// components/HeroSlider.js
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const HeroSlider = () => {
  // Sample data for slides - replace with your actual products
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2023",
      subtitle: "Discover the latest trends in fashion",
      description: "Get 30% off on all summer items. Limited time offer.",
      image: "https://jadeblue.com/cdn/shop/articles/mens_summer_wear.jpg?v=1714380887&width=1024",
      ctaText: "Shop Now",
      ctaLink: "/collection/summer"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Fresh styles just landed",
      description: "Be the first to rock our newest designs",
      image: "/images/new-arrivals.jpg",
      ctaText: "Explore",
      ctaLink: "/new-arrivals"
    },
    {
      id: 3,
      title: "Eco-Friendly Collection",
      subtitle: "Fashion that cares for the planet",
      description: "Sustainable clothing made from organic materials",
      image: "/images/eco-collection.jpg",
      ctaText: "Learn More",
      ctaLink: "/collection/eco-friendly"
    }
  ];

  return (
    <section className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
                <div className="max-w-4xl px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6 animate-fade-in-delay">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
                    {slide.description}
                  </p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-white text-gray-900 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 animate-fade-in-delay-3"
                  >
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;