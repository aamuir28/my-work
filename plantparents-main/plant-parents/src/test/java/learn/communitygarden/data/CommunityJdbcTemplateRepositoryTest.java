package learn.communitygarden.data;

import learn.communitygarden.models.Community;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CommunityJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 4;

    @Autowired
    CommunityJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Community> communities = repository.findAll();
        assertTrue(communities.size() >= 3);
    }

    @Test
    void shouldFindSabina() {
        Community actual = repository.findById(2);
        assertNotNull(actual);
        assertEquals(2, actual.getCommunityId());
        assertEquals("Sabina Gardens", actual.getName());
    }

    @Test
    void shouldAdd() {
        Community community = makeCommunity();
        Community actual = repository.add(community);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getCommunityId());
    }

    @Test
    void shouldUpdate() {
        Community community = makeCommunity();
        community.setCommunityId(1);
        assertTrue(repository.update(community));
        community.setCommunityId(10);
        assertFalse(repository.update(community));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(10));
    }

    Community makeCommunity() {
        Community community = new Community();
        community.setName("Test");
        return community;
    }
}