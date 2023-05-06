package learn.communitygarden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
//        var encoder = new BCryptPasswordEncoder();
//        System.out.println(encoder.encode("user"));
//        System.out.println(encoder.encode("admin"));
        SpringApplication.run(App.class, args);
    }
}
