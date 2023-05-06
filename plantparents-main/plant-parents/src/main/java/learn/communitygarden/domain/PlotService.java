package learn.communitygarden.domain;

import learn.communitygarden.data.PlotJdbcTemplateRepository;
import learn.communitygarden.models.Community;
import learn.communitygarden.models.Gardener;
import learn.communitygarden.models.Plot;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlotService {
    private final PlotJdbcTemplateRepository repository;

    public PlotService(PlotJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<Plot> findAll() {
        return repository.findAll();
    }

    public Plot findById(int plotId) {
        return repository.findById(plotId);
    }

    public PlotResult add(Plot plot) {
        PlotResult plotResult = validate(plot);

        if (plot != null && plot.getPlotId() > 0) {
            plotResult.addMessage("Plot `id` should not be set.", ActionStatus.INVALID);
        }

        if (plotResult.isSuccess()) {
            plot = repository.add(plot);
            plotResult.setPlot(plot);
        }

        return plotResult;
    }

    public PlotResult update(Plot plot) {
        PlotResult plotResult = validate(plot);

        plot.normalize();

        if (plotResult.isSuccess()) {
            if (repository.update(plot)) {
                plotResult.setPlot(plot);
            } else {
                plotResult.addMessage(ActionStatus.NOT_FOUND, "Plot id `" + plot.getPlotId() + "` not found.");
            }
        }
        return plotResult;
    }

    public PlotResult deleteById(int plotId) {
        PlotResult plotResult = new PlotResult();

        if (!repository.deleteById(plotId)) {
            plotResult.addMessage(ActionStatus.NOT_FOUND, "Plot id `" + plotId + "` not found.");
        }

        return plotResult;
    }


    private PlotResult validate(Plot plot) {
        PlotResult plotResult = new PlotResult();

        if (plot == null) {
            plotResult.addMessage(ActionStatus.INVALID, "Plot cannot be null");
        }
        if (plot.getName() == null || plot.getName().isBlank()) {
            plotResult.addMessage(ActionStatus.INVALID, "Plot name is required.");
        }

        return plotResult;
    }

    public void addGardenerToPlot(int plotId, int gardenerId) {
        if (plotId > 0 && gardenerId > 0) {
            repository.addGardenerToPlot(plotId, gardenerId);
        }
    }
}
