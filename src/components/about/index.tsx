import React from "react";
import { Icon } from "@iconify-icon/react";

export const About = () => {
  return (
    <>
      {/* <!-- About Section --> */}
      <section id="about" className="about text-start py-12 px-4 lg:px-0">
        {/* <!-- Section Title --> */}
        <div className="container mx-auto text-start mb-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-600">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div
          className="container mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-8">
            <div className="w-full lg:w-1/3">
              <img
                src="img/my-profile-img.jpg"
                className="w-full rounded-lg shadow-md"
                alt="Profile"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <h2 className="text-xl font-bold mb-4">
                UI/UX Designer &amp; Web Developer
              </h2>
              <p className="italic text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Birthday:</strong>
                    <span>1 May 1995</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Website:</strong>
                    <span>www.example.com</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Phone:</strong>
                    <span>+123 456 7890</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">City:</strong>
                    <span>New York, USA</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Age:</strong>
                    <span>30</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Degree:</strong>
                    <span>Master</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr-2 text-blue-500"
                    />{" "}
                    <strong className="mr-2">Email:</strong>
                    <span>email@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      icon="material-symbols-light:chevron-right"
                      width="24"
                      height="24"
                      className="mr- text-blue-500"
                    />{" "}
                    <strong className="mr-2">Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /About Section --> */}
    </>
  );
};
