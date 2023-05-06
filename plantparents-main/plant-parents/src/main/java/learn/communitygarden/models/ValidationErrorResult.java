package learn.communitygarden.models;

import java.util.ArrayList;

public class ValidationErrorResult {
    private ArrayList<String> messages = new ArrayList<>();

    public ArrayList<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public void addMessage(String message) {
        messages.add(message);
    }

    public void addMessage(String message, Object... args) {
        addMessage(String.format(message, args));
    }
}
