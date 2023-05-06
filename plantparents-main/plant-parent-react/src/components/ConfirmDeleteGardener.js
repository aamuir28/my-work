import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/gardenerService";

function ConfirmDeleteGardener() {
    const [gardener, setGardener] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        if(id) {
            findById(id)
                .then(setGardener)
                .catch(() => navigate(`/Community/${gardener.communityId}`));
        } else {
            navigate(`/Community/${gardener.communityId}`);
        }
    }, [id, navigate]);

    function handleDelete() {
        deleteById(gardener.gardenerId)
            // .finally(() => navigate(`/Community/${gardener.communityId}`));
            .finally(() => navigate("/Community"))
    }

    return (
        <>
            <div className="alert alert-danger">
                Are you sure you want to delete gardener {gardener.firstName} {gardener.lastName}?
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-danger me-2">Yes, delete</button>
                <Link to={`/Community/${gardener.communityId}`} className="btn btn-warning">No, cancel</Link>
            </div>
        </>
    );
}

export default ConfirmDeleteGardener;