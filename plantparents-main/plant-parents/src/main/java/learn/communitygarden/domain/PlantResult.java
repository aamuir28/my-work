package learn.communitygarden.domain;

import learn.communitygarden.models.Plant;

import java.util.ArrayList;
import java.util.List;

public class PlantResult<T> extends Result<T> {
    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Plant plant;
    public ActionStatus getStatus() {
        return status;
    }
    public Plant getPlant() {
        return plant;
    }
    public boolean isSuccess() {
        return status == ActionStatus.SUCCESS;
    }

    public List<String> getMessage() {
        return new ArrayList<>(messages);
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }
}
