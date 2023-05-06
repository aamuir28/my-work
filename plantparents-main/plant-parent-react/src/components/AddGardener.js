import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById, save } from "../services/gardenerService";
import { addGardenerToPlot } from "../services/plotService";

function AddGardener() {

    console.log("add gardener")

    const [currentGardener, setCurrentGardener] = useState({
        firstName: "",
        lastName: "",
    });
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { plotId, communityId } = useParams();


    function handleChange(evt) {
        const nextGardener = { ...currentGardener };
        nextGardener[evt.target.name] = evt.target.value;
        setCurrentGardener(nextGardener);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(currentGardener)
            .then(result => {
                addGardenerToPlot(plotId, result.gardenerId).finally(() => navigate("/Community"))  
            })
            .catch(errs => {
                if (errs) {
                    setErrors(errs);
                } else {
                    navigate("/");
                }
            });
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" id="firstName" name="firstName" className="form-control"
                    value={currentGardener.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="form-control"
                    value={currentGardener.lastName} onChange={handleChange} required />
            </div>

            <div>
                <button type="submit" className="btn btn-warning me-2 mt-2">Save</button>
                <Link to="/Community" className="btn btn-primary mt-2">Cancel</Link>
            </div>
            {errors.length > 0 && <div className="alert alert-danger mt-2">
                <ul>
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
        </form>
    );
}

export default AddGardener;