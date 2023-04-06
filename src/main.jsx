import ReactDOM from "react-dom/client"
import App from "./App"
import React from "react"
import Navbar from "./components/Navbar"
import WelcomeSection from "./components/WelcomeSection"
import ProductsSection from "./components/ProductsSection"
import ContactSection from "./components/ContactSection"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-600 h-screen">
      <App />
      <Navbar />
      <WelcomeSection />
      <ProductsSection />
      <ContactSection />
    </div>
  </React.StrictMode>
)
