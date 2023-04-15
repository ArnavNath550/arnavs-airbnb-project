import React from 'react'
import '../bigDropdown.css'
import GuestDropdownItem from './GuestDropdownItem'

const AddGuestsBigDropdown = () => {
  return (
    <div className="big-dropdown-container" style={{right: 0}}>
        <GuestDropdownItem heading="Adults" subHeading="Ages 13 or above" />
        <GuestDropdownItem heading="Children" subHeading="Ages 2 - 12" />
        <GuestDropdownItem heading="Infants" subHeading="Under 2" />
        <GuestDropdownItem heading="Pets" subHeading="Bring your pyaari pet along" />
    </div>
  )
}

export default AddGuestsBigDropdown