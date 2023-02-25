import {useCallback, useEffect, useState} from "react";
import {CitiesList} from "./CitiesList";

const listOfCities = ['Beijing','Tokyo','Kinshasa','Moscow','Jakarta'];

export const Call = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(listOfCities);

  const handleClick = () => {
    setList([...list, name]);
    setName("");
  };

  useEffect(() => {
    console.log('started')
    setTimeout(() => {
      console.log('lets broke!')

      setList(null)
    }, 2000)
  }, [])

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleRemoveClick = useCallback((item) => {
    const filteredList = list.filter((listItem) => listItem !== item);

    setList(filteredList);
  }, []);

  console.log("Page render");

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <CitiesList list={list} onRemoveClick={handleRemoveClick} />
    </div>
  );
};