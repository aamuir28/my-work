import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/plotService";

function ConfirmDeletePlot() {
    const [plot, setPlot] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            findById(id)
                .then(setPlot)
                .catch(() => navigate(`/Community/${plot.communityId}`));
        } else {
            navigate(`/Community/${plot.communityId}`);
        }
    }, [id, navigate]);

    function handleDelete() {
        deleteById(plot.plotId)
            .finally(() => navigate(`/Community/${plot.communityId}`));
    }

    return (
        <>
            <div className="alert alert-danger">
                Are you sure you want to delete {plot.name}?
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-danger me-2">Yes, delete</button>
                <Link to={`/Community/${plot.communityId}`} className="btn btn-warning">No, cancel</Link>
            </div>
        </>
    );
}

export default ConfirmDeletePlot;
