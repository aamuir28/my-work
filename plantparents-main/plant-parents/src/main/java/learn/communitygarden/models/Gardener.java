package learn.communitygarden.models;

public class Gardener {
    private int gardenerId;

    private String firstName;

    private String lastName;

    public Gardener() {
    }

    public Gardener(int gardenerId, String firstName, String lastName) {
        this.gardenerId = gardenerId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public int getGardenerId() {
        return gardenerId;
    }

    public void setGardenerId(int gardenerId) {
        this.gardenerId = gardenerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void normalize() {
        if (firstName != null) {
            firstName = firstName.trim();
        }
        if (lastName != null) {
            lastName = lastName.trim();
        }
    }
}
