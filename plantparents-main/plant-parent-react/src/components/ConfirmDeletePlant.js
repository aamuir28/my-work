import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/plantService";

function ConfirmDeletePlant() {
    const [plant, setPlant] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        if(id) {
            findById(id)
                .then(setPlant)
                .catch(() => navigate("/Plant"));
        } else {
            navigate("/");
        }
    }, [id, navigate]);

    function handleDelete() {
        deleteById(plant.plantId)
            .finally(() => navigate(`/Community/${plant.communityId}/viewplot/${plant.plotId}`));
    }

    return (
        <>
            <div className="alert alert-danger">
                Are you sure you want to delete this plant?
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-danger me-2">Yes, delete</button>
                <Link to={`/Community/${plant.communityId}/viewplot/${plant.plotId}`} className="btn btn-warning">No, cancel</Link>
            </div>
        </>
    );
}

export default ConfirmDeletePlant;