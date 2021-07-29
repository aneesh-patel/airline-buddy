import React, { useEffect } from 'react'


const SelectByAirport = ({ airports, rows, setAirport, airport }) => {
  useEffect(() => {
    let select = document.querySelector('#airports')
    if (airport === '') {
      select.value = 'all'
    }
  })
  const handleAirpotFilter = (event) => {
    if (event.target.value === 'all') {
      setAirport('')
    } else {
      setAirport(event.target.value)
    }
  }

  const isDisabled = (airportCode) => {
    for (let i = 0; i < rows.length; i ++) {
      if (rows[i].src === airportCode || rows[i].dest === airportCode) {
        return false
      }
    }
    return true
  }

  return (
    <div>
      <label htmlFor="airports">Choose an airport:</label>
      <select name='airports' id='airports' onChange={handleAirpotFilter} >
        <option value='all' id='airport-all'>all</option>
        {airports.map((airport) => {
          return <option key={airport.code} value={airport.code} disabled={isDisabled(airport.code)}>{airport.name}</option>
        })}
      </select>      
    </div>
  )
}

export default SelectByAirport
