import React from 'react'

const Map = ({ rows, airports }) => {
  let trips = rows.map((route) => {
    let source = route.src
    let destination = route.dest
    let sourceAirport = airports.find(a => a.code === source)
    let destinationAirport = airports.find(a => a.code === destination)
    let x1 = sourceAirport.long
    let x2 = destinationAirport.long
    let y1 = sourceAirport.lat
    let y2 = destinationAirport.lat
    return {x1, x2, y1, y2}
  })
  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image xlinkHref="equirectangular_world.jpg" href="equirectangular_world.jpg" x="-180" y="-90" height="100%" width="100%" transform="scale(1 -1)"/>
        {trips.map((trip) => {
          return (
            <g key={`${Math.floor(Math.random() * 100000000)}`}>
              <circle className="source" cx={trip.x1} cy={trip.y1}>
                <title></title>
              </circle> 
              <circle className="destination" cx={trip.x1} cy={trip.y1}>
                <title></title>
              </circle>
              <path d={`M${trip.x1} ${trip.y1} L ${trip.x2} ${trip.y2}`} />
            </g>
          )
        })}
      </g>
    </svg>
  )
}

export default Map



