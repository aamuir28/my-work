package learn.communitygarden.controllers;

import learn.communitygarden.domain.PlantResult;
import learn.communitygarden.domain.PlantService;
import learn.communitygarden.models.Plant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/plant")
public class PlantController {
    private final PlantService plantService;

    @Autowired
    public PlantController(PlantService plantService) {
        this.plantService = plantService;
    }

    @GetMapping
    public List<Plant> findAll() {
        return plantService.findAll();
    }

    @GetMapping("/{plantId}")
    public ResponseEntity<Plant> findById(@PathVariable int plantId) {
        Plant plant = plantService.findById(plantId);
        if (plant == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(plant);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Plant plant) {
        PlantResult result = plantService.add(plant);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPlant(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{plantId}")
    public ResponseEntity<Object> update(@PathVariable int plantId, @RequestBody Plant plant) {
        if (plantId != plant.getPlantId()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        PlantResult result = plantService.update(plant);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{plantId}")
    public ResponseEntity<Void> deleteById(@PathVariable int plantId) {
        if (plantService.deleteById(plantId).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
