const setResponseWithError = (res, status, message, code = 'ERROR') => {
  return res.status(status).send({ code, message });
}

const setResponseWithOk = (res, status, message, code = 'OK') => {
  return res.status(status).send({ code, message });
}

const setResponseRaw = (res, status, message) => {
  return res.status(status).send(message);
}

module.exports = {
  setResponseWithError,
  setResponseWithOk,
  setResponseRaw
};
