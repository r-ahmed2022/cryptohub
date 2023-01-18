import React from 'react'

const Pagination = ({coins, coinsPerPage, onclick}) => {
       const pageNumbers = []
    for(let j = 1; j <= Math.ceil( coins?.length / coinsPerPage); j++)
    {
       pageNumbers.push(j)
    }
  return (
     
          <ul className="pagination">
         {
            pageNumbers.map(number => (
             <li key={number}>
            <a href="!#" onClick={() => onclick(number)}>
            {number}
            </a>
            </li>
            ))
         }
    </ul>

  )
}

export default Pagination
