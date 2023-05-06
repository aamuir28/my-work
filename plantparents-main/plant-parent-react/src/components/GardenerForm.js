import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findById, save } from '../services/gardenerService';

function GardenerForm() {

    const [currentGardener, setCurrentGardener] = useState({
        firstName: "",
        lastName: "",
     });
    const [errors, setErrors] = useState([]);
    const [wait, setWait] = useState(true);
    const navigate = useNavigate();
    const { gardenerId } = useParams();

    useEffect(() => {
        if (gardenerId) {
            findById(gardenerId)
                .then(gardeners => {
                    setCurrentGardener(gardeners);
                    setWait(false);
                })
                .catch(() => navigate("/Community"));

        } else {
            setWait(false);
        }
    }, [gardenerId, navigate]);

    function handleChange(evt) {
        const nextGardener = { ...currentGardener };
        nextGardener[evt.target.name] = evt.target.value;
        setCurrentGardener(nextGardener);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(currentGardener)
            .then(() => navigate("/Community"))
            .catch(errs => {
                if (errs) {
                    setErrors(errs);
                } else {
                    navigate("/Community");
                }
            });
    }

    if (wait) {
        return null;
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
                    value={currentGardener.lastName} onChange={handleChange} />
            </div>
            <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <Link to="/Community" className="btn btn-warning">Cancel</Link>
            </div>
            {errors.length > 0 && <div className="alert alert-danger">
                <ul>
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
        </form>
    );
}

export default GardenerForm;