import React from 'react'
import { useState, useEffect } from 'react'

const Table = ({ columns, rows, format, perPage }) => {
  const [page, setPage] = useState(1)
  const [currentStart, setCurrentStart] = useState(0)
  const [currentEnd, setCurrentEnd] = useState(perPage)
  const [currentRows, setCurrentRows] = useState(rows.slice(0, perPage))
  const maxPages = rows.length / perPage
  useEffect(() => {
    setCurrentRows(rows.slice(0, perPage))
  }, [rows, perPage]) 
  const handleNextPage = () => {
    if (page === maxPages) {
      return null
    }
    
    setCurrentRows(rows.slice(currentStart + perPage, currentEnd + perPage))
    setCurrentStart(currentStart + perPage)
    setCurrentEnd(currentEnd + perPage)
    setPage(page + 1)
  }

  const handlePreviousPage = () => {
    if (page === 1) {
      return null
    }
    
    setCurrentRows(rows.slice(currentStart - perPage, currentEnd - perPage))
    setCurrentStart(currentStart - perPage)
    setCurrentEnd(currentEnd - perPage)
    setPage(page - 1)
  }

  return (
    <div id='airline-table'>
      <h4>Page {page} - Showing {currentStart + 1} - {rows.length < perPage ? rows.length : currentEnd} routes of {rows.length}</h4>
      <table>
        <thead>
          <tr>
            {columns.map((c) => {
              return (
                <th key={c.property}>{c.name}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((route, index) => {
            return (
              <tr key={index}>
                {Object.keys(route).map((property) => {
                  return <td key={`${property} ${index}`}>{format(property, route[property])}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={handlePreviousPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  )
}

export default Table
