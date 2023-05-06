package learn.communitygarden.controllers;

import learn.communitygarden.models.AppUser;
import learn.communitygarden.models.ValidationErrorResult;
import learn.communitygarden.security.AppUserService;
import learn.communitygarden.security.JwtConverter;
import org.springframework.beans.factory.support.BeanDefinitionValidationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin
public class AuthController {

    private final AuthenticationManager manager;
    private final JwtConverter converter;
    private final AppUserService service;

    public AuthController(AuthenticationManager manager, JwtConverter converter, AppUserService service) {
        this.manager = manager;
        this.converter = converter;
        this.service = service;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody AppUser user) {
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
        try {
            Authentication authentication = manager.authenticate(token);
            if (authentication.isAuthenticated()) {
                String jwt = converter.userToToken((AppUser) authentication.getPrincipal());
                HashMap<String, String> values = new HashMap<>();
                values.put("jwt", jwt);
                return new ResponseEntity<>(values, HttpStatus.OK);
            }
        } catch (AuthenticationException ex) {
            System.out.println(ex.getMessage());
        }

        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(@AuthenticationPrincipal AppUser user) {
        String jwt = converter.userToToken(user);
        HashMap<String, String> values = new HashMap<>();
        values.put("jwt", jwt);
        return new ResponseEntity<>(values, HttpStatus.OK);
    }

    @PostMapping("/create_account")
    public ResponseEntity<?> createAccount(@RequestBody AppUser user) {

        try {
            user.getRoles().add("USER");
            service.add(user);
        } catch (BeanDefinitionValidationException ex) {
            ValidationErrorResult validationErrorResult = new ValidationErrorResult();
            validationErrorResult.addMessage("Something about beans.");
            validationErrorResult.addMessage(ex.getMessage());
            return new ResponseEntity<>(validationErrorResult, HttpStatus.BAD_REQUEST);
        } catch (DuplicateKeyException ex) {
            ValidationErrorResult validationErrorResult = new ValidationErrorResult();
            validationErrorResult.addMessage("That username is already taken.");
            return new ResponseEntity<>(validationErrorResult, HttpStatus.BAD_REQUEST);
        } catch (Exception ex) {
            ValidationErrorResult validationErrorResult = new ValidationErrorResult();
            validationErrorResult.addMessage("Something unexpected happened.");
            validationErrorResult.addMessage(ex.getMessage());
            return new ResponseEntity<>(ex, HttpStatus.BAD_REQUEST);
        }

        HashMap<String, String> map = new HashMap<>();
        map.put("appUserId", String.valueOf(user.getAppUserId()));

        return new ResponseEntity<>(map, HttpStatus.CREATED);
    }

}
