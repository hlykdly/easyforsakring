import React from "react"
import backgroundImage from "../images/boat.jpg"

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="h-3/4 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center">
        <h2 className="text-7xl font-extrabold text-gray-800">
          Välkommen till MRS Consulting
        </h2>
        <p className="mt-4 font-extrabold text-4xl text-gray-800">
          -Vi hjälper dig med försäkring till ditt företag
        </p>
      </div>
    </section>
  )
}

export default WelcomeSection
