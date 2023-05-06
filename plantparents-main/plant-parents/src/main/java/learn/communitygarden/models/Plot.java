package learn.communitygarden.models;

import java.util.ArrayList;
import java.util.List;

public class Plot {

    private int plotId;

    private String name;

    private List<Species> species = new ArrayList<>();
    private List<Gardener> gardeners = new ArrayList<>();

    private List<Plant> plants = new ArrayList<>();

    private int communityId;

    public Plot() {
    }

    public Plot(int plotId, String name, int communityId) {
        this.plotId = plotId;
        this.name = name;
        this.communityId = communityId;
    }

    public int getPlotId() {
        return plotId;
    }

    public void setPlotId(int plotId) {
        this.plotId = plotId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCommunityId() {
        return communityId;
    }

    public void setCommunityId(int communityId) {
        this.communityId = communityId;
    }

    public List<Species> getSpecies() {
        return species;
    }

    public void setSpecies(List<Species> species) {
        this.species = species;
    }

    public List<Gardener> getGardeners() {
        return gardeners;
    }

    public void setGardeners(List<Gardener> gardeners) {
        this.gardeners = gardeners;
    }

    public List<Plant> getPlants() {
        return plants;
    }

    public void setPlants(List<Plant> plants) {
        this.plants = plants;
    }

    public void normalize() {
        if (name != null) {
            name = name.trim();
        }
    }
}
