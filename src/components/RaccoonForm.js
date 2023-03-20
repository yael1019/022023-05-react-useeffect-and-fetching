import React, { useState } from 'react'

function RaccoonForm(props) {

  function handleSubmit() {
    console.log('we want to add a new raccoon')
  }

  return (

    <form onSubmit={ handleSubmit }>

      <label>Name:</label>
      <input type="text" />

      <label>Favorite Food:</label>
      <input type="text" />

      <input type="submit" value={'Add New Raccoon'} />

    </form>

  )
}

export default RaccoonForm
