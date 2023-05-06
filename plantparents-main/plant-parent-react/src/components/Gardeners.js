function Gardeners({ gardener, handleDelete, handleEdit }) {
    function deleteGardeners() {
      handleDelete(gardener);
    }
  
    function editGardeners() {
      handleEdit(gardener);
    }
  
    return (
      
      <div className="row mb-2">
        <div className="col">First Name</div>
        <div className="col">Last Name</div>
        <div className="col">
          <div className="col">
            <button className="btn btn-danger me-2" onClick={deleteGardeners}>
            🗑️
            </button>
            <button className="btn btn-info" onClick={editGardeners}>
            📝
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Gardeners;
  