package learn.communitygarden.data;

import learn.communitygarden.models.Plot;

import java.util.List;

public interface PlotRepository {
    List<Plot> findAll();

    Plot findById(int plotId);

    Plot add(Plot plot);

    boolean update(Plot plot);

    boolean deleteById(int plotId);
}
