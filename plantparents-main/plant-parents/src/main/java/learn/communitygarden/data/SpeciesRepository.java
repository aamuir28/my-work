package learn.communitygarden.data;

import learn.communitygarden.models.Species;

import java.util.List;

public interface SpeciesRepository {
    List<Species> findAll();

    Species findById(int speciesId);

    Species add(Species species);

    boolean update(Species species);

    boolean deleteById(int speciesId);
}
