import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/speciesService";

function ConfirmDeleteSpecies() {
    const [species, setSpecies] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        if(id) {
            findById(id)
                .then(setSpecies)
                .catch(() => navigate("/Species"));
        } else {
            navigate("/Species");
        }
    }, [id, navigate]);

    function handleDelete() {
        deleteById(species.speciesId)
            .finally(() => navigate("/Species"));
    }

    return (
        <>
            <div className="alert alert-danger">
                Are you sure you want to delete {species.commonName}?
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-danger me-2">Yes, delete</button>
                <Link to="/Species" className="btn btn-warning">No, cancel</Link>
            </div>
        </>
    );
}

export default ConfirmDeleteSpecies;