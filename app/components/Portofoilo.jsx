"use client";
import React, { useState, useEffect } from "react";
import { ZoomIn, Link } from "react-feather";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import imageSrc from "../assets/img/portfolio/app-1.jpg";
import imageSrc1 from "../assets/img/portfolio/app-2.jpg";
import imageSrc2 from "../assets/img/portfolio/app-3.jpg";
import book1 from "../assets/img/portfolio/books-1.jpg";
import book2 from "../assets/img/portfolio/app-2.jpg";
import book3 from "../assets/img/portfolio/app-3.jpg";
import branding1 from "../assets/img/portfolio/branding-1.jpg";
import branding2 from "../assets/img/portfolio/branding-2.jpg";
import branding3 from "../assets/img/portfolio/branding-3.jpg";
import product1 from "../assets/img/portfolio/product-1.jpg";
import product2 from "../assets/img/portfolio/product-2.jpg";
import product3 from "../assets/img/portfolio/product-3.jpg";
import axios from "axios";
function Portfolio() {
  const categories = ["All", "Real Projects", "Template", "Ecommerce"];
  const portfolioItems = [
    { id: 1, image: imageSrc, title: "App 1", category: "Template" },
    { id: 2, image: imageSrc1, title: "App 2", category: "Template" },
    { id: 3, image: imageSrc2, title: "App 3", category: "Template" },
    { id: 4, image: book1, title: "Book 1", category: "Real Projects" },
    { id: 5, image: book2, title: "Book 2", category: "Real Projects" },
    { id: 6, image: book3, title: "Book 3", category: "Real Projects" },
    { id: 7, image: branding1, title: "Branding 1", category: "Ecommerce" },
    { id: 8, image: branding2, title: "Branding 2", category: "Ecommerce" },
    { id: 9, image: branding3, title: "Branding 3", category: "Ecommerce" },
    { id: 10, image: product1, title: "Product 1", category: "Ecommerce" },
    { id: 11, image: product2, title: "Product 2", category: "Ecommerce" },
    { id: 12, image: product3, title: "Product 3", category: "Ecommerce" },
  ];
   const [data, setData] = useState([]);
   ////faatsh data from api whith axios
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {

    //       const response = await axios.get("http://localhost:5000/api/portfolio");
    //       setData(response.data);
    //       console.log("Data fetched:", response.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
    //   fetchData();
    // }, []);
   //////the end fatsh data from api whith axios
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-16 bg-gray-100 container">
      <div className="container mx-auto px-4">
        <div className="text-start mb-12">
          <h2 className="text-3xl font-bold text-gray-800 inline-block py-2 ">
            Portfolio
          </h2>
          <div className="w-[7%] h-1 bg-blue-600 rounded mt-2"></div>
          <p className="mt-4 text-gray-600  mx-auto">
            Explore our latest projects, showcasing a variety of designs and solutions.
          </p>
        </div>

        {/* أزرار الفلتر مع تمييز الزر النشط */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-md
                ${selectedCategory === category 
                  ? "bg-blue-600 text-white scale-105 shadow-lg" 
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} data-aos="zoom-in" className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-300"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
{/* { data.map((item, index) => (
                <div key={index} className="flex items-center justify-start gap-2">
                  <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-3 mt-3">
                  <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                    <ZoomIn size={20} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                    <Link size={20} />
                  </button>
                </div>
              </div>
              ))} */}
                              <span className="bg-blue-600 text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-3 mt-3">
                  <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                    <ZoomIn size={20} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                    <Link size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
