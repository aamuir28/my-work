package learn.communitygarden.domain;

import learn.communitygarden.models.Community;

import java.util.ArrayList;
import java.util.List;

public class CommunityResult<T> extends Result<T> {
    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Community community;

    public ActionStatus getStatus() {
        return status;
    }

    public Community getCommunity() {
        return community;
    }

    public boolean isSuccess() {
        return status == ActionStatus.SUCCESS;
    }

    public List<String> getMessage() {
        return new ArrayList<>(messages);
    }

    public void setCommunity(Community community) {
        this.community = community;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }
}
