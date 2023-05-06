package learn.starwars.domain;

import learn.starwars.models.Comment;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;

import java.util.List;

@Service
public class CommentService {

    private final ArrayList<Comment> comments = new ArrayList<>();

    public CommentService() {
        comments.add(new Comment(1,
                "Anila Kimeln",
                "Grogu is the most adorable creature in the Star Wars universe, hands down.",
                LocalDateTime.now().minusDays(5)));
        comments.add(new Comment(2,
                "Teckla Bibble",
                "I love how The Mandalorian expands on the Star Wars universe and introduces us to new characters and planets.",
                LocalDateTime.now().minusMonths(2)));
        comments.add(new Comment(3,
                "Drax Carduel",
                "The Mandalorian is one of the best things to happen to the Star Wars franchise in a long time.",
                LocalDateTime.now().minusMonths(1)));
        comments.add(new Comment(4,
                "Sola Typho",
                "Grogu stole my heart from the moment I saw him on screen. I can't get enough of his adorable little face.",
                LocalDateTime.now().minusMonths(6)));
    }

    public List<Comment> findAll() {
        return new ArrayList<>(comments);
    }

    public Comment findById(int commentId) {
        return comments.stream()
                .filter(c -> c.getCommentId() == commentId)
                .findAny()
                .orElse(null);
    }

    public CommentResult add(Comment comment) {

        CommentResult result = validate(comment);
        if (result.getStatus() != ActionStatus.SUCCESS) {
            return result;
        }

        comment.normalize();

        int nextId = comments.stream()
                .mapToInt(i -> i.getCommentId())
                .max()
                .orElse(0) + 1;

        comment.setCommentId(nextId);
        comments.add(comment);
        result.setComment(comment);

        return result;
    }

    public CommentResult update(Comment comment) {

        CommentResult result = validate(comment);
        if (result.getStatus() != ActionStatus.SUCCESS) {
            return result;
        }

        comment.normalize();


        for (int i = 0; i < comments.size(); i++) {
            if (comment.getCommentId() == comments.get(i).getCommentId()) {
                comments.set(i, comment);
                return result;
            }
        }

        result.addMessage(ActionStatus.NOT_FOUND, "comment id `" + comment.getCommentId() + "` not found.");
        return result;
    }

    public CommentResult deleteById(int commentId) {
        CommentResult result = new CommentResult();
        if (comments.removeIf(i -> i.getCommentId() == commentId)) {
            return result;
        }
        result.addMessage(ActionStatus.NOT_FOUND, "comment id `" + commentId + "` not found.");
        return result;
    }

    private CommentResult validate(Comment comment) {
        CommentResult result = new CommentResult();

        if(comment == null) {
            result.addMessage(ActionStatus.INVALID, "Comment cannot be null");
        }

        return result;
    }

}
