package learn.communitygarden.data;

import learn.communitygarden.data.mapper.CommunityMapper;
import learn.communitygarden.data.mapper.GardenerMapper;
import learn.communitygarden.data.mapper.PlotMapper;
import learn.communitygarden.models.Community;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class CommunityJdbcTemplateRepository implements CommunityRepository {
    private final JdbcTemplate jdbcTemplate;

    public CommunityJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Community> findAll() {
        final String sql = "select community_id, name " +
                "from community";
        return jdbcTemplate.query(sql, new CommunityMapper());
    }

    @Override
    public Community findById(int communityId) {
        final String sql = "select community_id, name " +
                "from community " +
                "where community_id=?;";

        Community community = jdbcTemplate.query(sql, new CommunityMapper(), communityId).stream()
                .findFirst().orElse(null);

        if (community != null) {
            addPlots(community);
            addGardeners(community);
        }

        return community;
    }

    private void addGardeners(Community community) {
        final String sql = "select g.gardener_id, first_name, last_name " +
                "from gardener g " +
                "inner join plot_gardener on g.gardener_id = plot_gardener.gardener_id " +
                "inner join plot on plot_gardener.plot_id = plot.plot_id " +
                "where community_id = ?;";

        var gardener = jdbcTemplate.query(sql, new GardenerMapper(), community.getCommunityId());
        community.setGardeners(gardener);
    }

    private void addPlots(Community community) {
        final String sql = "select plot_id, name, community_id " +
                "from plot " +
                "where community_id = ?;";

        var plot = jdbcTemplate.query(sql, new PlotMapper(), community.getCommunityId());
        community.setPlots(plot);
    }

    @Override
    public Community add(Community community) {
        final String sql = "insert into community (name) values " +
                "(?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, community.getName());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        community.setCommunityId(keyHolder.getKey().intValue());
        return community;
    }

    @Override
    public boolean update(Community community) {
        final String sql = "update community set " +
                "name = ? " +
                "where community_id = ?;";

        return jdbcTemplate.update(sql,
                community.getName(),
                community.getCommunityId()) > 0;
    }

    @Override
    public boolean deleteById(int communityId) {
        jdbcTemplate.update("delete from plant where plot_id in (select plot_id from plot where community_id = ?);", communityId);
        jdbcTemplate.update("delete from plot_gardener where plot_id in (select plot_id from plot where community_id = ?);", communityId);
        jdbcTemplate.update("delete from plot where community_id = ?;", communityId);
        return jdbcTemplate.update("delete from community where community_id = ?;", communityId) > 0;
    }
}