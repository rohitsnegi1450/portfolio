"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioFilters = [
    { label: "All", filter: "*", active: true },
    { label: "App", filter: ".filter-app" },
    { label: "Product", filter: ".filter-product" },
    { label: "Branding", filter: ".filter-branding" },
    { label: "Books", filter: ".filter-books" },
  ];

  const portfolioItems = [
    {
      category: "filter-app",
      title: "App 1",
      image: "app-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-product",
      title: "Product 1",
      image: "product-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-branding",
      title: "Branding 1",
      image: "branding-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-books",
      title: "Books 1",
      image: "books-1.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-app",
      title: "App 2",
      image: "app-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-product",
      title: "Product 2",
      image: "product-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-branding",
      title: "Branding 2",
      image: "branding-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-books",
      title: "Books 2",
      image: "books-2.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-app",
      title: "App 3",
      image: "app-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-product",
      title: "Product 3",
      image: "product-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-branding",
      title: "Branding 3",
      image: "branding-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
    {
      category: "filter-books",
      title: "Books 3",
      image: "books-3.jpg",
      description: "Lorem ipsum, dolor sit amet consectetur",
    },
  ];

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox", // Only images with this class will be displayed
      touchNavigation: true,
      loop: true,
    });

    return () => {
      lightbox.destroy(); // Clean up lightbox on component unmount
    };
  }, [activeFilter]); // Reinitialize Glightbox whenever the filter changes

  const handleFilterClick = (filter: any) => {
    setActiveFilter(filter);
  };

  // Filter items based on the active category
  const filteredItems = portfolioItems.filter((item) => {
    return activeFilter === "*" || item.category === activeFilter;
  });

  return (
    <section id="portfolio" className="portfolio py-12 bg-gray-100">
      {/* Section Title */}
      <div className="container text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        </p>
      </div>

      {/* Filters */}
      <div className="container">
        <ul className="flex flex-wrap justify-center mb-8">
          {portfolioFilters.map(({ label, filter }) => (
            <li
              key={filter}
              className={`cursor-pointer px-4 py-2 text-sm uppercase font-medium mx-2 transition-all hover:text-accent ${
                activeFilter === filter ? "text-accent" : "text-gray-600"
              }`}
              onClick={() => handleFilterClick(filter)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(
            ({ category, title, image, description }, index) => (
              <div
                key={index}
                className={`portfolio-item relative overflow-hidden group ${category}`}
              >
                {/* Image */}
                <img
                  src={`img/portfolio/${image}`}
                  alt={title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                  <h4 className="text-sm font-normal text-white inline-block bg-primary px-2.5 py-[5px]">
                    {title}
                  </h4>
                  <p className="absolute text-center inline-block text-base font-semibold text-[rgba(255,255,255,0.8)] bottom-2.5 inset-x-0">
                    {description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={`img/portfolio/${image}`}
                      className="glightbox absolute left-[calc(50%_-_40px)] text-[26px] top-[calc(50%_-_14px)] text-white transition-[0.3s] leading-[1.2]"
                      title={title}
                    >
                      <Icon icon="bi:zoom-in" width="24" height="24" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="absolute top-[calc(50%_-_14px)] text-white transition-[0.3s] text-[34px] leading-[0] left-2/4"
                      title="Details"
                    >
                      <Icon icon="bi:link-45deg" width="32" height="32" />
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
