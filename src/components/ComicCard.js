function ComicCard({ comic, comicsArr, setComicsArr }) {  

  function handleDelete(comicId) {
    fetch(`http://localhost:3002/comics/${comic.id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(data => setComicsArr(comicsArr.filter(comic => comic.id !== comicId)))
  }

  return (
    <div className="comic-card border-black">
      <h2>{ comic.title }</h2>
      <p>Issue No. { comic.issue }</p>
      <img src={ comic.image_url } alt={`image of ${comic.title}`} />
      <button onClick={ () => handleDelete(comic.id) }>DELETE</button>
    </div>
  )
}

export default ComicCard
