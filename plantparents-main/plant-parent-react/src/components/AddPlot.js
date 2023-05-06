import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findAll, save } from "../services/plotService";
import { findById as findCommunityById } from "../services/communityService";

function AddPlot() {

    const [currentPlot, setCurrentPlot] = useState({
        name: "",
        communityId: ""
    });
    const [errors, setErrors] = useState([]);
    const [wait, setWait] = useState(true);
    const [community, setCommunity] = useState(null);

    const navigate = useNavigate();
    const { communityId } = useParams();

    useEffect(() => {
        if (communityId) {
            setWait(true);
            Promise.all([
                findCommunityById(communityId),
                findAll(communityId),
            ])
                .then(([community]) => {
                    setCurrentPlot((prevPlot) => ({ ...prevPlot, communityId }));
                    setCommunity(community);
                    setWait(false);
                })
                .catch(() => navigate(`/Community/${communityId}`));
        }
    }, [communityId, navigate]);

    function handleChange(evt) {
        const nextPlot = { ...currentPlot };
        nextPlot[evt.target.name] = evt.target.value;
        setCurrentPlot(nextPlot);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(currentPlot)
            .then(() => navigate(`/Community/${communityId}`))
            .catch(errs => {
                if (errs) {
                    setErrors(errs);
                } else {
                    navigate(`/Community/${communityId}`);
                }
            });
    }

    if (wait) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="form-label">Plot Name</label>
                <input type="text" id="name" name="name" className="form-control"
                    value={currentPlot.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="communityName" className="form-label">Community Name</label>
                <input type="text" id="communityName" name="communityName" className="form-control"
                    value={community.name} readOnly disabled style={{ color: "gray" }}/>
            </div>
            <div>
                <button type="submit" className="btn btn-warning me-2 mt-2">Save</button>
                <Link to={`/Community/${communityId}`} className="btn btn-primary mt-2">Cancel</Link>
            </div>
            {errors.length > 0 && <div className="alert alert-danger mt-2">
                <ul>
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
        </form>
    );
}

export default AddPlot;