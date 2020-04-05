Ext.Loader.setConfig({
	enabled : true
});
Ext.application({
	name : 'AM',
	controllers : [ 'Users' ],
	appFolder : 'app',
	autoCreateViewport : false,
	launch : function() {
		// Ext.create('Ext.container.Viewport', {
		// layout : 'fit',
		// items : [ {
		// xtype : 'userlist'
		// } ]
		// });

		// Ext.create('Ext.panel.Panel',{
		// renderTo:Ext.getBody(),
		// width:400,
		// height:300,
		// title:'Container Pannel',
		// items:[{
		// xtype:'panel',
		// title:'Child Panel 1',
		// height:100,
		// width:'75%'
		// },{
		// xtype:'panel',
		// title:'Child Panel 2',
		// height:100,
		// width:'75%'
		// }]
		// });

		//		

		//		
		// Ext.create('Ext.panel.Panel',{
		// renderTo:Ext.getBody(),
		// width:400,
		// height:200,
		// title:'Container Panel',
		// layout:'column',
		// items:[{
		// xtype:'panel',
		// title:'Child Panel 1',
		// height:100,
		// width:'50%'
		// },{
		// xtype:'panel',
		// title:'Child Panel 2',
		// height:100,
		// width:'50%'
		// }]
		// });

		// var containerPanel = Ext.create('Ext.panel.Panel', {
		// renderTo : Ext.getBody(),
		// width : 400,
		// height : 200,
		// title : 'Container Panel',
		// layout : 'column',
		// suspendLayout : true
		// });
		//		
		// containerPanel.add({
		// xtype:'panel',
		// title:'Child Panel 1',
		// height:100,
		// width:'50%'
		// });
		//		
		// containerPanel.add({
		// xtype:'panel',
		// title:'Child Panel 2',
		// height:100,
		// width:'50%'
		// });
		//		
		//		
		// containerPanel.suspendLayout=false;
		//		
		// containerPanel.doLayout();

		// Ext.define('User', {
		// extend : 'Ext.data.Model',
		// fields : [ {
		// name : 'id',
		// type : 'int'
		// }, {
		// name : 'name',
		// type : 'string'
		// } ]
		// });
		//		
		//		
		//		
		// Ext.create('Ext.data.Store',{
		// model:'User',
		// proxy:{
		// type:'ajax',
		// url:'http://localhost:8080/Extjs4/account_manager/user.json',
		// reader:'json'
		// },
		// autoLoad:true
		// });

		Ext.create('Ext.Window', {
			width : 400,
			height : 230,
			x : 10,
			y : 10,
			plain : true,
			headerPosition : 'left',
			title : 'ExtJS4 Window的创建,头在左'
		}).show();

		Ext.create('Ext.Window', {
			width : 400,
			height : 230,
			x : 500,
			y : 10,
			plain : true,
			headerPosition : 'right',
			title : 'ExtJS4 Windows的创建，头在右'
		}).show();

		Ext.create('Ext.Window', {
			width : 400,
			height : 230,
			x : 10,
			y : 300,
			plain : true,
			headerPosition : 'bottom',
			title : 'ExtJS4 Window的创建，头在底'
		}).show();

		var win = Ext.create('Ext.Window', {
			width : 400,
			height : 230,
			x : 500,
			y : 300,
			plain : true,
			headerPosition : 'top',
			title : 'EXTJS4 Window的创建'
		});

		win.show();

	}
});
