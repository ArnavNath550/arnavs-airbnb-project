import React from 'react'
import '../bigDropdown.css'
import DestinationDropdownItem from './DestinationDropdownItem'

const SelectDestinationBigDropdown = () => {
  const [mapLocations, setMapLocations] = React.useState([
    'Koramangala, Bengaluru',
    'Koramangala 5th Block, Bengaluru',
    'Koramangala 4th Block, Bengaluru',
    'Koramangala 8th Block Bengaluru',
    'HSR Layout Sector 2, 1st Stage, BTM Layout, Bengaluru, Karanataka'
  ])
  return (
    <div className="big-dropdown-container" style={{left: 0}}>
        {mapLocations.map((y) => {
          return <DestinationDropdownItem destinationLabel={y} />;
        })}
    </div>
  )
}

export default SelectDestinationBigDropdown