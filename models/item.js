NEWSCHEMA('Item').make(function(schema) {

	schema.define('id', 'UID');
	schema.define('date', 'Date', true);
	schema.define('pay', 'String', true);
	schema.define('present', 'Object', true);
	
	schema.setSave(function($) {

		var item = NOSQL('item');

		// Removes hidden properties of the SchemaBuilder
		var data = $.model.$clean();

		// Checks if exists
		if ($.model.id) {

			data.dateupdated = F.datetime;

			// We don't need to modify id
			data.id = undefined;

			item.modify(data).backup().make(function(builder) {
				builder.where('id', $.model.id);
				builder.callback(SUCCESS($.callback));
			});

		} else {

			data.id = UID();
			data.datecreated = F.datetime;
			item.insert(data).callback(SUCCESS($.callback));

		}

	});

	schema.setGet(function($) {

		var item = NOSQL('item');

		// Reads
		item.one().make(function(builder) {
			builder.where('id', $.options.id);
			builder.callback($.callback, 'error-item-404');
		});

	});

	schema.setQuery(function($) {

		var item = NOSQL('item');
		var options = $.options;

		// Reads
		item.find().make(function(builder) {
			builder.fields('id', 'date', 'pay', 'present');
			builder.callback($.callback);
		});

	});

	schema.setRemove(function($) {

		var item = NOSQL('item');

		// Removes
		item.remove().backup().make(function(builder) {
			builder.where('id', $.options.id);
			builder.callback(SUCCESS($.callback));
		});

	});
});