const ClintErrorCodes = Object.freeze({
    BAD_REQUST:400,
    UNAUTHORISED: 401,
    NOT_FOUND: 404
});

const ServerErrorCode = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
});

const SuccessCodes = Object.freeze({
    Ok:200,
    CREATED:201
});

module.exports = {
    ClintErrorCodes,
    ServerErrorCode,
    SuccessCodes
}