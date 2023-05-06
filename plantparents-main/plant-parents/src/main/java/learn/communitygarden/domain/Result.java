package learn.communitygarden.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Result<T> {
    private final ArrayList<String> messages = new ArrayList<>();
    private ActionStatus type = ActionStatus.SUCCESS;
    private T payload;

    public ActionStatus getType() {
        return type;
    }

    public boolean isSuccess() {
        return type == ActionStatus.SUCCESS;
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    public void addMessage(String message, ActionStatus type) {
        messages.add(message);
        this.type = type;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Result<?> result = (Result<?>) o;

        if (messages != null ? !messages.equals(result.messages) : result.messages != null) return false;
        if (type != result.type) return false;
        return Objects.equals(payload, result.payload);
    }

    @Override
    public int hashCode() {
        int result = messages != null ? messages.hashCode() : 0;
        result = 31 * result + (type != null ? type.hashCode() : 0);
        result = 31 * result + (payload != null ? payload.hashCode() : 0);
        return result;
    }
}
