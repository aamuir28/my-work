import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteById, findById } from "../services/communityService";

function ConfirmDeleteCommunity() {
    const [community, setCommunity] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            findById(id)
                .then(setCommunity)
                .catch(() => navigate("/Community"));
        } else {
            navigate("/Community");
        }
    }, [id, navigate]);

    function handleDelete() {
        deleteById(community.communityId)
            .finally(() => navigate("/Community"));
    }

    return (
        <>
            <div className="alert alert-danger">
                Are you sure you want to delete {community.name}?
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-danger me-2">Yes, delete</button>
                <Link to="/Community" className="btn btn-warning">No, cancel</Link>
            </div>
        </>
    );
}

export default ConfirmDeleteCommunity;