exports.install = function() {

	// Sets cors for this all API
	CORS('/api/*', ['get', 'post', 'put', 'delete'], true);

	// Routes
	ROUTE('/api/v1/items/',      item_query,   ['*Item']);
	ROUTE('/api/v1/items/{id}/', item_read,    ['*Item']);
	ROUTE('/api/v1/items/',      item_save,    ['*Item', 'post']);
	ROUTE('/api/v1/items/{id}/', item_save,    ['*Item', 'put']);
	ROUTE('/api/v1/items/{id}/', item_delete,  ['*Item', 'delete']);

};

function item_query() {
	var self = this;
	var options = {};

	options.search = self.query.search;

	self.$query(options, self.callback());
}

function item_read(id) {
	var self = this;
	var options = {};

	options.id = id;

	self.$get(options, self.callback());
}

function item_save(id) {
	var self = this;

	if (id)
		self.body.id = id;

	self.$save(self.callback());
}

function item_delete(id) {
	var self = this;
	var options = {};

	options.id = id;

	self.$remove(options, self.callback());
}