function RaccoonCard({ name, favFood }) {
    return (
        <div className="border-black">
            <h2>Name: {name}</h2>
            <p>Favorite Food: {favFood}</p>
        </div>
    )
}

export default RaccoonCard
