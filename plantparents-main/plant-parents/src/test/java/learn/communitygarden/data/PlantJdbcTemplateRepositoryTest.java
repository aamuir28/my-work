package learn.communitygarden.data;

import learn.communitygarden.models.Plant;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class PlantJdbcTemplateRepositoryTest {
    final static int NEXT_ID = 3;

    @Autowired
    PlantJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void findAll() {
        List<Plant> plant = repository.findAll();
        assertTrue(plant.size() >= 2);
    }

    @Test
    void shouldFindById() {
        Plant actual = repository.findById(2);
        assertNotNull(actual);
        assertEquals(2, actual.getPlantId());
    }

    @Test
    void shouldAdd() {
        Plant plant = makePlant();
        Plant actual = repository.add(plant);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getPlantId());
    }

    @Test
    void shouldUpdate() {
        Plant plant = makePlant();
        plant.setPlantId(2);
        assertTrue(repository.update(plant));
        plant.setPlantId(30);
        assertFalse(repository.update(plant));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(1));
        assertFalse(repository.deleteById(10));
    }

    Plant makePlant() {
        Plant plant = new Plant();
        plant.setDatePlanted(LocalDate.now());
        plant.setHarvestDate(null);
        plant.setDateLastWatered(LocalDate.now());
        plant.setWatered(true);
        plant.setSpeciesId(4);
        plant.setPlotId(1);
        return plant;
    }
}
