import React from 'react';
import './App.css';
import data from './data'
import { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table'
import { useState } from 'react'
import SelectByAirline from './components/SelectByAirline';

const App = () => {
  
  const [rows, setRows] = useState(data.routes)
  const routes = data.routes
  const airlines = data.airlines
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
    <section>
      <p>
        Welcome to the app!
      </p>
      <SelectByAirline routes={routes} airlines={airlines} setRows={setRows} />
      <Table className='routes-table' columns={columns} rows={rows} format={formatValue} perPage={25} />
    </section>
  </div>
  )
}

export default App;