exports.install = function() {

	F.websocket('/', reader, ['json']);

};

function reader() {
	var self = this;
	self.on('message', function(client, message) {
		switch (message.url) {
			default:
				client.send({ status: 404 });
				break;
		}
	});
}