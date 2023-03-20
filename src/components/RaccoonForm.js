import React, { useState } from 'react'

function RaccoonForm({ addRaccoon }) {
// SETTING STATE FOR THE FORM
  const [formData, setFormData] = useState({
    name: '',
    favFood: ''
  })
// FUNCTION FOR CHANGING STATE
const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
  // const handleChangeName = (e) => setFormData({...formData, name: e.target.value});
  // const handleChangeFavFood = (e) => setFormData({...formData, favFood: e.target.value});
//FUNCTION TO HANDLE SUBMIT OF THE FORM
  function handleSubmit(e) {
    e.preventDefault();
    addRaccoon(formData)
  }

  return (

    <form onSubmit={ handleSubmit }>

      <label>Name:</label>
      <input type="text" onChange={ handleChange } value={ formData.name } name='name' />

      <label>Favorite Food:</label>
      <input type="text" onChange={ handleChange } value={ formData.favFood } name='favFood' />

      <input type="submit" value={'Add New Raccoon'} />

    </form>

  )
}

export default RaccoonForm
