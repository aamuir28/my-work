package learn.communitygarden.domain;

import learn.communitygarden.data.GardenerJdbcTemplateRepository;
import learn.communitygarden.models.Gardener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class GardenerService {
    private final GardenerJdbcTemplateRepository repository;

    public GardenerService(GardenerJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<Gardener> findAll() {
        return repository.findAll();
    }

    public Gardener findById(int gardenerId) {
        return repository.findById(gardenerId);
    }

    public GardenerResult add(Gardener gardener) {
        GardenerResult gardenerResult = validate(gardener);

        if (gardener != null && gardener.getGardenerId() > 0) {
            gardenerResult.addMessage("Gardener `id` should not be set.", ActionStatus.INVALID);
        }

        if (gardenerResult.isSuccess()) {
            gardener = repository.add(gardener);
            gardenerResult.setGardener(gardener);
        }

        return gardenerResult;
    }

    public GardenerResult update(Gardener gardener) {
        GardenerResult gardenerResult = validate(gardener);

        if (gardener != null && gardener.getGardenerId() > 0) {
            gardenerResult.addMessage("Gardener `id` should not be set.", ActionStatus.INVALID);
        }

        gardener.normalize();


        if (gardenerResult.isSuccess()) {
            if (repository.update(gardener)) {
                gardenerResult.setGardener(gardener);
            } else {
                gardenerResult.addMessage(ActionStatus.NOT_FOUND, "Gardener id `" + gardener.getGardenerId() + "` not found.");
            }
        }
        return gardenerResult;
    }

    public GardenerResult deleteById(int gardenerId) {
        GardenerResult gardenerResult = new GardenerResult();

        if (!repository.deleteById(gardenerId)) {
            gardenerResult.addMessage(ActionStatus.NOT_FOUND, "Community id `" + gardenerId + "` not found.");
        }
        return gardenerResult;
    }

    private GardenerResult validate(Gardener gardener) {
        GardenerResult gardenerResult = new GardenerResult();

        if (gardener == null) {
            gardenerResult.addMessage(ActionStatus.INVALID, "Gardener cannot be null");
        }
        if (gardener.getFirstName() == null || gardener.getFirstName().isBlank()) {
            gardenerResult.addMessage(ActionStatus.INVALID, "Gardener first name is required.");
        }
        if (gardener.getLastName() == null || gardener.getLastName().isBlank()) {
            gardenerResult.addMessage(ActionStatus.INVALID, "Gardener last name is required.");
        }
        return gardenerResult;
    }
}
