import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    gmail: "",
    facebook: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setIsSubmitting(false);
      // Reset form
      setFormData({ gmail: "", facebook: "", email: "" });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to collaborate or have questions about our research? <br/>We'd
              love to hear from you.
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                SENET Research Laboratory
              </h2>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  College of Computing, Prince of Songkla University
                </p>
                <p className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Phuket Campus 80, M.1 Vichitsongkram Road
                </p>
                <p className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7l9 6 9-6"
                    />
                  </svg>
                  Kathu, Phuket 83120
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Find Us Here
                </h3>
                <p className="text-gray-600 mt-1">Visit our campus location</p>
              </div>
              <iframe
                title="College of Computing, PSU Phuket"
                src="https://www.google.com/maps?q=College%20of%20Computing%2C%20Prince%20of%20Songkla%20University%2C%20Phuket%20Campus%2080%2C%20M.1%20Vichitsongkram%20Road%2C%20Kathu%2C%20Phuket%2083120&z=17&iwloc=near&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-3 bg-white border-t border-gray-100 text-right">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=College%20of%20Computing%2C%20Prince%20of%20Songkla%20University%2C%20Phuket%20Campus%2080%2C%20M.1%20Vichitsongkram%20Road%2C%20Kathu%2C%20Phuket%2083120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible
                </p>
              </div>

              <div className="space-y-6">
                {/* Gmail Field */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform hover:shadow-xl transition-all duration-300">
                  <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-red-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C2,4.89 21.1,4 20,4Z" />
                    </svg>
                    Gmail Address
                  </label>
                  <h1 className="text-3xl text-center">
                    <a href={`mailto:senet@phuket.psu.ac.th`}>
                      senet@phuket.psu.ac.th
                    </a>
                  </h1>
                </div>

                {/* Facebook Field */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform hover:shadow-xl transition-all duration-300">
                  <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook Profile
                  </label>
                  <h1 className="text-3xl text-center">
                    <a href={process.env.NEXT_PUBLIC_FB_URL}>SENET Research Lab</a>
                  </h1>
                </div>

                {/* Email/Message Field */}
                {/* <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transform hover:shadow-xl transition-all duration-300">
                  <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Your Message
                  </label>
                  <textarea
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 resize-vertical transition-all duration-300"
                    placeholder="Tell us about your project, questions, or how we can help you..."
                  />
                </div> */}

                {/* Submit Button */}
                {/* <div className="text-center pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Send Message
                        </>
                      )}
                    </span>
                  </button>
                </div> */}
              </div>

              {/* Quick Contact Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                  We're here to help and answer any question you might have.
                  We look forward to hearing from you!
                </h4>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JoinUs;
