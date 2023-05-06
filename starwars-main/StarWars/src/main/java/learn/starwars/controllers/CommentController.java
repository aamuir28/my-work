package learn.starwars.controllers;

import learn.starwars.domain.CommentResult;
import learn.starwars.domain.CommentService;
import learn.starwars.models.Comment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin
public class CommentController {

    private final CommentService service;
    public CommentController(CommentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Comment> finalAll() {
        return service.findAll();
    }

    @GetMapping("/{commentId}")
    public ResponseEntity<Comment> findById(@PathVariable int commentId) {
        Comment comment = service.findById(commentId);
        if (comment == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(comment);
    }

    @PostMapping
    public ResponseEntity<Comment> add(@RequestBody Comment comment) {
        CommentResult result = service.add(comment);
        return new ResponseEntity<>(result.getComment(), getStatus(result, HttpStatus.CREATED));
    }

    @PutMapping("/{commentId}")
    public ResponseEntity<Void> update(@PathVariable int commentId, @RequestBody Comment comment) {
        if (comment != null && comment.getCommentId() != commentId) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        CommentResult result = service.update(comment);
        return new ResponseEntity<>(getStatus(result, HttpStatus.NO_CONTENT));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> delete(@PathVariable int commentId) {
        CommentResult result = service.deleteById(commentId);
        return new ResponseEntity<>(getStatus(result, HttpStatus.NO_CONTENT));
    }

    private HttpStatus getStatus(CommentResult result, HttpStatus statusDefault) {
        switch (result.getStatus()) {
            case INVALID:
                return HttpStatus.PRECONDITION_FAILED;
            case DUPLICATE:
                return HttpStatus.FORBIDDEN;
            case NOT_FOUND:
                return HttpStatus.NOT_FOUND;
        }
        return statusDefault;
    }

}
