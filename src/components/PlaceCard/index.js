import React from 'react'
import './placeCard.css'
import PlaceCarousel from '../PlaceCarousel'

const PlaceCard = ({data}) => {
  return (
    <div className="place-card">

            {/* <img  aria-hidden="true" elementtiming="LCP-target" fetchpriority="high" loading="eager" src="https://a0.muscache.com/im/pictures/8ea1bfbb-c74c-44e9-8bd3-fc219fea5dde.jpg?im_w=720" data-original-uri="https://a0.muscache.com/im/pictures/8ea1bfbb-c74c-44e9-8bd3-fc219fea5dde.jpg?im_w=720" /> */}
            <PlaceCarousel images={[data.image]}/>
            <div className="place-card-info">
                <div className="place-type-name">
                    {data.place_type}
                </div>
                <div className="place-details">
                    <div className="place-title-name">
                        {data.place_name}
                    </div>
                    <div className="place-beds-value">
                        {data.place_bed_value}
                    </div>
                    <div className="place-availability-dates">
                    {data.place_available_dates}
                    </div>
                    <div className="place-price">
                        {data.place_price}
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PlaceCard