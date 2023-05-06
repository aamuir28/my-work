package learn.communitygarden.data;

import learn.communitygarden.models.Gardener;

import java.util.List;

public interface GardenerRepository {
    List<Gardener> findAll();

    Gardener findById(int gardenerId);

    Gardener add(Gardener gardener);

    boolean update(Gardener gardener);

    boolean deleteById(int gardenerId);
}
