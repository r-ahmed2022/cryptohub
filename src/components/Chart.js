import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../Context"
import { Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import {CircularProgress} from "@mui/material"


export default function Chart(props) {
    const days = 7
    const {currency} = useContext(Context)
    const [chartData, setchartData] = useState();
    const [flag,setflag] = useState(false);
    const url = `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=${currency}&days=${days}`;

   useEffect(() => {
           fetch(url)
           .then(response => response.json())
           .then(data => {
            setflag(true);
            setchartData(data?.prices)
           })
           .catch(err => console.log(err.message))
           return () => {
            console.log("component unmounted")
           }
   }, [currency])
  return (
    <div className="chart">
            {
                !chartData | flag === false ? (<CircularProgress
            style={{ color: "#BAFE03",
                      display: "flex",
                      "justifyContent": "center",
                      "alignItems": "center" }}
            size={250}
            thickness={1}
          /> ) : (
             <>
           <Line
              data={{
                labels: chartData.map((coin) => {
                  let date = new Date(coin[0]);
                  return  date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chartData.map((coin) => coin[1]),
                    label: `Price in past ${days} Days  in ${currency}`,
                    backgroundColor: "#BAFE03",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            </>
           ) }
    </div>
  )
}
