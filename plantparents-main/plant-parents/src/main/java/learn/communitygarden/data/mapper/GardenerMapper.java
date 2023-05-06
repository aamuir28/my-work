package learn.communitygarden.data.mapper;

import learn.communitygarden.models.Gardener;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GardenerMapper implements RowMapper<Gardener> {
    @Override
    public Gardener mapRow(ResultSet rs, int i) throws SQLException {
        Gardener gardener = new Gardener();
        gardener.setGardenerId(rs.getInt("gardener_id"));
        gardener.setFirstName(rs.getString("first_name"));
        gardener.setLastName(rs.getString("last_name"));
        return gardener;
    }
}
