import React from 'react'
import '../searchFilterHeader.css'


const SearchFilterSearchBar = () => {
  return (
<div className="search-filters-tabs">
          <button className="padding-btn search-filter-tab-button">
            <span className="active-text">Anywhere</span>
          </button>
          <span class="vertical-divider"></span>
          <button className="padding-btn search-filter-tab-button">
            <span className="active-text">Any Week</span>
          </button>
          <span class="vertical-divider"></span>
          <button className="padding-btn search-filter-tab-button">
            <span>Add Guests</span>
          </button>
          <div className="search-filter-btn">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
          </div>
        </div>
  )
}

export default SearchFilterSearchBar