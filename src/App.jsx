import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="text-center p-5 max-w-xl mx-auto rounded-xl shadow-lg space-x-8 m-8 bg-lime-100">
      <p class="text-left text-3xl font-bold underline ">Hello world!</p>
      <button
        class="bg-slate-400 p-3 rounded-xl shadow-lg hover:bg-slate-500 m-5 text-lg font-bold"
        onClick={() => setCount(count => count + 1)}
      >
        Count is {count}
      </button>

      <p class="text-center">
        npm create vite@latest <br></br> npm install -D tailwindcss postcss
        autoprefixer <br></br> npx tailwindcss init <br></br> npm run dev
      </p>
    </div>
  )
}

export default App
