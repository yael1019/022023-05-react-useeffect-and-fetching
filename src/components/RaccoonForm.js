import React, { useState } from 'react'

function RaccoonForm(props) {

  const [name, setName] = useState('')
  const [favFood, setFavFood] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log("let's add a new raccoon here")
  }

  const handleChangeName = (e) => setName(e.target.value)
  const handleChangeFood = (e) => setFavFood(e.target.value)

  return (

    <form onSubmit={ handleSubmit }>
      <label>Name:</label>
      <input type="text" onChange={handleChangeName} value={name} />
      <label>Favorite Food:</label>
      <input type="text" onChange={handleChangeFood} value={favFood} />
      <input type="submit" value={'Add New Raccoon'} />
    </form>

  )
}

export default RaccoonForm
