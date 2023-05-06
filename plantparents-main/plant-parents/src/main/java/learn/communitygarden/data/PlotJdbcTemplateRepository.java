package learn.communitygarden.data;

import learn.communitygarden.data.mapper.GardenerMapper;
import learn.communitygarden.data.mapper.PlantMapper;
import learn.communitygarden.data.mapper.SpeciesMapper;
import learn.communitygarden.data.mapper.PlotMapper;
import learn.communitygarden.models.Gardener;
import learn.communitygarden.models.Plot;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class PlotJdbcTemplateRepository implements PlotRepository {
    private final JdbcTemplate jdbcTemplate;

    public PlotJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Plot> findAll() {
        final String sql = "select plot_id, name, community_id " +
                "from plot";
        return jdbcTemplate.query(sql, new PlotMapper());
    }

    @Override
    public Plot findById(int plotId) {
        final String sql = "select plot_id, name, community_id " +
                "from plot " +
                "where plot_id = ?;";

        Plot plot = jdbcTemplate.query(sql, new PlotMapper(), plotId).stream()
                .findFirst().orElse(null);

        if (plot != null) {
            addGardeners(plot);
            addPlants(plot);
        }

        return plot;
    }

    private void addPlants(Plot plot) {
        final String sql = "select p.plant_id, p.date_planted, p.harvest_date, p.date_last_watered, p.is_watered, p.species_id, p.plot_id, s.common_name, s.scientific_name, s.cycle, s.watering_frequency " +
                "from plant p " +
                "inner join species s on s.species_id = p.species_id " +
                "where p.plot_id = ?;";

        var plants = jdbcTemplate.query(sql, new PlantMapper(), plot.getPlotId());
        plot.setPlants(plants);
    }

    private void addGardeners(Plot plot) {
        final String sql = "select g.gardener_id, first_name, last_name " +
                "from gardener g " +
                "inner join plot_gardener on g.gardener_id = plot_gardener.gardener_id " +
                "inner join plot p on plot_gardener.plot_id = p.plot_id " +
                "where p.plot_id = ?;";

        var gardener = jdbcTemplate.query(sql, new GardenerMapper(), plot.getPlotId());
        plot.setGardeners(gardener);
    }

    private void addSpecies(Plot plot) {
        final String sql = "select s.species_id, s.common_name, s.scientific_name, s.cycle, s.watering_frequency, p.date_planted, p.harvest_date, p,date_last_watered, p.is_watered " +
                "from species s " +
                "inner join plant p on p.species_id = s.species_id " +
                "inner join plot pl on pl.plot_id = p.plot_id " +
                "where pl.plot_id = ?;";

        var species = jdbcTemplate.query(sql, new SpeciesMapper(), plot.getPlotId());
        plot.setSpecies(species);
    }

    @Override
    public Plot add(Plot plot) {
        final String sql = "insert into plot (name, community_id) values " +
                "(?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, plot.getName());
            ps.setInt(2, plot.getCommunityId());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        plot.setPlotId(keyHolder.getKey().intValue());
        return plot;
    }

    @Override
    public boolean update(Plot plot) {
        final String sql = "update plot set " +
                "name = ?, " +
                "community_id = ? " +
                "where plot_id = ?;";

        return jdbcTemplate.update(sql,
                plot.getName(),
                plot.getCommunityId(),
                plot.getPlotId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById(int plotId) {
        jdbcTemplate.update("delete from plant where plot_id = ?", plotId);
        jdbcTemplate.update("delete from plot_gardener where plot_id = ?", plotId);
        return jdbcTemplate.update("delete from plot where plot_id =?;", plotId) > 0;
    }

    public void addGardenerToPlot(int plotId, int gardenerId) {
        final String sql = "insert into plot_gardener (plot_id, gardener_id) values " +
                "(?,?)";

        jdbcTemplate.update(sql, plotId, gardenerId);

}}
