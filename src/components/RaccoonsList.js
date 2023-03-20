import React, { useState } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"

// we are going to delete the raccoons in just a second....
const raccoonsData = [
  { id: 1, name: "Robert", favFood: "hamburgers" },
  { id: 2, name: "Rocket", favFood: "pizza" },
  { id: 3, name: "Rocky", favFood: "pizza" },
  { id: 4, name: "Red", favFood: "hamburgers" },
]

function RaccoonsList() {

  const [raccoons, setRaccoons] = useState(raccoonsData)

  return (
    <div className="raccoons-list border-black">

      <h2>Raccoons</h2>

      <RaccoonForm />

      <div className="flex">

        {/* Delete the card below and replace it with the raccoons array mapped onto cards */}
        <RaccoonCard name="Bob" favFood="pizza" />

      </div>

    </div>
  )
}

export default RaccoonsList
