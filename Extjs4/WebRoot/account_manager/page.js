Ext.require([ 'Ext.grid.*', 'Ext.toolbar.Paging', 'Ext.data.*' ]);

Ext.onReady(function() {
	Ext.define('MyData', {
		extend : 'Ext.data.Model',
		fields : [ 'title', 'author', {
			name : 'hits',
			type : 'int'
		}, 'addtime' ]
	});

	var store = Ext.create('Ext.data.Store', {
		pageSize : 50,
		model : 'MyData',
		remoteSort : true,
		proxy : {
			type : 'ajax',
			url : 'mydata.asp',
			reader : {
				root : 'items',
				totalProperty : 'total'
			},
			simpleSortMode : true
		},
		sorters : [ {
			property : 'hits',
			direction : 'DESC'
		} ]
	});

	var grid = Ext.create('Ext.grid.Panel', {
		store : store,
		columns : [ {
			text : '标题',
			width : 120,
			dataIndex : 'title',
			sortable : true
		}, {
			text : '作者',
			flex : 200,
			dataIndex : 'author',
			sortable : true

		}, {
			text : '点击数',
			width : 100,
			dataIndex : 'hits',
			sortable : true

		}, {
			text : '添加时间',
			width : 100,
			dataIndex : 'addtime',
			sortable : true
		} ],
		height : 400,
		width : 520,
		x : 20,
		y : 40,
		title : 'ExtJS4 Grid 分页示例',
		disableSelection : true,
		loadMask : true,
		renderTo : 'demo',
		viewConfig : {
			id : 'gv',
			trackOver : false,
			stripeRows : false
		},
		bbar : Ext.create('Ext.PagingToolbar', {
			store : store,
			displayInfo : true,
			displayMsg : '显示 {0} - {1} 条, 共计 {2} 条',
			emptyMsg : '没有数据'
		})
	});

	store.loadPage();

});