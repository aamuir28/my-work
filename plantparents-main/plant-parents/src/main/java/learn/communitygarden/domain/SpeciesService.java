package learn.communitygarden.domain;

import learn.communitygarden.data.SpeciesJdbcTemplateRepository;
import learn.communitygarden.models.Species;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpeciesService {

    private final SpeciesJdbcTemplateRepository repository;

    public SpeciesService(SpeciesJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<Species> findAll() {
        return repository.findAll();
    }

    public Species findById(int speciesId) {
        return repository.findById(speciesId);
    }

    public SpeciesResult add(Species species) {
        SpeciesResult speciesResult = validate(species);

        if (species != null && species.getSpeciesId() > 0) {
            speciesResult.addMessage("Species `id` should not be set.", ActionStatus.INVALID);
        }

        if (speciesResult.isSuccess()) {
            species = repository.add(species);
            speciesResult.setSpecies(species);
        }

        return speciesResult;
    }

    public SpeciesResult update(Species species) {
        SpeciesResult speciesResult = validate(species);

        if (species != null && species.getSpeciesId() > 0) {
            speciesResult.addMessage("Species `id` should not be set.", ActionStatus.INVALID);
        }

        species.normalize();

        if (speciesResult.isSuccess()) {
            if (repository.update(species)) {
                speciesResult.setSpecies(species);
            } else {
                speciesResult.addMessage(ActionStatus.NOT_FOUND, "Species id `" + species.getSpeciesId() + "` not found.");
            }
        }
        return speciesResult;
    }

    public SpeciesResult deleteById(int speciesId) {
        SpeciesResult speciesResult = new SpeciesResult();

        if (!repository.deleteById(speciesId)) {
            speciesResult.addMessage(ActionStatus.NOT_FOUND, "Species id `" + speciesId + "` not found.");
        }

        return speciesResult;
    }

    private SpeciesResult validate(Species species) {
        SpeciesResult speciesResult = new SpeciesResult();

        if (species == null) {
            speciesResult.addMessage(ActionStatus.INVALID, "Species cannot be null");
        }
        if (species.getCommonName() == null || species.getCommonName().isBlank()) {
            speciesResult.addMessage(ActionStatus.INVALID, "Species name is required.");
        }
        if (species.getWateringFrequency() == null || species.getWateringFrequency().isBlank()) {
            speciesResult.addMessage(ActionStatus.INVALID, "Watering frequency is required.");
        }
        return speciesResult;
    }
}
