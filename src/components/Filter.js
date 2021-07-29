import React from 'react'

const Filter = ({setAirport, setAirline, setRows, routes, children}) => {
  const clearFilters = () => {
    setRows(routes)
    setAirport('')
    setAirline(0)
  }
  return (
    <div>
      <div>
        {children}
      </div>
      <button onClick={clearFilters}>clear filters</button>
    </div>
  )
}

export default Filter
