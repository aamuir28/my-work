package learn.communitygarden.data;

import learn.communitygarden.models.AppUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class AppUserJdbcTemplateRepository {
    private final JdbcTemplate jdbcTemplate;

    private final RowMapper<AppUser> mapper = (resultSet, index) -> {
        AppUser user= new AppUser();
        user.setAppUserId(resultSet.getInt("app_user_id"));
        user.setUsername(resultSet.getString("username"));
        user.setPassword(resultSet.getString("password_hash"));
        return user;
    };

    public AppUserJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public AppUser findByUsername(String username) {
        String sql = "select app_user_id, username, password_hash from app_user where username = ?;";
        AppUser user = jdbcTemplate.query(sql, mapper, username).stream()
                .findFirst().orElse(null);
        if (user != null) {
            addAuthorities(user);
        }
        return user;
    }
    private void addAuthorities(AppUser user) {
        String sql = "select a.name "
                + "from app_user_role aur "
                + "inner join app_role a on aur.app_role_id = a.app_role_id "
                + "where aur.app_user_id =?;";
        List<String> authorities = jdbcTemplate.query(sql, (rs, i) -> rs.getString("name"),
                user.getAppUserId()
        );
        user.addAuthorities(authorities);
    }

    @Transactional
    public AppUser add(AppUser user) {
        final String sql = "insert into app_user (username, password_hash) values (?, ?);";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        user.setAppUserId(keyHolder.getKey().intValue());

        updateRoles(user);

        return user;
    }

    private void updateRoles(AppUser user) {
        jdbcTemplate.update("delete from app_user_role where app_user_id = ?;", user.getAppUserId());

        if (user.getRoles() == null) {
            return;
        }

        for (String roleName : user.getRoles()) {
            String sql = "insert into app_user_role (app_user_id, app_role_id) " +
                    "select ?, app_role_id from app_role where name = ?;";

            jdbcTemplate.update(sql, user.getAppUserId(), roleName);
        }
    }

    private List<String> getRolesByUserId(int appUserId) {
        final String sql = "select r.name " +
                "from app_user_role ur " +
                "inner join app_role r on ur.app_role_id = r.app_role_id " +
                "where ur.app_user_id = ?";

        return jdbcTemplate.query(sql, (rs, rowId) -> rs.getString("`name`"), appUserId);
    }
}
