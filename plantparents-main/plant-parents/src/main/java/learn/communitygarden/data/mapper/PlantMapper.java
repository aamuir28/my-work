package learn.communitygarden.data.mapper;

import learn.communitygarden.models.Plant;
import learn.communitygarden.models.Species;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlantMapper implements RowMapper<Plant> {
    @Override
    public Plant mapRow(ResultSet rs, int rowNum) throws SQLException {
        Plant plant = new Plant();
        plant.setPlantId(rs.getInt("plant_id"));
        plant.setDatePlanted(rs.getDate("date_planted").toLocalDate());
        if (rs.getDate("harvest_date") != null) {
            plant.setHarvestDate(rs.getDate("harvest_date").toLocalDate());
        }
        plant.setDateLastWatered(rs.getDate("date_last_watered").toLocalDate());
        plant.setWatered(rs.getBoolean("is_watered"));
        plant.setSpeciesId(rs.getInt("species_id"));
        plant.setPlotId(rs.getInt("plot_id"));
        Species species = new Species();
        species.setCycle(rs.getString("cycle"));
        species.setCommonName(rs.getString("common_name"));
        species.setScientificName(rs.getString("scientific_name"));
        species.setWateringFrequency(rs.getString("watering_frequency"));
        plant.setSpecies(species);
        return plant;
    }
}
