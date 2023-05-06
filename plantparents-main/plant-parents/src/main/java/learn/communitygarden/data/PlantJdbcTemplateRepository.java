package learn.communitygarden.data;

import learn.communitygarden.data.mapper.PlantMapper;
import learn.communitygarden.models.Plant;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Types;
import java.util.List;

@Repository
public class PlantJdbcTemplateRepository implements PlantRepository {
    private final JdbcTemplate jdbcTemplate;



    public PlantJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Plant> findAll() {
        final String sql = "select p.plant_id, p.date_planted, p.harvest_date, p.date_last_watered, p.is_watered, p.species_id, p.plot_id, s.common_name, s.scientific_name, s.cycle, s.watering_frequency " +
                "from plant p " +
                "inner join species s on s.species_id = p.species_id;";
        return jdbcTemplate.query(sql, new PlantMapper());
    }

    @Override
    public Plant findById(int plantId) {
        final String sql = "select p.plant_id, p.date_planted, p.harvest_date, p.date_last_watered, p.is_watered, p.species_id, p.plot_id, s.common_name, s.scientific_name, s.cycle, s.watering_frequency " +
                "from plant p " +
                "inner join species s on s.species_id = p.species_id " +
                "where p.plant_id = ?;";

        Plant plant = jdbcTemplate.query(sql, new PlantMapper(), plantId).stream()
                .findFirst().orElse(null);

        return plant;
    }

    @Override
    public Plant add(Plant plant) {
        final String sql = "insert into plant (date_planted, harvest_date, date_last_watered, is_watered, species_id, plot_id) values " +
                "(?, ?, ?, ?, ?, ?)";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setDate(1, Date.valueOf(plant.getDatePlanted()));
            if (plant.getHarvestDate() == null) {
                ps.setNull(2, Types.DATE);
            } else {
                ps.setDate(2, Date.valueOf(plant.getHarvestDate()));
            }
            ps.setDate(3, Date.valueOf(plant.getDateLastWatered()));
            ps.setBoolean(4, plant.isWatered());
            ps.setInt(5, plant.getSpeciesId());
            ps.setInt(6, plant.getPlotId());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        plant.setPlantId(keyHolder.getKey().intValue());
        return plant;
    }

    @Override
    public boolean update(Plant plant) {
        final String sql = "update plant set " +
                "date_planted = ?, " +
                "harvest_date = ?, " +
                "date_last_watered = ?, " +
                "is_watered = ?, " +
                "species_id = ?, " +
                "plot_id = ? " +
                "where plant_id = ?;";

        return jdbcTemplate.update(sql,
                plant.getDatePlanted(),
                plant.getHarvestDate(),
                plant.getDateLastWatered(),
                plant.isWatered(),
                plant.getSpeciesId(),
                plant.getPlotId(),
                plant.getPlantId()) > 0;
    }

    @Override
    public boolean deleteById(int plantId) {
        return jdbcTemplate.update("delete from plant where plant_id = ?;", plantId) > 0;
    }
}
