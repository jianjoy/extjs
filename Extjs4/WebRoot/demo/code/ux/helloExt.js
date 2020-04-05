Ext.define('ux.helloExt', {
	extend : 'Ext.container.Viewport',
	layout : 'fit',
	items : [ {
		title : 'Hello Ext',
		html : 'Hello! Welcome to Ext JS.'
	} ],
	initCompnent : function() {
		this.callParent(arguments);
	}
});