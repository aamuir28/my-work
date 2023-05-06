package learn.communitygarden.controllers;

import learn.communitygarden.domain.Result;
import learn.communitygarden.domain.ActionStatus;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ErrorResponse {
    public static <T> ResponseEntity<Object> build(Result<T> result) {
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
        if (result.getType() == null || result.getType() == ActionStatus.INVALID) {
            status = HttpStatus.BAD_REQUEST;
        } else if (result.getType() == ActionStatus.NOT_FOUND) {
            status = HttpStatus.NOT_FOUND;
        }
        return new ResponseEntity<>(result.getMessages(), status);
    }
}
