import React from "react"

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <div className="mt-8">
              <p className="text-lg text-gray-500">
                Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
              </p>
              <p className="text-lg text-gray-500">
                Email: <a href="mailto:info@example.com">info@example.com</a>
              </p>
              <p className="text-lg text-gray-500">
                Location: 123 Main St, Anytown USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
