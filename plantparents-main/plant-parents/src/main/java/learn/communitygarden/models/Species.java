package learn.communitygarden.models;


import java.time.LocalDate;

public class Species {
    private int speciesId;

    private String commonName;

    private String scientificName;

    private String cycle;

    private String wateringFrequency;

    private LocalDate datePlanted;
    private LocalDate harvestDate;
    private boolean isWatered;


    public Species() {
    }

    public Species(int speciesId, String commonName, String scientificName, String cycle, String wateringFrequency, LocalDate datePlanted, LocalDate harvestDate, boolean isWatered) {
        this.speciesId = speciesId;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.cycle = cycle;
        this.wateringFrequency = wateringFrequency;
        this.datePlanted = datePlanted;
        this.harvestDate = harvestDate;
        this.isWatered = isWatered;
    }

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getCycle() {
        return cycle;
    }

    public void setCycle(String cycle) {
        this.cycle = cycle;
    }

    public String getWateringFrequency() {
        return wateringFrequency;
    }

    public void setWateringFrequency(String wateringFrequency) {
        this.wateringFrequency = wateringFrequency;
    }

    public LocalDate getDatePlanted() {
        return datePlanted;
    }

    public void setDatePlanted(LocalDate datePlanted) {
        this.datePlanted = datePlanted;
    }

    public LocalDate getHarvestDate() {
        return harvestDate;
    }

    public void setHarvestDate(LocalDate harvestDate) {
        this.harvestDate = harvestDate;
    }

    public boolean isWatered() {
        return isWatered;
    }

    public void setWatered(boolean watered) {
        isWatered = watered;
    }

    public void normalize() {
        if (commonName != null) {
            commonName = commonName.trim();
        }
        if (scientificName != null) {
            scientificName = scientificName.trim();
        }
        if (cycle != null) {
            cycle = cycle.trim();
        }
        if (wateringFrequency != null) {
            wateringFrequency = wateringFrequency.trim();
        }
    }
}

