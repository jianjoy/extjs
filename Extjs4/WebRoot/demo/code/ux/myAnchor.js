Ext.define('ux.myAnchor', {
	extend : 'Ext.panel.Panel',
	width : 500,
	height : 400,
	title : 'Anchor布局',
	layout : 'anchor',
	x : 60,
	y : 80,
	renderTo : Ext.getBody(),
	items : [ {
		xtype : 'panel',
		title : '75% width 25% height',
		anchor : '75% 25%'
	}, {
		xtype : 'panel',
		title : 'Offset -300 Width & -200 Height',
		anchor : '-300 -200'
	}, {
		xtype : 'panel',
		title : 'Mixed Offset and Percent',
		anchor : '-250 30%'
	} ]
});