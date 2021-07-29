import React from 'react';
import './App.css';
import data from './data'
import { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import Filter from './components/Filter'
import Map from './components/Map'
import { useState, useEffect } from 'react'
import SelectByAirline from './components/SelectByAirline';
import SelectByAirport from './components/SelectByAirport'


const App = () => {
  const [rows, setRows] = useState(data.routes)
  const [airline, setAirline] = useState(0)
  const [airport, setAirport] = useState('')
  const routes = data.routes
  useEffect(() => {
    if (airport === '' && airline === 0) {
      setRows(routes)
    } else {
      if (airport === '') {
        setRows(routes.filter((route) => {
          return route.airline === airline
        }))
      } else if (airline === 0) {
        setRows(routes.filter((route) => {
          return route.src === airport || route.dest === airport
        }))
      } else {
        setRows(routes.filter((route) => {
          return ((route.airline === airline) && (route.src === airport || route.dest === airport))
        }))
      }
    }
  }, [airport, airline, routes])
  const airlines = data.airlines
  const airports = data.airports
  const formatValue = (property, value) => {
    if (property === 'src' || property === 'dest') {
      return getAirportByCode(value)
    } else if (property === 'airline') {
      return (getAirlineById(value))
    }
  }

  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];


  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <div id='map'>
        <Map rows={rows} airports={airports} />
      </div>
      
      <section>
        <p>
          Welcome to the app!
        </p>
        <Filter setRows={setRows} routes={routes} setAirport={setAirport} setAirline={setAirline}>
          <SelectByAirline airlines={airlines} rows={rows} setAirline={setAirline} airline={airline}/>
          <SelectByAirport airports={airports} rows={rows} setAirport={setAirport} airport={airport} />
        </Filter>
        <Table className='routes-table' columns={columns} rows={rows} format={formatValue} perPage={25} />
      </section>
    </div>
  )
}

export default App;