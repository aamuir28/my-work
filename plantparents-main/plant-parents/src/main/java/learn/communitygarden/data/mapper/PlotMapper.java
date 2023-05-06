package learn.communitygarden.data.mapper;

import learn.communitygarden.models.Plot;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.parameters.P;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PlotMapper implements RowMapper<Plot> {
    @Override
    public Plot mapRow(ResultSet rs, int i) throws SQLException {
        Plot plot = new Plot();
        plot.setPlotId(rs.getInt("plot_id"));
        plot.setName(rs.getString("name"));
        plot.setCommunityId(rs.getInt("community_id"));
        return plot;
    }
}
