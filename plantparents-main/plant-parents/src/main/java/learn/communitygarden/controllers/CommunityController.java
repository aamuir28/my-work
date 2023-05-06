package learn.communitygarden.controllers;

import learn.communitygarden.domain.CommunityResult;
import learn.communitygarden.domain.CommunityService;
import learn.communitygarden.models.Community;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/Community")
public class CommunityController {

    private final CommunityService communityService;

    public CommunityController(CommunityService service) {
        this.communityService = service;
    }

    @GetMapping
    public List<Community> findAll() {
        return communityService.findAll();
    }

    @GetMapping("/{communityId}")
    public ResponseEntity<Community> findById(@PathVariable int communityId) {
        Community community = communityService.findById(communityId);
        if (community == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(community);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Community community) {
        CommunityResult result = communityService.add(community);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getCommunity(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{communityId}")
    public ResponseEntity<Object> update(@PathVariable int communityId, @RequestBody Community community) {
        if (communityId != community.getCommunityId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        CommunityResult result = communityService.update(community);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{communityId}")
    public ResponseEntity<Void> deleteById(@PathVariable int communityId) {
        if (communityService.deleteById(communityId).isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
