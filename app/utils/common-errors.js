class DomainError extends Error {
  constructor(code, msg) {
    super(msg);
    this.name = this.constructor.name;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 400;
  }
}

class UnauthorizedError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 401;
  }
}

class ForbiddenError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 403;
  }
}

class NotFoundError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 404;
  }
}

class TimeoutError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 408;
  }
}
class ConnectionError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 500;
  }
}

class AppError extends DomainError {
  constructor(code, msg) {
    super(code, msg);
    this.status = 500;
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  TimeoutError,
  ConnectionError,
  AppError
};
