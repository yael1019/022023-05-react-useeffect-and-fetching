import React from 'react'
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

  return (
    <div className="raccoons-list border-black">

      <h2>🦝 Raccoons 🦝</h2>

      <RaccoonForm />

      <div className="flex">

        {/* Delete the card below and replace it with the mapped raccoons */}
        <RaccoonCard raccoon={ raccoonsData[0] } />

      </div>

    </div>
  )
}

export default RaccoonsList
