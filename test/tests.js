var server = require('../server.js');

describe('server response', function () {
	before(function () {
		server.listen(8000);
  	});

	it('should return 400', function (done) {
		request.get('http://localhost:8000', function (err, res, body){
			expect(res.statusCode).to.equal(400);
			expect(res.body).to.equal('wrong header');
			done();
		});
	});

	it('should return 200', function (done) {
		var options = {
    		url: 'http://localhost:8000',
    		headers: { 'Content-Type': 'text/plain' }
  		};
  		request.get(options, function (err, res, body) {
    		expect(res.statusCode).to.equal(200);
    		expect(res.body).to.equal('correct header');
    		done();
  		});
	});

  	after(function () {
    	server.close();
  	});
});