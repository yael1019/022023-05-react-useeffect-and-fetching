import React, { useState } from 'react'

function ComicForm({ resetComicsArr }) {

  // STATE
  // const [name, setName] = useState('')
  // const [issue, setIssue] = useState('')
  // const [image_url, setImageURL] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    issue: '',
    image_url: ''
  })

  // EVENT HANDLERS
  // const handleChangeName = (e) => console.log('something happens here')
  // const handleChangeIssue = (e) => console.log('something happens here')
  // const handleChangeImage = (e) => console.log('something happens here')
  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

  function handleSubmit(e) {
    e.preventDefault();
    resetComicsArr({
      title: formData.title,
      issue: formData.issue,
      image_url: formData.image_url
    })
    setFormData({
      title: '',
      issue: '',
      image_url: ''
    })
  }

  return (

    <form className={"comic-form"} onSubmit={ handleSubmit }>
      <label>Name:</label>
      <input type="text" name='title' onChange={handleChange} value={formData.title} />
      <label>Issue Number:</label>
      <input type="text" name='issue' onChange={handleChange} value={formData.issue} />
      <label>Image URL:</label>
      <input type="text" name='image_url' onChange={handleChange} value={formData.image_url} />
      <input type="submit" value={'Add New Raccoon'} />
    </form>

  )
}

export default ComicForm
