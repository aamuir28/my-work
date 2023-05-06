function Plot({ plot, handleDelete, handleEdit }) {
    function deletePlot() {
      handleDelete(plot);
    }
  
    function editPlot() {
      handleEdit(plot);
    }
  
    return (
      <div className="row mb-2">
        <div className="col">ID</div>
        <div className="col">Name</div>
        <div className="col">Community ID</div>
   
        <div className="col">
          <div className="col">
            <button className="btn btn-danger me-2" onClick={deletePlot}>
              Delete
            </button>
            <button className="btn btn-info" onClick={editPlot}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Plot;
