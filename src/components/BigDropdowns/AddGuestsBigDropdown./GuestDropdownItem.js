import React from 'react'
import '../bigDropdown.css'

const GuestDropdownItem = ({heading, subHeading}) => {
  return (
    <div className="big-dropdown-item">
        <div className="flex big-dropdown-action-item">
            <div>
                <div className="dropdown-item-heading">
                    {heading}
                </div>
                <div className="dropdown-item-subheading">
                    {subHeading}
                </div>
            </div>
            <div className="qtySelector">
                <button className="qtyBtn qtyDecrease disabled" type="button" disabled="" aria-label="decrease value" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button"><span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m2 16h28"></path></svg></span></button>
                <span aria-hidden="true" data-testid="stepper-adults-value">0</span>
                <button className="qtyBtn qtyDecrease disabled" type="button" disabled="" aria-label="decrease value" aria-describedby="searchFlow-title-label-stepper-adults" data-testid="stepper-adults-decrease-button"><span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="m2 16h28m-14-14v28"></path></svg></span></button>
            </div>
        </div>
    </div>
  )
}

export default GuestDropdownItem