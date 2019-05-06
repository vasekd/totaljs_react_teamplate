exports.install = function() {
	ROUTE('/', getMethod);
};

function getMethod() {
	var self = this;

	return self.view('index');
}