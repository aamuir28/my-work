package learn.communitygarden.controllers;

import learn.communitygarden.domain.SpeciesResult;
import learn.communitygarden.domain.SpeciesService;
import learn.communitygarden.models.Species;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/species")
public class SpeciesController {

    private final SpeciesService speciesService;

    @Autowired
    public SpeciesController(SpeciesService service) {
        this.speciesService = service;
    }

    @GetMapping
    public List<Species> findAll() {
        return speciesService.findAll();
    }

    @GetMapping("/{speciesId}")
    public ResponseEntity<Species> findById(@PathVariable int speciesId) {
        Species species = speciesService.findById(speciesId);
        if (species == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(species);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Species species) {
        SpeciesResult result = speciesService.add(species);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getSpecies(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{speciesId}")
    public ResponseEntity<Object> update(@PathVariable int speciesId, @RequestBody Species species) {
        if (speciesId != species.getSpeciesId()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        SpeciesResult result = speciesService.update(species);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{speciesId}")
    public ResponseEntity<Void> deleteById(@PathVariable int speciesId) {
        if (speciesService.deleteById(speciesId).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
