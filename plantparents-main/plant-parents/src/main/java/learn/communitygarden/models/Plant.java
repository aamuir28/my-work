package learn.communitygarden.models;

import java.time.LocalDate;

public class Plant {

    private int plantId;
    private LocalDate datePlanted;
    private LocalDate harvestDate;
    private LocalDate dateLastWatered;
    private boolean watered;
    private int speciesId;
    private int plotId;

    private Species species;

    public Plant() {
    }

    public Plant(int plantId, LocalDate datePlanted, LocalDate harvestDate, LocalDate dateLastWatered, boolean watered, int speciesId, int plotId) {
        this.plantId = plantId;
        this.datePlanted = datePlanted;
        this.harvestDate = harvestDate;
        this.dateLastWatered = dateLastWatered;
        this.watered = watered;
        this.speciesId = speciesId;
        this.plotId = plotId;
    }

    public int getPlantId() {
        return plantId;
    }

    public void setPlantId(int plantId) {
        this.plantId = plantId;
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

    public LocalDate getDateLastWatered() {
        return dateLastWatered;
    }

    public void setDateLastWatered(LocalDate dateLastWatered) {
        this.dateLastWatered = dateLastWatered;
    }

    public boolean isWatered() {
        return watered;
    }

    public void setWatered(boolean watered) {
        this.watered = watered;
    }

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }

    public int getPlotId() {
        return plotId;
    }

    public void setPlotId(int plotId) {
        this.plotId = plotId;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }
}
