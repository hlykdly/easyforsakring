import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Sidebar from "./Sidebar"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-600 flex h-screen">
      <App />
      <Sidebar />
    </div>
  </React.StrictMode>
)
