import React from 'react'
import './searchExpandedFilters.css'

const SearchExpandedFilters = () => {
  return (
    <div className="expanded-filters-tab">
        <button className="expanded-filter-tab active borderless">
            <span>Stays</span>
        </button>
        <button className="expanded-filter-tab borderless">
            <span>Experiences</span>
        </button>
        <button className="expanded-filter-tab borderless">
            <span>Online Experiences</span>
        </button>
    </div>
  )
}

export default SearchExpandedFilters