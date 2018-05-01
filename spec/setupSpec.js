describe("Setup", function() {
  var request = require("request");
  var base_url = "http://localhost:3000/"
  describe("Starting Server", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    });
      });
