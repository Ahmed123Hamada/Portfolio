"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="py-16 w-full container" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* العنوان والوصف */}
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-black inline-block py-2">
            Contact
          </h2>
          <div className="w-[5%] h-1 bg-blue-600 rounded mt-2"></div>
          <p className="mt-4 text-gray-600 max-full mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <div className="bg-white p-8 shadow-lg rounded-lg" data-aos="fade-right">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <LocationOn className="text-blue-600" fontSize="large" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Address</h3>
                  <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Phone className="text-blue-600" fontSize="large" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Call Us</h3>
                  <p className="text-gray-600">+1 5589 55488 55</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Email className="text-blue-600" fontSize="large" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black">Email Us</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white p-8 shadow-lg rounded-lg" data-aos="fade-left">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="border p-3 rounded-lg w-full outline-none" />
                <input type="email" placeholder="Your Email" className="border p-3 rounded-lg w-full outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="border p-3 rounded-lg w-full outline-none" />
              <textarea placeholder="Message" rows="5" className="border p-3 rounded-lg w-full outline-none"></textarea>
              <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
