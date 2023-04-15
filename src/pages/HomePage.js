import * as React from 'react'
import SearchFilterHeader from '../components/SearchFilterHeader'
import MobileSearchFilterHeader from '../components/Mobile/MobileSearchFilterHeader'
import SearchFilterOptions from '../components/SearchFilterOptions'
import MobileBottomNav from '../components/Mobile/MobileBottomNav'
import AnimatedMapFooter from '../components/AnimatedMapFooter'
import PlacesGrid from '../components/PlacesGrid'
import OverlayShadow from '../components/OverlayShadow'
import '../common/styles/navigation.css'
import Footer from '../components/Footer'
import RepoPromotionalHeader from '../components/RepoPromotionalHeader'

const HomePage = () => {
    const [show, setShow] = React.useState(false);
    const [selectedTab, setSelectedTab] = React.useState("");

    const [searchProcess, setSearchProcess] = React.useState("BASIC");
  
    React.useEffect(() => {
      let timeoutId; // Variable to store timeout ID
    
      const handleScroll = () => {
        // Clear previous timeout
        clearTimeout(timeoutId);
    
        // Set a new timeout to run the scroll logic after a delay (e.g. 100ms)
        timeoutId = setTimeout(() => {
          // Calculate the scroll position
          const scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
          // Update the class based on the scroll position
          if (scrollPosition > 0) {
            setSearchProcess("BASIC");
          } else {
            
          }
        }, 100); // Change the delay value as needed
      };
    
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
    
      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
      <RepoPromotionalHeader />
      <div className='only-desktop desktop-nav'>
        <SearchFilterHeader close={show} searchProcess={searchProcess} setSearchProcess={setSearchProcess} setSelectedTab={setSelectedTab} />
        <SearchFilterOptions />
      </div>
      <div className='only-mobile'>
        <MobileSearchFilterHeader />
        <SearchFilterOptions />
        <MobileBottomNav hide={show} />
      </div>

      <div>
        <div className="gyanContainer">
          <div className="page-header fade-up-animation">
            Let's find your dream B&B
          </div>
          <PlacesGrid />
          <Footer />
        </div>
      </div>
      <AnimatedMapFooter show={show} />
    </>
  )
}

export default HomePage