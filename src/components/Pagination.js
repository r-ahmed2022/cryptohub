import React from 'react'

export default function Pagination({totalCoins, coinsPerPage}) {

    const coinNumbers = [];
    for(let i =0; i <= Math.ceil(totalCoins / coinsPerPage); i++)
       coinNumbers.push(i)
  return (
    <ul className="pagination">
         {
            coinNumbers.map(number => {
            return <li>
            <a href="!#">
            {number}
            </a>
            </li>
         })
         }
    </ul>
  )
}
