import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="mx-auto pt-10">
      <div class="text-center p-5 max-w-xl mx-auto rounded-xl shadow-lg bg-lime-100">
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
      <div class="p-5 m-5 rounded-xl shadow-lg bg-lime-100 max-w-xl mx-auto">
        <p class="text-left text-3xl font-bold underline ">Great news!</p>
        <p class="text-center p-4">
          Aajsdkj ASdkj kjlan kjfsk skjfa kj lk a sk akj asdj jasöl öl fdöls j g
          j gsdlöksdfj ödsfl j öfs dlj fs öj adasd lkjflk kjbf lkjf lkjab flkj
          fakljb asd as djnöjk jkb ökjbhvouyvlhv ihvb iddfasfjbbj asdasd...
        </p>
      </div>
    </div>
  )
}

export default App
