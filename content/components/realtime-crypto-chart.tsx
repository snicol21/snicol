import { useEffect, useRef, useState } from "react"
import { Line } from "react-chartjs-2"
import { formatData } from "../../shared/utils/format-data.util"

export const RealtimeCrypto = () => {
  const [currencies, setCurrencies] = useState([])
  const [pair, setPair] = useState("")
  const [price, setPrice] = useState("0.00")
  const [pastData, setPastData] = useState({})
  const ws = useRef(null)

  let first = useRef(false)
  const url = "https://api.pro.coinbase.com"

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com")
    let pairs = []

    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data))
      // console.log("pairs", pairs)
      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair
        }
      })
      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1
        }
        if (a.base_currency > b.base_currency) {
          return 1
        }
        return 0
      })

      // console.log(filtered)
      setCurrencies(filtered)

      first.current = true
    }
    apiCall()
  }, [])

  useEffect(() => {
    if (!first.current) {
      // console.log("returning on first render")
      return
    }

    // console.log("running pair change")
    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"],
    }
    let jsonMsg = JSON.stringify(msg)
    ws.current.send(jsonMsg)

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`
    const fetchHistoricalData = async () => {
      let dataArr = []
      await fetch(historicalDataURL)
        .then((res) => res.json())
        .then((data) => (dataArr = data))
      // console.log(dataArr)
      let formattedData = formatData(dataArr)
      setPastData(formattedData)
    }
    fetchHistoricalData()

    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data)
      if (data.type !== "ticker") {
        // console.log("non ticker event", e)
        return
      }
      if (data.product_id === pair) {
        // console.log(data.price)
        setPrice(data.price)
      }
    }
  }, [pair])

  useEffect(() => {
    return () => {
      ws.current.close()
    }
  }, [])

  const handleSelect = (e) => {
    let unsubscribeMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"],
    }
    let unsubscribe = JSON.stringify(unsubscribeMsg)
    ws.current.send(unsubscribe)
    setPair(e.target.value)
  }

  return (
    <div>
      <label htmlFor="currency" className="block text-sm font-medium">
        Currency
      </label>
      <select
        id="currency"
        name="currency"
        value={pair}
        onChange={handleSelect}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {currencies.map((cur, idx) => {
          return (
            <option key={idx} value={cur.id} className="dark:bg-gray-900">
              {cur.display_name}
            </option>
          )
        })}
      </select>
      <RealtimeCryptoChart price={price} data={pastData} />
    </div>
  )
}

export const RealtimeCryptoChart = ({ price, data }) => {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
  }
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>
  }
  return (
    <div>
      <h2>{`${price}`}</h2>
      <div className="h-96">
        <Line data={data} options={opts} />
      </div>
    </div>
  )
}
