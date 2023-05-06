package learn.communitygarden.data.mapper;

import learn.communitygarden.models.Species;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SpeciesMapper implements RowMapper<Species> {
    @Override
    public Species mapRow(ResultSet rs, int i) throws SQLException {
        Species species = new Species();
        species.setSpeciesId(rs.getInt("species_id"));
        species.setCommonName(rs.getString("common_name"));
        species.setScientificName(rs.getString("scientific_name"));
        species.setCycle(rs.getString("cycle"));
        species.setWateringFrequency(rs.getString("watering_frequency"));

        return species;
    }
}
