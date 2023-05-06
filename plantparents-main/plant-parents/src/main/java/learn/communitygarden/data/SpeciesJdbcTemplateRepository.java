package learn.communitygarden.data;

import learn.communitygarden.data.mapper.SpeciesMapper;
import learn.communitygarden.models.Species;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class SpeciesJdbcTemplateRepository implements SpeciesRepository {
    private final JdbcTemplate jdbcTemplate;

    public SpeciesJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Species> findAll() {
        final String sql = "select species_id, common_name, scientific_name, cycle, watering_frequency " +
                "from species " +
                "order by common_name asc;";
        return jdbcTemplate.query(sql, new SpeciesMapper());
    }

    @Override
    public Species findById(int speciesId) {
        final String sql = "select species_id, common_name, scientific_name, cycle, watering_frequency " +
                "from species " +
                "where species_id = ?;";

        Species species = jdbcTemplate.query(sql, new SpeciesMapper(), speciesId).stream()
                .findFirst().orElse(null);

        return species;
    }

    @Override
    public Species add(Species species) {
        final String sql = "insert into species (common_name, scientific_name, cycle, watering_frequency) values " +
                "(?, ?, ?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, species.getCommonName());
            ps.setString(2, species.getScientificName());
            ps.setString(3, species.getCycle());
            ps.setString(4, species.getWateringFrequency());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        species.setSpeciesId(keyHolder.getKey().intValue());
        return species;
    }

    @Override
    public boolean update(Species species) {
        final String sql = "update species set " +
                "common_name = ?, " +
                "scientific_name = ?, " +
                "cycle = ?, " +
                "watering_frequency = ? " +
                "where species_id = ?;";

        return jdbcTemplate.update(sql,
                species.getCommonName(),
                species.getScientificName(),
                species.getCycle(),
                species.getWateringFrequency(),
                species.getSpeciesId()) > 0;
    }

    @Override
    public boolean deleteById(int speciesId) {
        jdbcTemplate.update("delete from plant where species_id = ?;", speciesId);
        return jdbcTemplate.update("delete from species where species_id = ?;", speciesId) > 0;
    }
}
