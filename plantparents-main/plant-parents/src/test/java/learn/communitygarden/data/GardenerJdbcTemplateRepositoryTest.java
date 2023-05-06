package learn.communitygarden.data;

import learn.communitygarden.models.Gardener;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GardenerJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 4;

    @Autowired
    GardenerJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void findAll() {
        List<Gardener> gardeners = repository.findAll();
        assertTrue(gardeners.size() >= 3);
    }

    @Test
    void shouldFindElijah() {
        Gardener actual = repository.findById(1);
        assertNotNull(actual);
        assertEquals(1, actual.getGardenerId());
        assertEquals("Elijah", actual.getFirstName());
    }

    @Test
    void shouldAdd() {
        Gardener gardener = makeGardener();
        Gardener actual = repository.add(gardener);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getGardenerId());
    }

    @Test
    void shouldUpdate() {
        Gardener gardener = makeGardener();
        gardener.setGardenerId(2);
        assertTrue(repository.update(gardener));
        gardener.setGardenerId(10);
        assertFalse(repository.update(gardener));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(10));
    }

    Gardener makeGardener() {
        Gardener gardener = new Gardener();
        gardener.setFirstName("Test");
        gardener.setLastName("Test");
        return gardener;
    }
}