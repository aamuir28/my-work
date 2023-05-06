package learn.communitygarden.domain;

import learn.communitygarden.data.CommunityJdbcTemplateRepository;
import learn.communitygarden.models.Community;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommunityService {
    private final CommunityJdbcTemplateRepository repository;

    public CommunityService(CommunityJdbcTemplateRepository repository) {
        this.repository = repository;
    }

    public List<Community> findAll() {
        return repository.findAll();
    }

    public Community findById(int communityId) {
        return repository.findById(communityId);
    }

    public CommunityResult add(Community community) {
        CommunityResult communityResult = validate(community);

        if (community != null && community.getCommunityId() > 0) {
            communityResult.addMessage("Community `id` should not be set.", ActionStatus.INVALID);
        }

        if (communityResult.isSuccess()) {
            community = repository.add(community);
            communityResult.setCommunity(community);
        }

        return communityResult;
    }

    public CommunityResult update(Community community) {
        CommunityResult communityResult = validate(community);

        community.normalize();

        if (communityResult.isSuccess()) {
            if (repository.update(community)) {
                communityResult.setCommunity(community);
            } else {
                communityResult.addMessage(ActionStatus.NOT_FOUND, "Community id `" + community.getCommunityId() + "` not found.");
            }
        }
        return communityResult;
    }

    public CommunityResult deleteById(int communityId) {
        CommunityResult communityResult = new CommunityResult();

        if (!repository.deleteById(communityId)) {
            communityResult.addMessage(ActionStatus.NOT_FOUND, "Community id `" + communityId + "` not found.");
        }
        return communityResult;
    }

    private CommunityResult validate(Community community) {
        CommunityResult communityResult = new CommunityResult();

        if (community == null) {
            communityResult.addMessage(ActionStatus.INVALID, "Community cannot be null");
        }
        if (community.getName() == null || community.getName().isBlank()) {
            communityResult.addMessage(ActionStatus.INVALID, "Community name is required.");
        }
        return communityResult;
    }
}
