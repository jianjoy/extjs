Ext.define('AM.store.Users', {
	extend : 'Ext.data.Store',
	fields : [ 'name', 'email' ],
	// data : [ {
	// name : 'Ed',
	// email : 'ed@sencha.com'
	// }, {
	// name : 'Tommy',
	// email : 'tommy@sencha.com'
	// } ]

	autoLoad : true,
	api : {
		read : 'data/users.json',
		update : 'data/updateUsers.json'
	},
	proxy : {
		type : 'ajax',
		url : 'http://www.baidu.com',
		reader : {
			type : 'json',
			root : '',
			successProperty : 'success'
		}
	}
});