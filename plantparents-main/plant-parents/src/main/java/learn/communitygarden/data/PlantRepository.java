package learn.communitygarden.data;

import learn.communitygarden.models.Plant;

import java.util.List;

public interface PlantRepository {
    List<Plant> findAll();

    Plant findById(int plantId);

    Plant add(Plant plant);

    boolean update(Plant plant);

    boolean deleteById(int plantId);
}
