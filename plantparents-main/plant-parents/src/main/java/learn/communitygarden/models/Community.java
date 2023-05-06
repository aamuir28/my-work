package learn.communitygarden.models;

import java.util.ArrayList;
import java.util.List;

public class Community {
    private int communityId;
    private String name;
    private List<Plot> plots = new ArrayList<>();
    private List<Gardener> gardeners = new ArrayList<>();

    public Community() {
    }

    public Community(int communityId, String name) {
        this.communityId = communityId;
        this.name = name;
    }

    public int getCommunityId() {
        return communityId;
    }

    public void setCommunityId(int communityId) {
        this.communityId = communityId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void normalize() {
        if (name != null) {
            name = name.trim();
        }
    }

    public List<Plot> getPlots() {
        return plots;
    }

    public void setPlots(List<Plot> plots) {
        this.plots = plots;
    }

    public List<Gardener> getGardeners() {
        return gardeners;
    }

    public void setGardeners(List<Gardener> gardeners) {
        this.gardeners = gardeners;
    }
}

