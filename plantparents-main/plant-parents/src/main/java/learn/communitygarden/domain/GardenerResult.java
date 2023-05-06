package learn.communitygarden.domain;

import learn.communitygarden.models.Gardener;

import java.util.ArrayList;
import java.util.List;

public class GardenerResult<T> extends Result<T> {

    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Gardener gardener;

    public ActionStatus getStatus() {
        return status;
    }

    public Gardener getGardener() {
        return gardener;
    }

    public boolean isSuccess() {
        return status == ActionStatus.SUCCESS;
    }

    public List<String> getMessage() {
        return new ArrayList<>(messages);
    }

    public void setGardener(Gardener gardener) {
        this.gardener = gardener;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }

}
