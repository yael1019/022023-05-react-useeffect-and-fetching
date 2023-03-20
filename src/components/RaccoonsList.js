import React, { useState } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"


// we are going to delete the raccoonsData in just a second.... //
const raccoonsData = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]
// delete the above ^^^ //


function RaccoonsList() {
// SET STATE FOR THE RACCOON ARRAY THAT WE WILL CHANGE
  const [raccoonArr, setRaccoonArr] = useState(raccoonsData)
// FUNCTION TO RESET RACCOONARR
  function addRaccoon(newRaccoonObj) {
    setRaccoonArr(raccoonArr => [...raccoonArr, newRaccoonObj])
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
