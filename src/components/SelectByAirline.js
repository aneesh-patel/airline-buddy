import React, { useEffect } from 'react'

const SelectByAirline = ({ airlines, rows, airline, setAirline}) => {
  useEffect(() => {
    let select = document.querySelector('#airlines')
    if (airline === 0) {
      select.value = 'all'
    }
  }, [airline])

  const handleAirlineFilter = (event) => {
    if (event.target.value === 'all') {
      setAirline(0)
    } else {
      setAirline(Number(event.target.value))
    }
  }

  const isDisabled = (airline) => {
    for (let i = 0; i < rows.length; i ++) {
      if (rows[i].airline === Number(airline)) {
        return false
      }
    }
    return true
  }

  return (
    <div>
      <label htmlFor="airlines">Choose an airline:</label>
      <select name="airlines" id="airlines" onChange={handleAirlineFilter}>
        <option value='all'>all</option>
        {airlines.map((airline) => {
          return <option key={airline.id} value={airline.id} disabled={isDisabled(airline.id)}>{airline.name}</option>
        })}
      </select>
    </div>
  )
}

export default SelectByAirline
