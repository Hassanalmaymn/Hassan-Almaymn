import React from 'react';

const Contact = ({ personalInfo, ui }) => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">{ui?.navigation?.contact || "Contact Me"}</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Info Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 bg-blue-600 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{ui?.contactForm?.title || "Get In Touch"}</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">{ui?.contactForm?.subtitle || "Feel free to reach out to me for any inquiries or opportunities."}</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm sm:text-base">{ui?.contactForm?.email || "Email"}</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-blue-100 hover:text-white text-xs sm:text-sm break-all">{personalInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm sm:text-base">{ui?.contactForm?.phone || "Phone"}</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-blue-100 hover:text-white text-xs sm:text-sm">{personalInfo.phone}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-sm sm:text-base">{ui?.contactForm?.location || "Location"}</p>
                    <p className="text-blue-100 text-xs sm:text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                {personalInfo.social.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-100 text-xs sm:text-sm"
                  >
                    <span className="sr-only">{social.platform}</span>
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Send Me a Message</h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 text-sm sm:text-base mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;