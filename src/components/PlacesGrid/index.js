import React from 'react'
import './placesGrid.css'
import PlaceCard from '../PlaceCard'

const PlacesGrid = () => {
  const [placesData, setPlacesData] = React.useState([
    {
        "id": 0,
        "image": "https://a0.muscache.com/im/pictures/92d62573-a02a-450e-8d85-b88d48713025.jpg?im_w=720",
        "place_type": "Apartments in Bengaluru",
        "place_title": "Aurora - Bright 1 Bedroom",
        "place_bed_value": "1 bed",
        "place_available_dates": "15-20 Apr",
        "place_price": "₹2,852 night"
    },
    {
        "id": 1,
        "image": "https://a0.muscache.com/im/pictures/cc4cc353-1b8a-4dd2-8b10-d93686816ce0.jpg?im_w=720",
        "place_type": "Flats in Bengaluru",
        "place_title": "Lovely 1BHK Apartement Near...",
        "place_bed_value": "1 bed",
        "place_available_dates": "22-27 May",
        "place_price": "₹2,990 night"
    },
    {
        "id": 2,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-613361008155710032/original/6706832a-6c06-4606-8d57-8957c005e8c8.jpeg?im_w=720",
        "place_type": "Private room in Bengaluru",
        "place_title": "Beautiful room with balcony in...",
        "place_bed_value": "1 bed",
        "place_available_dates": "17-22 Apr",
        "place_price": "₹1,700 night"
    },
    {
        "id": 3,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-50714086/original/0fdad940-2b7f-4d02-91fc-5ca4f542c92e.jpeg?im_w=720",
        "place_type": "Apartments in Bengaluru",
        "place_title": "1BHK balcony - Service...",
        "place_bed_value": "2 beds",
        "place_available_dates": "19-25 Apr",
        "place_price": "₹3,523 night"
    },
    {
        "id": 4,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-27640066/original/85656afa-1350-4230-bc0e-7ed48291eb08.jpeg?im_w=720",
        "place_type": "Private room in Bengaluru",
        "place_title": "Grace Inn",
        "place_bed_value": "1 king bed",
        "place_available_dates": "30 Apr - 7 May",
        "place_price": "₹942 night"
    },
    {
        "id": 5,
        "image": "https://a0.muscache.com/im/pictures/e4972e28-b031-4cdf-901d-0d976e1b2dd1.jpg?im_w=720",
        "place_type": "Flats in Bengaluru",
        "place_title": "RJs Luxury penthouse - stay...",
        "place_bed_value": "1 double bed",
        "place_available_dates": "10-15 May",
        "place_price": "₹2,281 night"
    },
    {
        "id": 6,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-801045103479213294/original/6ffd0f27-afe1-49d8-9703-a93559b2b226.jpeg?im_w=720",
        "place_type": "Private room in Bengaluru",
        "place_title": "Luxury Private Room-Koramangala",
        "place_bed_value": "1 bed",
        "place_available_dates": "4-9 May",
        "place_price": "₹2,967 night"
    },
    {
        "id": 7,
        "image": "https://a0.muscache.com/im/pictures/f220123b-4133-49d2-a5fe-2ca0ee88d37c.jpg?im_w=720",
        "place_type": "Flat in Ejipura",
        "place_title": "Jini Spaces",
        "place_bed_value": "2 single beds",
        "place_available_dates": "1-6 May",
        "place_price": "₹2,168 night"
    },
    {
        "id": 8,
        "image": "https://a0.muscache.com/im/pictures/ae4fc3cd-e1d0-425f-8810-f40fd2bdf899.jpg?im_w=720",
        "place_type": "Flat in Koramangala",
        "place_title": "Little Brazil | Sparkling Clean | Be...",
        "place_bed_value": "2 beds",
        "place_available_dates": "16-21 Apr",
        "place_price": "₹1,941 night"
    },
    {
        "id": 9,
        "image": "https://a0.muscache.com/im/pictures/92d62573-a02a-450e-8d85-b88d48713025.jpg?im_w=720",
        "place_type": "Apartments in Bengaluru",
        "place_title": "Aurora - Bright 1 Bedroom",
        "place_bed_value": "1 bed",
        "place_available_dates": "15-20 Apr",
        "place_price": "₹2,852 night"
    },
    {
        "id": 10,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-52565715/original/53a519ec-deb0-44c2-97b5-7135c6cc4c74.jpeg?im_w=720",
        "place_type": "Private room in BTM...",
        "place_title": "COUPLE FRIENDLY | Stylish...",
        "place_bed_value": "1 bed",
        "place_available_dates": "15-22 Apr",
        "place_price": "₹1,294 night"
    },
    {
        "id": 11,
        "image": "https://a0.muscache.com/im/pictures/miso/Hosting-842414527326328418/original/0fa39e01-dff7-4032-9d27-1e6b2402bb84.jpeg?im_w=720",
        "place_type": "Flat in Maldivala",
        "place_title": "Aurum Service - Apartement ...",
        "place_bed_value": "2 beds",
        "place_available_dates": "15-20 Apr",
        "place_price": "₹2,844 night"
    }
]);

  return (
    <div className="places-grid">
      {placesData.map((y) => {
        return <PlaceCard data={y}/>
      })}
    </div>
  )
}

export default PlacesGrid