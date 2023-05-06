package learn.communitygarden.data;

import learn.communitygarden.models.Plot;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PlotJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 4;

    @Autowired
    PlotJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Plot> plots = repository.findAll();
        assertTrue(plots.size() >= 3);
    }

    @Test
    void shouldFindShorewood() {
        Plot actual = repository.findById(1);
        assertNotNull(actual);
        assertEquals(1, actual.getPlotId());
        assertEquals("Shorewood", actual.getName());
    }

    @Test
    void shouldAdd() {
        Plot plot = makePlot();
        Plot actual = repository.add(plot);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getPlotId());
    }

    @Test
    void shouldUpdate() {
        Plot plot = makePlot();
        plot.setPlotId(3);
        assertTrue(repository.update(plot));
        plot.setPlotId(10);
        assertFalse(repository.update(plot));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(2));
        assertFalse(repository.deleteById(10));
    }

    Plot makePlot() {
        Plot plot = new Plot();
        plot.setName("Test");
        plot.setCommunityId(1);
        return plot;
    }
}