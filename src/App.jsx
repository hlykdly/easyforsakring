import { useState, useEffect } from "react"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [newCoin, setNewCoin] = useState("")
  const [newCoinData, setNewCoinData] = useState(null)
  const [newCoins, setNewCoins] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleNewCoinSearch = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${newCoin}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Coin not found")
        }
        return response.json()
      })
      .then((data) => {
        setNewCoins((newCoins) => [...newCoins, data])
        setNewCoinData(data)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className="pt-10">
      <div className="text-center p-5 max-w-xl mx-auto rounded-xl shadow-lg bg-lime-100">
        <p className="text-left text-3xl font-bold underline ">Hello world!</p>
        <button
          className="bg-slate-400 p-3 rounded-xl shadow-lg hover:bg-slate-500 m-5 text-lg font-bold"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <p className="text-center">
          npm create vite@latest <br></br> npm install -D tailwindcss postcss
          autoprefixer <br></br> npx tailwindcss init <br></br> npm run dev
        </p>
      </div>
      <div className="p-5 m-5 rounded-xl shadow-lg bg-lime-100 max-w-xl mx-auto">
        <div className="flex items-center mb-5">
          <input
            type="text"
            placeholder="Search coins"
            className="p-2 rounded-lg border border-gray-300 mr-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-slate-400 p-2 rounded-lg shadow-lg hover:bg-slate-500 text-white font-bold"
            onClick={() => setSearchQuery("")}
          >
            Clear
          </button>
        </div>
        {filteredData.map((coin) => (
          <div
            key={coin.id}
            className="bg-white rounded-lg shadow-lg p-5 m-5 flex items-center"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-20 h-20 rounded-full mr-5"
            />
            <div>
              <p className="text-lg font-bold">{coin.name}</p>
              <p className="text-gray-500">${coin.current_price}</p>
            </div>
          </div>
        ))}
        <div className="flex items-center mb-5">
          <input
            type="text"
            placeholder="Search new coin"
            className="p-2 rounded-lg border border-gray-300 mr-2"
            value={newCoin}
            onChange={(e) => setNewCoin(e.target.value)}
          />
          <button
            className="bg-slate-400 p-2 rounded-lg shadow-lg hover:bg-slate-500 text-white font-bold"
            onClick={handleNewCoinSearch}
          >
            Search
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {newCoins.map((coin) => (
          <div
            key={coin.id}
            className="bg-white rounded-lg shadow-lg p-5 m-5 flex items-center"
          >
            <img
              src={coin.image.small}
              alt={coin.name}
              className="w-20 h-20 rounded-full mr-5"
            />
            <div>
              <p className="text-lg font-bold">{coin.name}</p>
              <p className="text-gray-500">
                ${coin.market_data.current_price.usd}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
