package learn.communitygarden.data;

import learn.communitygarden.models.Species;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SpeciesJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 24;

    @Autowired
    SpeciesJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void findAll() {
        List<Species> species = repository.findAll();
        assertTrue(species.size() >= 4);
    }

    @Test
    void shouldFindCarrots() {
        Species actual = repository.findById(2);
        assertNotNull(actual);
        assertEquals(2, actual.getSpeciesId());
        assertEquals("Carrots", actual.getCommonName());
    }

    @Test
    void shouldAdd() {
        Species species = makeSpecies();
        Species actual = repository.add(species);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getSpeciesId());
    }

    @Test
    void shouldUpdate() {
        Species species = makeSpecies();
        species.setSpeciesId(1);
        assertTrue(repository.update(species));
        species.setSpeciesId(30);
        assertFalse(repository.update(species));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(30));
    }

    Species makeSpecies() {
        Species species = new Species();
        species.setCommonName("Test");
        species.setScientificName("Test");
        species.setCycle("Test");
        species.setWateringFrequency("Test");
        return species;
    }
}