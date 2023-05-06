package learn.communitygarden.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    private final JwtConverter converter;

    public SecurityConfig(JwtConverter converter) {
        this.converter = converter;
    }

    @Bean
    public SecurityFilterChain getChain(HttpSecurity http, AuthenticationConfiguration config) throws Exception {
        http.csrf().disable();
        http.cors();

//        http.authorizeRequests().antMatchers("/**").permitAll();

        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/authenticate").permitAll()
                .antMatchers(HttpMethod.POST, "/create_account").permitAll()
                .antMatchers(HttpMethod.POST, "/refresh").authenticated()
                .antMatchers(HttpMethod.GET, "/api/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/**").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.POST, "/api/plant/*").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.POST, "/Community/*").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/species/*").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/plant/*").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/plot/*").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/Community/*").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/gardener/*").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/plant/*").hasAnyAuthority("USER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/**").hasAuthority("ADMIN")
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(manager(config), converter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    public AuthenticationManager manager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
