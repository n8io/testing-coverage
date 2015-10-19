var envNormSpec = require('./environmentNormalizer');

module.exports = function() {
  describe("environment normalizer", function() {
    it("should return local when passing loc", envNormSpec.loc);
    it("should return local when passing local", envNormSpec.local);
    it("should return dev when passing ci", envNormSpec.ci);
    it("should return dev when passing dev", envNormSpec.dev);
    it("should return dev when passing development", envNormSpec.development);
    it("should return qa when passing qa", envNormSpec.qa);
    it("should return prod when passing prod", envNormSpec.prod);
    it("should return prod when passing production", envNormSpec.production);
    it("should return prod when passing PRODUCTION", envNormSpec.caseInsensitive);
    it("should return prod when passing NOT_VALID", envNormSpec.notValid);
    it("should return prod when passing empty string", envNormSpec.emptyString);
  });
};
