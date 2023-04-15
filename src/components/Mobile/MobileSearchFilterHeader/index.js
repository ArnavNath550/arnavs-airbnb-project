import React from 'react'
import '../../SearchFilterHeader/searchFilterHeader.css'
import './mobileSearchFilterHeader.css'
import SearchBarExpanded from '../../SearchFilterHeader/SearchBarExpanded'

const MobileSearchFilterHeader = () => {
    const [searchProcess, setSearchProcess] = React.useState("BASIC");
  return (
    <div className={`header-nav ${searchProcess == "FILTER" ? "header-mobile-expand" : ""}`}>
        {searchProcess == "FILTER" ? (
            <SearchBarExpanded close={false} setSearchProcess={setSearchProcess} />
        ) : (
            
                <header className={`search-filter-header`} onClick={() => setSearchProcess("FILTER")}>  
        <button className="search-input-container borderless flex">
            <div className="flex" style={{alignItems: "center", justifyContent: "center", gap: 12}}>
            <div className="search-icon">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>
            </div>
            <div className="flex search-location-details">
                <div className="search-location-text">Anywhere</div>
                <div className="search-location-meta flex">
                    <div className="search-timing">Any week</div>
                    <div aria-hidden="true">•</div>
                    <div className="search-guests">Add guests</div>
                </div>
            </div>
            </div>
            <button className="borderless">
                <div className="search-filter-icon">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                </div>  
            </button>
        </button>
    </header>
        )}

    </div>
  )
}

export default MobileSearchFilterHeader