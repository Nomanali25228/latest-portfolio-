"use client";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 lg:p-16 max-w-7xl mx-auto gap-12">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-8">
        <div>
          <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider">
            — Contact Me
          </h3>
          <h1 className="text-4xl font-bold text-black leading-tight">
            Get in touch with me
          </h1>
        </div>
        <p className="text-gray-600 leading-relaxed lg:pr-8">
          Feel free to connect with me for opportunities, collaborations, or
          any professional inquiries. I{"’"}m here to help!
        </p>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Email Section */}
          <div className="flex items-center gap-4 border rounded-lg p-4 shadow-md">
            <div className="bg-gray-200  rounded-full p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75l-9 6-9-6m18 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Email</h3>
              <p className="text-gray-600 text-sm">demoemail123@gmail.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-4 border rounded-lg p-4 shadow-md">
            <div className="bg-gray-200 rounded-full p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75a4.5 4.5 0 014.5-4.5h10.5a4.5 4.5 0 014.5 4.5v10.5a4.5 4.5 0 01-4.5 4.5H6.75a4.5 4.5 0 01-4.5-4.5V6.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 9.75l-9 6"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">Phone</h3>
              <p className="text-gray-600 text-sm">+99 (0) 101 0000 777</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>
          <p className="text-gray-600 mb-8">
            Use our convenient contact form to reach out with questions,
            feedback, or collaboration inquiries.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-lg font-semibold hover:bg-gray-800"
            >
              Send to Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
