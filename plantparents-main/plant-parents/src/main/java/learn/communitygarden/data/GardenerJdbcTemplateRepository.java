package learn.communitygarden.data;

import learn.communitygarden.data.mapper.GardenerMapper;
import learn.communitygarden.models.Gardener;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class GardenerJdbcTemplateRepository implements GardenerRepository {
    private final JdbcTemplate jdbcTemplate;

    public GardenerJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Gardener> findAll() {
        final String sql = "select gardener_id, first_name, last_name " +
                "from gardener;";
        return jdbcTemplate.query(sql, new GardenerMapper());
    }


    @Override
    public Gardener findById(int gardenerId) {
        final String sql = "select gardener_id, first_name, last_name " +
                "from gardener " +
                "where gardener_id = ?;";

        Gardener gardener = jdbcTemplate.query(sql, new GardenerMapper(), gardenerId).stream()
                .findFirst().orElse(null);

        return gardener;
    }

    @Override
    public Gardener add(Gardener gardener) {
        final String sql = "insert into gardener (first_name, last_name) values " +
                "(?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, gardener.getFirstName());
            ps.setString(2, gardener.getLastName());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        gardener.setGardenerId(keyHolder.getKey().intValue());
        return gardener;
    }

    @Override
    public boolean update(Gardener gardener) {
        final String sql = "update gardener set " +
                "first_name = ?, " +
                "last_name = ? " +
                "where gardener_id = ?;";

        return jdbcTemplate.update(sql,
                gardener.getFirstName(),
                gardener.getLastName(),
                gardener.getGardenerId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(int gardenerId) {
        jdbcTemplate.update("delete from plot_gardener where gardener_id =?;", gardenerId);
        return jdbcTemplate.update("delete from gardener where gardener_id =?;", gardenerId) > 0;
    }
}
