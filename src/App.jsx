import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex space-x-1">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count => count + 1)}>
        count is {count}
      </button>
      <p>
        npm create vite@latest - npm run dev npm install -D tailwindcss postcss
        autoprefixer - npx tailwindcss init
      </p>
    </div>
  )
}

export default App
