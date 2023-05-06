package learn.communitygarden.domain;

import learn.communitygarden.models.Species;

import java.util.ArrayList;
import java.util.List;

public class SpeciesResult<T> extends Result<T> {
    private ActionStatus status = ActionStatus.SUCCESS;
    private ArrayList<String> messages = new ArrayList<>();
    private Species species;

    public ActionStatus getStatus() {
        return status;
    }

    public Species getSpecies() {
        return species;
    }

    public boolean isSuccess() {
        return status == ActionStatus.SUCCESS;
    }

    public List<String> getMessage() {
        return new ArrayList<>(messages);
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public void addMessage(ActionStatus status, String message) {
        this.status = status;
        messages.add(message);
    }

}
