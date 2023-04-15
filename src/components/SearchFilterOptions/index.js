import React from 'react'
import SearchFilterItem from '../SearchFilterItem'
import './searchFilterOptions.css'


const SearchFilterOptions = () => {
    const [active, setActive] = React.useState(0);
    const [filterOptions, setFilterOptions] = React.useState([
        {
            'id': 0,
            'image': 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            'name': 'Amazing Views'
        },
        {
            'id': 1,
            'image': 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
            'name': 'Tiny Homes'
        },
        {
            'id': 2,
            'image': 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
            'name': 'Beachfront'
        },
        {
            'id': 3,
            'image': 'https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg',
            'name': 'Windmills'
        },
        {
            'id': 4,
            'image': 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
            'name': 'Design'
        },
        {
            'id': 5,
            'image': 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
            'name': 'Private Rooms'
        },
        {
            'id': 6,
            'image': 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
            'name': 'Tree houses'
        },
        {
            'id': 7,
            'image': 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
            'name': 'OMG!'
        },
        {
            'id': 8,
            'image': 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
            'name': 'Cabins'
        },
        {
            'id': 9,
            'image': 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
            'name': 'Mansions'
        },
        {
            'id': 10,
            'image': 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
            'name': 'Luxe'
        },
        {
            'id': 11,
            'image': 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
            'name': 'Countryside'
        },
        {
            'id': 12,
            'image': 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
            'name': 'Trending'
        },
    ]);

  return (
    <div className="search-filter-options-container flex absoluted-center">
        {filterOptions.map((y) => {
            return <SearchFilterItem data={y} setActive={setActive} active={active == y.id} />
        })}
       
    </div>
  )
}

export default SearchFilterOptions