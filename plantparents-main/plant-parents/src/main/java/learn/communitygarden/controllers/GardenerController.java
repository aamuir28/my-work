package learn.communitygarden.controllers;

import learn.communitygarden.domain.GardenerResult;
import learn.communitygarden.domain.GardenerService;
import learn.communitygarden.models.Gardener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/gardener")
public class GardenerController {

    private final GardenerService gardenerService;

    @Autowired
    public GardenerController(GardenerService service) {
        this.gardenerService = service;
    }

    @GetMapping
    public List<Gardener> findAll() {
        return gardenerService.findAll();
    }

    @GetMapping("/{gardenerId}")
    public ResponseEntity<Gardener> findById(@PathVariable int gardenerId) {
        Gardener gardener = gardenerService.findById(gardenerId);
        if (gardener == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(gardener);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Gardener gardener) {
        GardenerResult result = gardenerService.add(gardener);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getGardener(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{gardenerId}")
    public ResponseEntity<Object> update(@PathVariable int gardenerId, @RequestBody Gardener gardener) {
        if (gardenerId != gardener.getGardenerId()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        GardenerResult result = gardenerService.update(gardener);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getGardener(), HttpStatus.OK);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{gardenerId}")
    public ResponseEntity<Void> deleteById(@PathVariable int gardenerId) {
        if (gardenerService.deleteById(gardenerId).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
