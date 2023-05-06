package learn.communitygarden.domain;

import learn.communitygarden.data.PlantJdbcTemplateRepository;
import learn.communitygarden.models.Plant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantService {

    private final PlantJdbcTemplateRepository repository;

    public PlantService(PlantJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<Plant> findAll() {
        return repository.findAll();
    }

    public Plant findById(int plantId) {
        return repository.findById(plantId);
    }

    public PlantResult add(Plant plant) {
        PlantResult plantResult = validate(plant);

        if (plant != null && plant.getPlantId() > 0) {
            plantResult.addMessage("Plant `id` should not be set.", ActionStatus.INVALID);
        }

        if (plantResult.isSuccess()) {
            plant = repository.add(plant);
            plantResult.setPlant(plant);
        }

        return plantResult;
    }

    public PlantResult update(Plant plant) {
        PlantResult plantResult = validate(plant);

        if (plant != null && plant.getPlantId() > 0) {
            plantResult.addMessage("Plant `id` should not be set.", ActionStatus.INVALID);
        }

        if (plantResult.isSuccess()) {
            if (repository.update(plant)) {
                plantResult.setPlant(plant);
            } else {
                plantResult.addMessage(ActionStatus.NOT_FOUND, "Plant id `" + plant.getPlantId() + "` not found.");
            }
        }

        return plantResult;
    }

    public PlantResult deleteById(int plantId) {
        PlantResult plantResult = new PlantResult();

        if (!repository.deleteById(plantId)) {
            plantResult.addMessage(ActionStatus.NOT_FOUND, "Plant id `" + plantId + "` not found.");
        }

        return plantResult;
    }

    private PlantResult validate(Plant plant) {
        PlantResult plantResult = new PlantResult();

        if (plant == null) {
            plantResult.addMessage(ActionStatus.INVALID, "Plant cannot be null.");
        }
        if (plant.getDatePlanted() == null) {
            plantResult.addMessage(ActionStatus.INVALID, "Date planted is required.");
        }

        return plantResult;
    }
}
