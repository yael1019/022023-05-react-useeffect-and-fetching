import React, { useState, useEffect } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"


function RaccoonsList() {
// SET STATE FOR THE RACCOON ARRAY THAT WE WILL CHANGE
// start with empty arrary so it doesn't break our code
  const [raccoonArr, setRaccoonArr] = useState([])
// FETCHING USING USE EFFECT
  useEffect(() => {
    console.log('hello');
    fetch('http://localhost:3002/raccoons')
      .then(response => response.json())
      .then(data => setRaccoonArr(data))

    return () => console.log('cleaning up!');
  }, [])
      // the empty array is a dependency array --> this will fire only once (when it MOUNTS)
// FUNCTION TO RESET RACCOONARR
  function addRaccoon(newRaccoonObj) {
    fetch('http://localhost:3002/raccoons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(newRaccoonObj)
    })
      .then(resp => resp.json())
      // raccoon from DB has an ID which is very important for key and for things like a DELETE request
      .then(newRaccoonFromDb => setRaccoonArr(raccoonArr => [...raccoonArr, newRaccoonFromDb]))
    // setRaccoonArr(raccoonArr => [...raccoonArr, newRaccoonObj])
  }
// MAPING THROUGH OUR ARRAY TO CREATE EACH RACCOON CARD
  const mappedRaccoons = raccoonArr.map(raccoon => <RaccoonCard key={ raccoon.id } raccoon={ raccoon }/>)

  return (
    <div className="raccoons-list border-black">

      <h2>🦝 Raccoons 🦝</h2>

      <RaccoonForm addRaccoon={ addRaccoon } />

      <div className="flex">

        { mappedRaccoons }

      </div>

    </div>
  )
}

export default RaccoonsList
