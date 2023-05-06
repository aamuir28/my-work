package learn.communitygarden.controllers;

import learn.communitygarden.domain.PlotResult;
import learn.communitygarden.domain.PlotService;
import learn.communitygarden.models.Gardener;
import learn.communitygarden.models.Plot;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/plot")
public class PlotController {
    private final PlotService plotService;

    public PlotController(PlotService service) {
        this.plotService = service;
    }

    @GetMapping
    public List<Plot> findAll() {
        return plotService.findAll();
    }

    @GetMapping("/{plotId}")
    public ResponseEntity<Plot> findById(@PathVariable int plotId) {
        Plot plot = plotService.findById(plotId);
        if (plot == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(plot);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Plot plot) {
        PlotResult result = plotService.add(plot);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPlot(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PostMapping("/addGardenerToPlot/{plotId}/{gardenerId}")
    public ResponseEntity<Object> addGardenerToPlot(@PathVariable int plotId, @PathVariable int gardenerId) {
        plotService.addGardenerToPlot(plotId, gardenerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{plotId}")
    public ResponseEntity<Object> update(@PathVariable int plotId, @RequestBody Plot plot) {
        if (plotId != plot.getPlotId()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        PlotResult result = plotService.update(plot);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{plotId}")
    public ResponseEntity<Void> deleteById(@PathVariable int plotId) {
        if (plotService.deleteById(plotId).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
