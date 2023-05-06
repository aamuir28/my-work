package learn.communitygarden.data.mapper;

import learn.communitygarden.models.Community;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CommunityMapper implements RowMapper<Community> {

    @Override
    public Community mapRow(ResultSet rs, int i) throws SQLException {
       Community community = new Community();
       community.setCommunityId(rs.getInt("community_id"));
       community.setName(rs.getString("name"));
       return community;
    }
}
