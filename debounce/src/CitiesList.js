import React from "react";

export const CitiesList = React.memo(({list, onRemoveClick}) => {
  console.log("List render");

  return list.map((item) => {
    return <City key={item} city={item} onRemoveClick={onRemoveClick} />;
  });
});

export const City = ({city, onRemoveClick}) => {
  const handleCityClick = () => onRemoveClick(city);

  console.log("Element render");

  return <div onClick={handleCityClick}>{city}</div>;
};