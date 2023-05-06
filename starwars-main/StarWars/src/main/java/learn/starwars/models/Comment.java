package learn.starwars.models;

import java.time.LocalDateTime;

public class Comment {

    private int commentId;
    private String author;
    private String content;
    private LocalDateTime timeStamp;

    public Comment() {
    }

    public Comment(int commentId, String author, String content, LocalDateTime timeStamp) {
        this.commentId = commentId;
        this.author = author;
        this.content = content;
        this.timeStamp = timeStamp;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public void normalize() {
        if (content != null) {
            content = content.trim();
        }
        if (author != null) {
            author = author.trim();
        }
    }
}
