Ext.define('ux.myAccordion', {
	extend : 'Ext.panel.Panel',
	title : 'Accordion Layout',
	width : 300,
	height : 200,
	x : 20,
	y : 20,
	layout : 'accordion',
	defaults : {
		bodyStyle : 'padding:15px'
	},
	layoutConfig : {
		titleCollapse : false,
		animate : true,
		activeOnTop : true
	},
	items : [ {
		title : 'panel 1',
		html : 'panel content!'
	}, {
		title : 'panel 2',
		html : 'panel content2!'
	}, {
		title : 'panel 3',
		html : 'pannel content 3!'
	} ],
	renderTo : Ext.getBody()
});