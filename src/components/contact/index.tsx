import React from "react";
import { Icon } from "@iconify-icon/react";

export const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact py-12 px-4 lg:px-0">
        {/* <!-- Section Title --> */}
        <div className="container mx-auto text-start mb-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div
          className="container mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col lg:flex-row h-full gap-4 relative items-stretch">
            {/* Info Section */}
            <div className="lg:w-5/12 bg-white shadow-lg  px-4 py-6 lg:p-8 rounded-lg">
              <div
                className="flex group items-center mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Icon
                  icon="mdi:location"
                  width="24"
                  height="24"
                  className="bi bi-geo-alt transition-all duration-[0.3s] ease-[ease-in-out] text-primary group-hover:bg-primary group-hover:text-white text-2xl bg-[#f0f7fd] w-11 h-11 rounded-full flex items-center justify-center mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">Address</h3>
                  <p className="text-sm text-black">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </div>

              <div
                className="flex group  items-center mb-8"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Icon
                  icon="ic:baseline-phone"
                  width="24"
                  height="24"
                  className="bi bi-telephone transition-all duration-[0.3s] ease-[ease-in-out] group-hover:bg-primary group-hover:text-white text-primary text-2xl bg-[#f0f7fd] w-11 h-11 rounded-full flex items-center justify-center mr-4"
                />
                <div>
                  <h3 className="text-lg text-black font-bold mb-2">Call Us</h3>
                  <p className="text-sm text-black">+1 5589 55488 55</p>
                </div>
              </div>

              <div
                className="flex group items-center mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Icon
                  icon="ph:envelope"
                  width="24"
                  height="24"
                  className="bi bi-telephone transition-all duration-[0.3s] ease-[ease-in-out] group-hover:bg-primary group-hover:text-white text-primary text-2xl bg-[#f0f7fd] w-11 h-11 rounded-full flex items-center justify-center mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-black">
                    Email Us
                  </h3>
                  <p className="text-sm text-black">info@example.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder="0"
                className="w-full h-64 mt-8 rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form Section */}
            <div className="lg:w-7/12 lg:px-4 h-full">
              <form
                action="forms/contact.php"
                method="post"
                className="bg-white shadow-lg px-4 py-6 lg:p-8 rounded-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex flex-col ">
                  <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="lg:w-1/2 ">
                      <label
                        htmlFor="name-field"
                        className="block text-sm mb-2 text-black font-bold"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        required
                      />
                    </div>

                    <div className="lg:w-1/2">
                      <label
                        htmlFor="email-field"
                        className="block text-sm mb-2 text-black font-bold"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        name="email"
                        id="email-field"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="w-full">
                      <label
                        htmlFor="subject-field"
                        className="block text-sm mt-2 text-black font-bold  mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                        name="subject"
                        id="subject-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <label
                      htmlFor="message-field"
                      className="block text-black text-sm mb-1 mt-2 font-bold"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      name="message"
                      rows={10}
                      id="message-field"
                      required
                    />
                  </div>

                  <div className="col-md-12 text-center mt-4">
                    <div className="loading hidden">Loading</div>
                    <div className="error-message hidden"></div>
                    <div className="sent-message hidden">
                      Your message has been sent. Thank you!
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-400 text-white rounded-full transition duration-300 hover:bg-[#149ddd]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
