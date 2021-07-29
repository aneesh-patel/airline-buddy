import React from 'react'

const SelectByAirline = ({routes, airlines, setRows}) => {
  const getAirlineCodeByName = (name) => {
    return airlines.filter(a => a.name === name)[0].id
  }
  const handleAirlineFilter = (event) => {
    if (event.target.value === 'all') {
      setRows(routes)
    } else {
      let airline = event.target.value
      setRows(routes.filter(r => r.airline === getAirlineCodeByName(airline)))
    }
  }
  
  return (
    <div>
      <label htmlFor="airlines">Choose an airline:</label>
      <select name="airlines" id="airlines" onChange={handleAirlineFilter}>
        <option value='all'>all</option>
        {airlines.map((airline) => {
          return <option key={airline.id} value={airline.name}>{airline.name}</option>
        })}
      </select>
    </div>
  )
}

export default SelectByAirline
