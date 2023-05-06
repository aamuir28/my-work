function Species({ species }) {
    return (
        <div className="col">
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Name:</b> {species.name}</div>
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Classification:</b> {species.classification}</div>
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Designation:</b> {species.designation}</div>
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Skin Colors:</b> {species.skin_colors}</div>
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Hair Colors:</b> {species.hair_colors}</div>
            <div className="col mb-2" style={{ fontSize: '20px' }}><b>Average Lifespan:</b> {species.average_lifespan}</div>
            <div className="col" style={{ fontSize: '20px' }}><b>Language:</b> {species.language}</div>
        </div>
    )
}

export default Species;