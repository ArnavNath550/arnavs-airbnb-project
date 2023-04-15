import React from 'react'
import './searchFilterItem.css'

const SearchFilterItem = ({data, setActive, active}) => {
  return (
    <div className={`search-filter-item ${active == true ? 'active' : ''}`} onClick={() => setActive(data.id)}>
        <img class="search-filter-image" src={`${data.image}`} alt="" width="24" height="24" />
        <div className={`search-filter-name ${active == true ? 'active': ''}`}>{data.name}</div>
    </div>
  )
}

export default SearchFilterItem