const mockery = require('mockery');
// libreria para assertions
const chai = require('chai');

const expect = chai.expect;

// desripcion general del test
describe('checkLengthUserIdMiddleware', () => {
  // funcion para ejecutar antes de cada caso de prueba
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });
  // funcion para ejecutar después de cada caso de prueba
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('Unit test of middleware', () => {
    it('should return next() when id length is mayor of 23 characters', () => {
      expect(true).to.be.an('Object');
    });
  });
});