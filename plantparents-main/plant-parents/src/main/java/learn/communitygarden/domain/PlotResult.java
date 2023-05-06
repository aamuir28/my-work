package learn.communitygarden.domain;

import learn.communitygarden.models.Plot;

import java.util.ArrayList;
import java.util.List;

public class PlotResult<T> extends Result<T> {
    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Plot plot;

    public ActionStatus getStatus() {
        return status;
    }

    public Plot getPlot() {
        return plot;
    }

    public boolean isSuccess() {
        return status == ActionStatus.SUCCESS;
    }

    public List<String> getMessage() {
        return new ArrayList<>(messages);
    }

    public void setPlot(Plot plot) {
        this.plot = plot;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }

}
