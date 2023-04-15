import * as React from 'react'
import './searchBarExpanded.css'
import SearchExpandedFilters from '../../SearchExpandedFilters'
import AddGuestsBigDropdown from '../../BigDropdowns/AddGuestsBigDropdown.';
import SelectDestinationBigDropdown from '../../BigDropdowns/SelectDestinationBigDropdown';

const SearchBarExpanded = ({close, setSearchProcess, setParentSelectedTab}) => {
    const [selectedTab, setSelectedTab] = React.useState("");
    const divRef = React.useRef(null); // Ref to the div element
    const [clickedOutside, setClickedOutside] = React.useState(false); // State to track if clicked outside
  
    // Event handler for click events on the document
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        // Check if the clicked element is not inside the div
        setSelectedTab(""); // Update state to indicate clicked outside
      }
    };
  
    React.useEffect(() => {
      // Add click event listener when component mounts
      document.addEventListener("click", handleClickOutside);
  
      return () => {
        // Cleanup event listener when component unmounts
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);


    React.useEffect(() => {
      if(close == true) {
        setSearchProcess("BASIC");
      }
    }, [close]);

  return (
    <div className={`search-bar-filters-container`}>
        <SearchExpandedFilters />
            <div className={`search-bar-expanded-header ${selectedTab == "" ? 'unactive' : ''}`}>
        <div className="search-bar-expanded-header-content" ref={divRef}>
            <label className={`expanded-search-label ${selectedTab == "WHERE" ? 'active-label' : ''}`} onClick={() => setSelectedTab("WHERE")} data-code="WHERE">
                <div className="expanded-search-label-heading">Where</div>
                <input className="expanded-search-label-input borderless" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" id="bigsearch-query-location-input" name="query" aria-describedby="bigsearch-query-location-description" placeholder="Search destinations" data-testid="structured-search-input-field-query" value="" />
                {selectedTab == "WHERE" ? (
              <div className="fast-fade-up-animation">
                <SelectDestinationBigDropdown />
              </div>
            ) : (
              <></>
            )}
            </label>
            <div class="border-vertical-right"></div>
            <label className={`expanded-search-label ${selectedTab == "CHECKIN" ? 'active-label' : ''}`} onClick={() => setSelectedTab("CHECKIN")}>
                <div className="expanded-search-label-heading">Check in</div>
                <input className="expanded-search-label-input borderless" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" name="query" aria-describedby="bigsearch-query-location-description" placeholder="Add dates" data-testid="structured-search-input-field-query" value="" />
            </label>
            <div class="border-vertical-right"></div>
            <label className={`expanded-search-label ${selectedTab == "CHECKOUT" ? 'active-label' : ''}`} onClick={() => setSelectedTab("CHECKOUT")}>
                <div className="expanded-search-label-heading">Check Out</div>
                <input className="expanded-search-label-input borderless" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" name="query" aria-describedby="bigsearch-query-location-description" placeholder="Add dates" data-testid="structured-search-input-field-query" value="" />
            </label>
            <div class="border-vertical-right"></div>
            <label className={`expanded-search-label flex ${selectedTab == "WHO" ? 'active-label' : ''}`} onClick={() => setSelectedTab("WHO")} data-code="WHO">
                <div>
                <div className="expanded-search-label-heading">Who</div>
                <input className="expanded-search-label-input borderless" aria-autocomplete="none" autocomplete="off" autocorrect="off" spellcheck="false" name="query" aria-describedby="bigsearch-query-location-description" placeholder="Add guests" data-testid="structured-search-input-field-query" value="" />
                </div>
                <button className="search-btn search-btn-position only-desktop">
                    <div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    </div>
                    <span className="search-btn-text">Search</span>
                </button>
            </label>
            {selectedTab == "WHO" ? (
              <div className="fast-fade-up-animation">
                <AddGuestsBigDropdown />
              </div>
            ) : (
              <></>
            )}


        </div>
    </div>
    <div className="flex absoluted-center fixed-search-footer" style={{gap: 20}}>
        <button className="search-btn search-btn-position mobile-search-btn only-mobile">
                    <div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    </div>
                    <span className="search-btn-text">Search</span>
                </button>
                <button className="borderless link-hover-btn" onClick={() => setSearchProcess("SEARCH")}>
                  <div>
                    Cancel
                  </div>
                </button>
        </div>
    </div>
  )
}

export default SearchBarExpanded