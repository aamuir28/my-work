import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findById, save } from '../services/plantService';
import { findAll as findAllSpecies } from '../services/speciesService';
import { findAll as findAllPlots } from '../services/plotService';

function PlantForm() {

    const [currentPlant, setCurrentPlant] = useState({
        datePlanted: "",
        harvestDate: "",
        dateLastWatered: "",
        watered: false,
        speciesId: "",
        plotId: ""
    });

    const [speciesList, setSpeciesList] = useState([]);
    const [plotList, setPlotList] = useState([]);
    const [errors, setErrors] = useState([]);
    const [wait, setWait] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            findById(id)
                .then(plant => {
                    setCurrentPlant(plant);
                    setWait(false);
                })
                .catch(() => navigate("/Plant"));

        } else {
            setWait(false);
        }
    }, [id, navigate]);

    useEffect(() => {
        Promise.all([
            findAllSpecies(),
            findAllPlots()
        ])
            .then(([species, plots]) => {
                setSpeciesList(species);
                setPlotList(plots);
            })
            .catch(err => console.error(err));
    }, []);

    function handleChange(evt) {
        const nextPlant = { ...currentPlant };
        if (evt.target.name === "watered") {
            nextPlant[evt.target.name] = evt.target.checked;
        } else {
            nextPlant[evt.target.name] = evt.target.value;
        }
        setCurrentPlant(nextPlant);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(currentPlant)
            .then(() => navigate("/Plant"))
            .catch(errs => {
                if (errs) {
                    setErrors(errs);
                } else {
                    navigate("/Plant");
                }
            });
    }

    if (wait) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="speciesId" className="form-label">Species</label>
                <select id="speciesId" name="speciesId" className="form-control"
                    value={currentPlant.speciesId} onChange={handleChange} required>
                    <option value="">-- Select Species --</option>
                    {speciesList.map(species => (
                        <option key={species.speciesId} value={species.speciesId}>
                            {species.commonName}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="plotId" className="form-label">Plot</label>
                <select id="plotId" name="plotId" className="form-control"
                    value={currentPlant.plotId} onChange={handleChange} required>
                    <option value="">-- Select Plot --</option>
                    {plotList.map(plot => (
                        <option key={plot.plotId} value={plot.plotId}>
                            {plot.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="datePlanted" className="form-label">Date Planted</label>
                <input type="date" id="datePlanted" name="datePlanted" className="form-control"
                    value={currentPlant.datePlanted} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="harvestDate" className="form-label">Harvest Date</label>
                <input type="date" id="harvestDate" name="harvestDate" className="form-control"
                    value={currentPlant.harvestDate} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="dateLastWatered" className="form-label">Date Last Watered</label>
                <input type="date" id="dateLastWatered" name="dateLastWatered" className="form-control"
                    value={currentPlant.dateLastWatered} onChange={handleChange} />
            </div>
            <div className="form-check my-2">
                <input className="form-check-input" type="checkbox" id="watered" name="watered"
                    checked={currentPlant.watered} onChange={handleChange} />
                <label className="form-check-label" htmlFor="watered">
                    Has Been Watered?
                </label>
            </div>
            <div className="mt-2">
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <Link to="/Species" className="btn btn-warning">Cancel</Link>
            </div>
            {errors.length > 0 && <div className="alert alert-danger">
                <ul>
                    {errors.map(err => <li key={err}>{err}</li>)}
                </ul>
            </div>}
        </form>
    );
}

export default PlantForm;