import React from 'react';

const LocationList = ({ attractionList, searchInput }) => {
  searchInput = searchInput.toLowerCase();
  const locationList = attractionList
    .filter((item) => item.title.toLowerCase().includes(searchInput))
    .map((filteredItem) => (
      <a key={`place${filteredItem.title}`} href={`url_jak_bedzie_w_dummyData`}>
        {filteredItem.title}
      </a>
    ))
    .slice(0, 5);

  return <div className='searchbar__result'>{locationList}</div>;
};

export default LocationList;
