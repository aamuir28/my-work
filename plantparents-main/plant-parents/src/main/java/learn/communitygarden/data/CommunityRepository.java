package learn.communitygarden.data;

import learn.communitygarden.models.Community;

import java.util.List;

public interface CommunityRepository {
    List<Community> findAll();

    Community findById(int communityId);

    Community add(Community community);

    boolean update(Community community);

    boolean deleteById(int communityId);
}
