import React, { useState, useEffect } from 'react'
import ComicCard from "./ComicCard"
import ComicForm from "./ComicForm"

// to use the server do 'npm run server'
// server is running on 'http://localhost:3002'

function ComicsList() {
// SETTING STATE FOR COMICS ARRAY
  const [comicsArr, setComicsArr] = useState([])
// FETCHING OUR DATA
  useEffect(() => {
    fetch('http://localhost:3002/comics')
      .then(resp => resp.json())
      .then(data => setComicsArr(data));
  }, [])
// FUNCTION FOR RESETING STATE OF COMIC ARRAY
  function resetComicsArr(comicsObj) {
    fetch('http://localhost:3002/comics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(comicsObj)
    })
      .then(resp => resp.json())
      .then(data => setComicsArr([...comicsArr, data]))
  }

  // function handleDelete(comicId) {
  //   fetch(`http://localhost:3002/comics/`)
  //   setComicsArr(comicsArr.filter(comic => comic.id !== comicId))
  // }

// MAPPING THROUGH THE ARRAY TO MAKE COMIC CARDS
    const mappedArr = comicsArr.map(comic => <ComicCard key={ comic.id } comic={ comic } comicsArr={ comicsArr } setComicsArr={ setComicsArr } />)

  return (
    <div className="comics-list border-black">

      <h2>🦸 Comics 🦸</h2>

      <div className="flex">
        {mappedArr}
        {/* you'll need to fetch and map through the comics to show them */}

      </div>

      {/* once you've shown all the comics, set up the form below to add a new comic */}
      <ComicForm resetComicsArr={ resetComicsArr } />

      {/* as a bonus once you're done... */}
      {/* can you add a delete button to comic card to remove it from the comics array? */}

    </div>
  )
}

export default ComicsList
