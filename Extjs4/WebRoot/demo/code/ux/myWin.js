Ext.define('ux.myWin', {
	extend : 'Ext.window.Window',
	width : 400,
	height : 300,
	title : 'uspcat',
	newtitle : 'newtitle',
	mySetTile : function() {
		this.title = this.newtitle;
	},
	initComponent : function() {
		//this.mySetTile();
		this.callParent(arguments);
	}
});