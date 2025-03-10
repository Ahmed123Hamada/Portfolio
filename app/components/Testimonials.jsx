 "use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Matt Brandon",
    role: "Freelancer",
    text: "هذا نص تجربة العميل الأول. تجربة رائعة حقًا!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    text: "خدمة ممتازة! سأعود لاستخدامها مرة أخرى.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "أنصح الجميع بهذه الخدمة، تجربة لا تُنسى!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Doe",
    role: "Designer",
    text: "منتج مذهل! فريق رائع ودعم ممتاز.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Matt Brandon",
    role: "Freelancer",
    text: "هذا نص تجربة العميل الأول. تجربة رائعة حقًا!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "John Larson",
    role: "Entrepreneur",
    text: "خدمة ممتازة! سأعود لاستخدامها مرة أخرى.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Saul Goodman",
    role: "CEO & Founder",
    text: "أنصح الجميع بهذه الخدمة، تجربة لا تُنسى!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Doe",
    role: "Designer",
    text: "منتج مذهل! فريق رائع ودعم ممتاز.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

export default function TestimonialSlider() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-100 container" data-aos="fade-up">
      <div className="container mx-auto px-4 text-start">
        <h2
          className="text-3xl text-start font-bold text-black inline-block  py-2"
          data-aos="fade-up"
        >
Customer Testimonials        </h2>
<div className="w-[15%] h-1 bg-blue-600 rounded mt-2" data-aos="fade-up"></div>
        <p className="mt-4 text-gray-600 max-w-full mx-auto" data-aos="fade-up">
        Our customers' opinions after using our distinguished services.        </p>

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay  ]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },

            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className="grid grid-rows-[auto_auto] gap-4 bg-white p-6 shadow-lg rounded-lg items-center text-center"
                  data-aos="zoom-in"
                >
                  <p className="italic text-gray-700">"{testimonial.text}"</p>
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <h3 className="text-lg font-bold text-black mt-2">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
