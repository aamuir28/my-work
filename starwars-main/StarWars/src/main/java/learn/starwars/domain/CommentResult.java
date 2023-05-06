package learn.starwars.domain;

import learn.starwars.models.Comment;

import java.util.ArrayList;
import java.util.List;

public class CommentResult {

    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Comment comment;

    public ActionStatus getStatus() {
        return status;
    }

    public Comment getComment() {
        return comment;
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }

}

