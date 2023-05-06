package learn.communitygarden.security;

import learn.communitygarden.data.AppUserJdbcTemplateRepository;
import learn.communitygarden.models.AppUser;
import org.springframework.beans.factory.support.BeanDefinitionValidationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppUserService implements UserDetailsService {

    private final AppUserJdbcTemplateRepository repository;
    private final PasswordEncoder encoder;

    public AppUserService(AppUserJdbcTemplateRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        username = username.trim();
        AppUser user = repository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("%s not found", username));
        }

        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(roleName -> new SimpleGrantedAuthority("ROLE_" + roleName))
                .collect(Collectors.toList());

        return user;
    }

    public AppUser add(AppUser user) {
        validate(user);
        validatePassword(user);

        user.setPassword(encoder.encode(user.getPassword()));
        return repository.add(user);
    }

    private void validate(AppUser user) {
        if (user == null) {
            throw new BeanDefinitionValidationException("user cannot be null");
        }
        if (user.getUsername() == null || user.getUsername().isBlank()) {
            throw new BeanDefinitionValidationException("username is required");
        }
        if (user.getUsername().length() < 5 || user.getUsername().length() > 26) {
            throw new BeanDefinitionValidationException("username must be between 5 and 25 characters");
        }
    }

    private void validatePassword(AppUser user) {
        String password = user.getPassword();
        if (password == null || password.length() < 8) {
            throw new BeanDefinitionValidationException("password must be at least 8 characters");
        }

        int digits = 0;
        int letters = 0;
        int others = 0;
        for (char c :password.toCharArray()) {
            if (Character.isDigit(c)) {
                digits++;
            } else if (Character.isLetter(c)) {
                letters++;
            } else {
                others++;
            }
        }

        if (digits == 0 || letters == 0 || others == 0) {
            throw new BeanDefinitionValidationException("password must contain a digit, a letter, and a non-digit/non-letter");
        }
    }
}
