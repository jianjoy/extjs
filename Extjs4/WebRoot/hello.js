//var tpl = Ext.create('Ext.Template', [ 'Hello {firstName} {lastName}',
//		' Nice to meet you!' ]);
//var formPanel = Ext.create('Ext.form.FormPanel', {
//	itemId : 'formPanel',
//	frame : true,
//	layout : 'anchor',
//	defaultType : 'textfield',
//	defaults : {
//		anchor : '-10',
//		labelWidth : 65
//	},
//	items : [ {
//		fieldLabel : 'First name',
//		name : 'firstName'
//	}, {
//		fieldLabel : 'Last name',
//		name : 'lastName'
//	} ],
//	buttons : [ {
//		text : 'Submit',
//		handler : function() {
//			var formPanel = this.up('#formPanel');
//			var vals = formPanel.getValues(), greeting = tpl.apply(vals);
//			Ext.Msg.alert('Hello!', greeting);
//		}
//
//	} ]
//});

Ext.onReady(function() {
	// Ext.create('Ext.window.Window', {
	// height : 125,
	// width : 200,
	// closable : false,
	// title : 'Input needed.',
	// border : false,
	// layout : 'fit',
	// items : formPanel
	// }).show();

	// var myDiv1 = Ext.get('div1');
	// myDiv1.setHeight(200);
	// myDiv1.createChild({
	// tag : 'div',
	// id : 'nestedDiv',
	// style : 'border:1px dashed;padding:5px;',
	// children : {
	// tag : 'div',
	// html : '... a nested div',
	// style : "color:#EE0000;border:1px solid"
	// }
	// });

	// var myTpl = Ext.create('Ext.Template', [
	// '<div style="background-color: {color};margin:10px;">',
	// '<b> Name : </b> {name} <br/>', '<b> Age : </b> {age} <br/>',
	// '<b> DOB : </b> {dob} <br/>', '</div>' ]);
	//
	// myTpl.compile();
	//
	// myTpl.append(document.body, {
	// color : '#E9E9FF',
	// name : 'John Smith',
	// age : 20,
	// dob : '10/20/89'
	// });
	//
	// myTpl.append(document.body, {
	// color : '#FFE9E9',
	// name : 'Naomi White',
	// age : 25,
	// dob : '03/17/84'
	// });

	// var tplData = [ {
	// color : '#FFE9E9',
	// name : 'Naomi White',
	// age : 25,
	// dob : '03/17/84',
	// cars : [ 'Jetta', 'Camry', 'S2000' ]
	// }, {
	// color : '#E9E9FF',
	// name : 'John Smith',
	// age : 20,
	// dob : '10/20/89',
	// cars : [ 'Civic', 'Accord', 'Camry' ]
	// } ];

	// var myTpl = Ext.create('Ext.XTemplate', [
	// '<tpl for=".">',
	// '<div style="background-color:{color}; margin:10px;">',
	// '<b> Name:</b> {name} <br/>',
	// '<b> Age:</b> {age} <br/>',
	// '<b> DOB:</b> {dob} <br/>',
	// '<b> Cars:</b>',
	// '<tpl for="cars">',
	// '[{.}]',
	// '<tpl if="this.isCamry(values)">',
	// '<b>(same car)</b>',
	// '</tpl>',
	// '{[ (xindex < xcount) ?", ":""]}',
	// '</tpl>',
	// '<br/>',
	// '</div>',
	// '</tpl>',
	// {
	// isCamry : function(car) {
	// return car === 'Camry';
	// }
	// }
	// ]);

	// var myTpl = new Ext.XTemplate(
	// '<tpl for=".">',
	// '<div style="background-color:{color}; margin:10px;">',
	// '<b> Name:</b> {name} <br/>',
	// '<b> Age:</b> {age} <br/>',
	// '<b> DOB:</b> {dob} <br/>',
	// '<b> Cars:</b>',
	// '<tpl for="cars">',
	// '[{.}]',
	// '<tpl if="this.isCamry(values)">',
	// '<b>(same car)</b>',
	// '</tpl>',
	// '{[ (xindex < xcount) ?", ":""]}',
	// '</tpl>',
	// '<br/>',
	// '</div>',
	// '</tpl>',
	// {
	// isCamry : function(car) {
	// return car === 'Camry';
	// }
	// }
	// );
	//
	// myTpl.compile();
	// myTpl.append(document.body, tplData);

	// var tplData = [{
	// color : "#FFE9E9",
	// name : 'Naomi White',
	// age : 25,
	// dob : '03/17/84',
	// cars : ['Jetta', 'Camry', 'S2000', "M3"]
	// },{
	// color : "#E9E9FF",
	// name : 'John Smith',
	// age : 20,
	// dob : '10/20/89',
	// cars : ['Civic', 'Accord', 'Camry']
	// }];
	//
	// var myTpl = new Ext.XTemplate(
	// '<tpl for=".">',
	// '<div style="background-color: {color}; margin: 10px;">',
	// '<b> Name :</b> {name}<br />',
	// '<b> Age :</b> {age}<br />',
	// '<b> DOB :</b> {dob}<br />',
	// '<b> Cars : </b>',
	// '<tpl for="cars">',
	// '[{.}]',
	// '<tpl if="this.isCamry(values)">',
	// '<b> (same car)</b>',
	// '</tpl>',
	// '{[ (xindex < xcount) ? ", " : "" ]}',
	// '</tpl>',
	// '<br />',
	// '</div>',
	// '</tpl>',
	// {
	// isCamry : function(car) {
	// return car === 'Camry';
	// }
	// }
	// );
	// myTpl.compile();
	//
	// myTpl.append(document.body, tplData);

	// Ext.define('MyApp.CustomClass', {
	// extend : 'Ext.panel.Panel',
	// alias : 'widget.myCustomComponent'
	// });
	//
	// var panel1 = {
	// xtype : 'panel',
	// title : 'Plain Panel',
	// html : 'Panel with an xtype specified'
	// };
	//
	// var panel2 = {
	// title : 'Plain Panel 2',
	// html : 'Panel with <b>no</b> xtype specified'
	// };
	//
	// Ext.create('Ext.window.Window', {
	// width : 200,
	// height : 150,
	// title : 'Accordion window',
	// border : false,
	// layout : {
	// type : 'accordion',
	// animate : true
	// },
	// items : [ panel1, panel2 ]
	// }).show();

	// Ext.create('Ext.window.Window',{
	// width:200,
	// height:150,
	// title:'Accordion window',
	// layout:'accordion',
	// border:false,
	// layoutConfig:{
	// animate:true
	// },
	// items:[{
	// xtype:'panel',
	// title:'Plain Panel',
	// html:'Panel with an xtype specified'
	// },{
	// title:'Plain Panel 2',
	// html:'Panel with <b>no</b> xtype specified'
	// }]
	// }).show ();

	// var myPanel = Ext.create('Ext.panel.Panel',{
	// // renderTo:document.body,
	// height:150,
	// width:200,
	// title:'Panel rendered immediately',
	// frame:true
	// });
	// myPanel.render(document.body);

	// var panel1 = {
	// title:'Panel1',
	// html: '<b>I am Panel1</b>',
	// id:'panel1',
	// frame:true,
	// height:100
	// };
	//	
	//	
	//	
	// var panel2 = {
	// title:'Panel2',
	// html:'<b>I am Panel2</b>',
	// id:'panel2',
	// frame:true,
	// height:100
	// };
	//	
	//	
	//	
	// var myWin = Ext.create('Ext.window.Window',{
	// id:'myWin',
	// height:400,
	// width:400,
	// items:[panel1,panel2]
	// });
	// myWin.show();
	//	
	// Ext.getCmp('myWin').add({
	// title:'Appended Panel',
	// id:'addedPanel',
	// html:'Hello there!'
	// });
	//	
	// Ext.getCmp('myWin').insert(1,{
	// title:'Inserted Panel',
	// id:'insertedPanel',
	// html:'It is cool here!'
	// });
	//	
	// var panel = Ext.getCmp('addedPanel');
	// Ext.getCmp('myWin').remove(panel);
	// Ext.getCmp('myWin').remove(Ext.getCmp('insertedPanel'));

	// Ext.create('Ext.container.Viewport',{
	// layout:'border',
	// items:[{
	// height:75,
	// region:'north',
	// title:'Does Santa live here'
	// },{
	// width:150,
	// region:'west',
	// title:'The west region rules'
	// },{
	// region:'center',
	// title:'No, this region rules'
	// }]
	// });

	// var myBtnHandler = function(btn) {
	// Ext.MessageBox.alert('You Clicked', btn.text);
	// }, fileBtn = Ext.create('Ext.button.Button', {
	// text : 'File',
	// handler : myBtnHandler
	// }), editBtn = Ext.create('Ext.button.Button', {
	// text : 'Edit',
	// handler : myBtnHandler
	// }), tbFill = new Ext.toolbar.Fill();
	//
	// var myTopToolbar = Ext.create('Ext.toolbar.Toolbar', {
	// items : [ fileBtn, tbFill, editBtn ]
	// });
	//
	// var myBottomToolbar = [ {
	// text : 'Save',
	// handler : myBtnHandler
	// }, '-', {
	// text : 'Cancel',
	// handler : myBtnHandler
	// }, '->', '<b>Items open:1</b>' ];
	//	
	//	
	// var myPanel = Ext.create('Ext.panel.Panel',{
	// width:200,
	// height:150,
	// title:'Ext Panels rock!',
	// collapsible:true,
	// renderTo:Ext.getBody(),
	// tbar:myTopToolbar,
	// bbar:myBottomToolbar,
	// html:'My first Toolbar Panel!',
	// buttonAlign:'left',
	// buttons:[{
	// text:'Press me!',
	// handler:myBtnHandler
	// }],
	// tools:[{
	// type:'gear',
	// handler:function(evt,toolEl,panel){
	// // alert(toolEl.className);
	// // var toolClassNames = toolEl.className.split(' ');
	// // var toolClass = toolClassNames[1];
	// var toolId = toolEl.className.split('-')[2];
	// Ext.MessageBox.alert('You Clicked','Tool '+toolId);
	// }
	// },{
	// type:'help',
	// handler:function(){
	// Ext.MessageBox.alert('You Clicked','The help tool');
	// }
	// }]
	// });
	//	

	// var buttons = [{
	// text:'Btn 1'
	// },{
	// text:'Btn 2'
	// },{
	// text:'Btn 3'
	// }];
	//	
	//	
	// var topDockedToolbar = {
	// xtype:'toolbar',
	// dock:'top',
	// items:buttons,
	// weight:1
	// };
	//	
	// var bottomDockedToolbar = {
	// xtype:'toolbar',
	// dock:'bottom',
	// items:buttons,
	// weight:7
	// };
	//	
	//	
	//	
	// var leftDockedToolbar = {
	// xtype:'toolbar',
	// vertical:true,
	// dock:'left',
	// items:buttons,
	// weight:3
	// };
	//	
	// var rightDockedToolbar = {
	// xtype:'toolbar',
	// vertical:true,
	// dock:'right',
	// items:buttons,
	// weight:5
	// }

	// var myPanel = Ext.create('Ext.panel.Panel',{
	// width: 350,
	// height:250,
	// title:'Ext Panels rock!',
	// renderTo:Ext.getBody(),
	// html:'Content body',
	// buttons:{
	// weight:-1,
	// items:buttons
	// },
	// dockedItems:[topDockedToolbar,bottomDockedToolbar,leftDockedToolbar,rightDockedToolbar]
	// });

	// var newWindow = function(btn){
	//		
	// };
	//	
	// new Ext.Button({
	// renderTo:Ext.getBody(),
	// text:'Open my Window',
	// style:'margin:10px',
	// handler:newWindow
	// });
	//	
	// newWindow();

	// var myPanel = Ext.create('Ext.panel.Panel',{
	// renderTo:Ext.getBody(),
	//
	// });
	//	
	// var win = Ext.create('Ext.window.Window',{
	// html:'Try to move or resize me.I dare you.',
	// plain:true,
	// border:false,
	// resizable:false,
	// draggable:false,
	// closable:false,
	// height:75,
	// width:200,
	// modal:true,
	// title:'This is one rigid window',
	// buttonAlign:'center',
	// buttons:[{
	// text:'I give up!',
	// handler:function(){
	// win.close();
	// }
	// }]
	// });
	// win.show();

	// var win = Ext.create('Ext.window.Window', {
	// height : 75,
	// width : 200,
	// modal : true,
	// title : 'This is one rigid window',
	// html : 'Try to move or resize me. I dare you.',
	// plain : true,
	// border : false,
	// resizable : false,
	// draggable : false,
	// closable : false,
	// align : 'center',
	// buttons : [ {
	// text : 'I give up!',
	// handler : function() {
	// win.close();
	// }
	// } ]
	// });
	// win.show();
	//
	// var myCallback = function(btn, text) {
	// console.info('You pressed ' + btn);
	// if (text) {
	// console.info('You entered:' + text);
	// }
	// };

	// var msg = 'Please enter your email address.';
	// var title = 'Input Required';
	// Ext.MessageBox.prompt(title,msg,myCallback);

	// Ext.Msg.show({
	// title : 'Input required:',
	// msg : 'Please tell us a little about yourself',
	// width : 300,
	// buttons : Ext.Msg.OKCANCEL,
	// multiline : true,
	// fn : myCallback,
	// icon : Ext.MessageBox.INFO
	// });

	// Ext.Msg.show({
	// title : 'Hold an there cowboy!',
	// msg : 'Are you sure you want to reboot the internet?',
	// width : 300,
	// buttons : Ext.Msg.YESNOCANCEL,
	// multiline : true,
	// fn : myCallback,
	// icon : Ext.MessageBox.ERROR
	// });

	// Ext.MessageBox.wait('We\'re doing something ...','Hold on...');

	// Ext.MessageBox.show({
	// title : 'Hold on there cowboy!',
	// msg : 'We\'re doing something...',
	// progressText : 'Initialzing...',
	// width : 300,
	// progress : true,
	// closable : false
	// });
	//
	// var updateFn = function(num) {
	// return function() {
	// if (num == 6) {
	// Ext.MessageBox.updateProgress(100, 'All Items saved!');
	// Ext.Function.defer(Ext.MessageBox.hide, 1500, Ext.MessageBox);
	// } else {
	// var i = num / 6;
	// var pct = Math.round(100 * i);
	// Ext.MessageBox.updateProgress(i, pct + '% completed');
	// }
	//
	// };
	// };

	// for (var i = 1; i < 7; i++) {
	// setTimeout(updateFn(i), i * 500);
	// }

	// var simpleTab = {
	// title : 'Simple tab',
	// html : 'This is a simple tab.'
	// };
	//
	// var closeTab = {
	// title : 'I am closeable',
	// html : 'Please close when done reading.',
	// closable : true
	// };
	//
	// var disableTab = {
	// title : 'Disable tab',
	// itemId : 'disableTab',
	// html : 'Peekahooo!',
	// disabled : true,
	// closable : true
	// };
	//
	// var tabPanel = Ext.create('Ext.tab.Panel', {
	// activeTab : 0,
	// itemId : 'myTPanel',
	// items : [ simpleTab, closeTab, disableTab ]
	// });
	//	
	//	
	// Ext.create('Ext.window.Window',{
	// height:300,
	// width:400,
	// layout:'fit',
	// items:tabPanel
	// }).show();
	//	
	//	
	// var tPanel = Ext.ComponentQuery.query('#myTPanel')[0];
	//	
	// tPanel.add({
	// title:'New tab',
	// itemId:'myNewTab',
	// html:'I am a new tab'
	// });
	// tPanel.setActiveTab('myNewTab');
	//	
	//	
	//	
	// tPanel.down('#disableTab').tab.hide();
	//	
	// tPanel.down('#disableTab').tab.show();
	//	
	// tPanel.setActiveTab(1);

	// var childPnl1 = {
	// frame:true,
	// height:50,
	// html:'My First Child Panel',
	// title:'First children are fun'
	// };
	//	
	// var childPnl2 = {
	// width:150,
	// title:'Second children have all the fun!',
	// html:'Second child'
	// };
	//	
	//	
	// var myWin = Ext.create('Ext.Window',{
	// height:300,
	// width:300,
	// title:'A window with a container layout',
	// autoScroll:true,
	// items:[childPnl1,childPnl2],
	// tbar:[{
	// text:'Add child',
	// handler:function(){
	// var numItems = myWin.items.getCount() +1;
	// myWin.add({
	// title:'Child number '+numItems,
	// height:60,
	// frame:true,
	// collapsible:true,
	// collapsed:true,
	// html:'Yay, another child!'
	// });
	//				
	// }
	// }]
	// });

	// myWin.show();

	// var myWin = Ext.create('Ext.Window',{
	// height: 300,
	// width:300,
	// layout:'anchor',
	// border:false,
	// anchorSize:'400',
	// items:[{
	// title:'Panel1',
	// anchor:'-50, -150',
	// frame:true
	// },{
	// title:'Panel2',
	// anchor:'-10, -150',
	// frame:true
	// },{
	// title:'Panel3',
	// anchor:'50%,25%',
	// frame:true
	// }]
	// });
	//	
	// myWin.show();

	//	
	// var myWin = Ext.create('Ext.Window',{
	// height:300,
	// width:300,
	// layout:'absolute',
	// autoScroll:true,
	// border:false,
	// items:[{
	// title:'Panel1',
	// x:50,
	// y:50,
	// height:100,
	// width:100,
	// html:'x:50,y:50',
	// frame:true
	// },{
	// title:'Panel2',
	// x:90,
	// y:120,
	// height:75,
	// width:100,
	// html:'x:90,y:120',
	// frame:true
	// }]
	// });
	//	
	// myWin.show();
	//	

	// var myWin = Ext.create('Ext.Window',{
	// height:200,
	// width:200,
	// layout:'fit',
	// border:false,
	// items:[
	// {
	// title:'Panel1',
	// html:'I fit in my parent!',
	// frame:true
	// }]
	// });
	//	
	// myWin.show();

	// var myWin = Ext.create('Ext.Window', {
	// height : 200,
	// width : 300,
	// border : false,
	// title : 'A Window with an Accordion layout',
	// layout : 'accordion',
	// layoutConfig : {
	// animate : true
	// },
	// items : [ {
	// xtype : 'form',
	// title : 'General info',
	// bodyStyle : 'padding:5px',
	// defaultType : 'field',
	// fieldDefaults : {
	// labelWidth : 50
	// },
	// labelWidth : 50,
	// items : [ {
	// fieldLabel : 'Name',
	// anchor : '-10'
	// }, {
	// xtype : 'field',
	// fieldLabel : 'Age',
	// size : 3
	// }, {
	// xtype : 'combo',
	// fieldLabel : 'Location',
	// anchor : '-10',
	// store : [ 'Here', 'There', 'Anywhere' ]
	// } ]
	//
	// }, {
	// xtype : 'panel',
	// title : 'Bio',
	// layout : 'fit',
	// items : {
	// xtype : 'textarea',
	// value : 'Tell us about yourself'
	// }
	// }, {
	// title : 'Instructions',
	// html : 'Please enter information.',
	// tools : [ {
	// id : 'gear'
	// }, {
	// id : 'help'
	// } ]
	// } ]
	//
	// });
	//
	// myWin.show();

	// var handNav = function(btn){
	// var activeItem = myWin.layout.activeItem,
	// index= myWin.items.indexOf(activeItem),
	// numItems = myWin.items.getCount(),
	// indicatorEl = Ext.getCmp('indicator').el;
	//		
	// if(btn.text=='Forward'&&index < numItems-1){
	// index++;
	// myWin.layout.setActiveItem(index);
	// index++;
	// indicatorEl.update(index+' of '+ numItems);
	// }else if(btn.text == 'Back' && index>0){
	// myWin.layout.setActiveItem(index-1);
	// indicatorEl.update(index+' of '+numItems);
	// }
	//		
	// };
	//	
	//	
	// var myWin = Ext.create('Ext.Window',{
	// height:200,
	// width:300,
	// border:false,
	// title:'A Window with a Card layout',
	// layout:'card',
	// activeItem:0,
	// defaults:{border:false},
	// items:[{
	// xtype:'form',
	// title:'General info',
	// bodyStyle:'padding:5px',
	// defaultType:'field',
	// labelWidth:50,
	// items:[{
	// fieldLabel:'Name',
	// anchor:'-10'
	// },{
	// xtype:'numberfield',
	// fieldLabel:'Age',
	// size:3
	// },{
	// xtype:'combo',
	// fieldLabel:'Location',
	// store:['Here','There','Anywhere']
	// }]
	// },
	// {
	// xtype:'panel',
	// title:'Bio',
	// layout:'fit',
	// items:{
	// xtype:'textarea',
	// value:'Tell us about yourself'
	// }
	// },
	// {
	// title:'Congratulations',
	// html:'Thank you for billing'
	// }
	//		
	// ],
	// dockedItems:[{
	// xtype:'toolbar',
	// dock:'bottom',
	// items:[{
	// text:'Back',
	// handler:handNav
	// },
	// '-',
	// {
	// text:'Forward',
	// handler:handNav
	// },
	// '->',
	// {
	// type:'component',
	// id:'indicator',
	// style:'margin-right:5px',
	// html:'1 of 3'
	// }
	// ]
	// }]
	// });
	//	
	//	
	// myWin.show();

	// var myWin = Ext.create('Ext.Window',{
	// height:200,
	// width:400,
	// autoScroll:true,
	// id:'myWin',
	// title:'A Window with a Column layout',
	// layout:'column',
	// defaults:{
	// frame:true
	// },
	// items:[{
	// title:'Col 1',
	// id:'col1',
	// columnWidth:.3
	// },{
	// title:'Col 2',
	// html:'20% relative width',
	// columnWidth:.2
	// },{
	// title:'Col 3',
	// html:'100px fixed width',
	// width:100
	// },{
	// title:'Col 4',
	// frame:true,
	// html:'50% relative width',
	// columnWidth:.5
	// }]
	// });
	//	
	//	
	// myWin.show();
	//	
	// Ext.getCmp('col1').add({
	// height:250,
	// title:'New Panel',
	// frame:true
	// });
	//	

	// Ext.create('Ext.Window',{
	// layout:'vbox',
	// height:300,
	// width:300,
	// title:'A Container with an HBox layout',
	// layoutConfig:{
	// align:'left'
	// },
	// defaults:{
	// frame:true,
	// width:75
	// },
	// items:[{
	// title:'Panel 1',
	// flex:1
	// },{
	// title:'Panel 2',
	// flex:1
	// },{
	// title:'Pannel 3',
	// flex:2
	// }]
	// }).show();

	// var myWin = Ext.create('Ext.Window',{
	// height:300,
	// width:300,
	// border:false,
	// autoScroll:true,
	// title:'A Window with a Table layout',
	// layout:{
	// type:'table',
	// columns:3
	// },
	// defaults:{
	// height:50,
	// width:50
	// },
	// items:[
	// {
	// html:'1',
	// colspan:3,
	// width:150
	// },{
	// html:'2',
	// rowspan:2,
	// height:100
	// },{
	// html:'3'
	// },{
	// html:'4',
	// rowspan:2,
	// height:100
	// },{
	// html:'5'
	// },{
	// html:'6'
	// },{
	// html:'7'
	// },{
	// html:'8'
	// },{
	// html:'9',
	// colspan:3,
	// width:150
	// }]
	// });
	//	
	// myWin.show();

	// Ext.create('Ext.Viewport',{
	// layout:'border',
	// defaults:{
	// frame:true,
	// split:true
	// },
	// items:[
	// {
	// title:'North Panel',
	// region:'north',
	// height:100,
	// minHeight:100,
	// maxHeight:150,
	// collapsible:true
	//		    		   
	// },{
	// title:'Sourth Panel',
	// region:'south',
	// height:75,
	// split:false,
	// margins:{
	// top:5
	// }
	// },{
	// title:'East Panel',
	// region:'east',
	// width:100,
	// minWidth:75,
	// maxWidth:150,
	// collapsible:true
	// },{
	// title:'West Panel',
	// region:'west',
	// collapsible:true,
	// collapseMode:'mini',
	// width:100
	// },{
	// xtype:'container',
	// region:'center',
	// layout:'fit',
	// id:'centerRegion',
	// items:{
	// title:'Center Region',
	// id:'centerPanel',
	// html:'I am disposable',
	// frame:true
	// }
	// }]
	// });
	//	
	//	
	// var centerPanel = Ext.getCmp('centerPanel'),
	// centerRegion = Ext.getCmp('centerRegion');
	//	
	// centerRegion.remove(centerPanel,true);
	//	
	//	
	// centerRegion.add({
	// xtype:'form',
	// frame:true,
	// bodyStyle:'padding: 5px',
	// defaultType:'field',
	// title:'Please center some information',
	// defaults:{
	// anchor:'-10'
	// },
	// items:[{
	// fieldLabel:'First Name'
	// },{
	// fieldLabel:'Last Name'
	// },{
	// xtype:'textarea',
	// fieldLabel:'Bio'
	// }]
	// });

	Ext.QuickTips.init();
	//	
	// var fpItems = [{
	// fieldLabel:'Alpha only',
	// allowBlank:false,
	// emptyText:'This field is empty!',
	// maskRe : /[a-z]/i,
	// msgTarget:'side'
	// },{
	// fieldLabel:'Simple 3 to 7 Chars',
	// allowBlank:false,
	// msgTarget:'under',
	// minLength:3,
	// maxLength:7
	// },{
	// fieldLabel:'Special Chars Only',
	// msgTarget:'qtip',
	// stripCharsRe: /[a-zA-Z0-9]/ig
	//			
	// },{
	// fieldLabel:'Web Only with VType',
	// vtype:'url',
	// msgTarget:'side'
	// }];
	//	
	//	
	// var fp = Ext.create('Ext.form.Panel',{
	// renderTo:Ext.getBody(),
	// width:400,
	// height:240,
	// title:'Exercising textfields',
	// frame:true,
	// bodyStyle:'padding:6px',
	// labelWidth:126,
	// defaultType:'textfield',
	// defaults:{
	// msgTarget:'side',
	// anchor:'-20'
	// },
	// items:fpItems
	// });
	//	
	// fp.getForm().isValid();
	// var remoteJsonStore = Ext.create('Ext.data.JsonStore',{
	// storeId:'people',
	// baseParams:{
	// column:'fullName'
	// },
	// fields:[{
	// name:'name',
	// mapping:'fullName'
	// },{
	// name:'id',
	// mapping:'id'
	// },{
	// name:'address',
	// mapping:'address'
	// },{
	// name:'city',
	// mapping:'city'
	// },{
	// name:'state',
	// mapping:'state'
	// },{
	// name:'zip',
	// mapping:'zip'
	// },{
	// name:'street',
	// mapping:'street'
	// }],
	// proxy:{
	// type:'ajax',
	// url:'http://extjsinaction.com/chapter08/dataQuery.php',
	// reader:{
	// type:'json',
	// root:'records',
	// totalProperty:'totalCount'
	// }
	// }
	//		
	// });
	//	
	// var combo = Ext.create('Ext.form.field.ComboBox',{
	// fieldLabel:'Search by name',
	// width:320,
	// forceSelection:true,
	// displayField:'name',
	// loadingText:'Querying...',
	// pageSize:20,
	// width:320,
	// valueField:'id',
	// minChars:1,
	// triggerAction:'all',
	// store:remoteJsonStore,
	// listConfig:{
	// getInnerTpl:function(){
	// return '<div data-qtip="{name}">'+
	// '<div class="combo-name">{name}</div>'+
	// '<div class="combo-full-address"> {street}</div>'+
	// '<div class="combo-full-address">'+
	// '{city} {state} {zip} </div>'+
	// '</div>';
	// }
	// }
	// });

	// var mySimpleStore = ({
	// type:'array',
	// fields:['name'],
	// data:[
	// ['Jack Slocum'],
	// ['Abe Elias'],
	// ['Aaron Conran'],
	// ['Evan Trimboli']
	// ]
	// });
	//	
	// var combo = {
	// xtype:'combo',
	// fieldLabel:'Select a name',
	// store:mySimpleStore,
	// displayField:'name',
	// typeAhead:true,
	// mode:'local'
	// };
	//	
	//	
	// var fpItems = [{
	// fieldLabel:'Password',
	// allowBlank:false,
	// inputType:'password'
	// },{
	// fieldLabel:'File',
	// allowBlank:false,
	// xtype:'filefield'
	// },{
	// xtype:'textarea',
	// fieldLabel:'My TextArea',
	// name:'myTextArea',
	// anchor:'100%',
	// height:100,
	// allowBlank:false
	// },{
	// xtype:'numberfield',
	// fieldLabel:'Numbers Only',
	// allowBlank:false,
	// emptyText:'This field is empty!',
	// decimalPrecision:3,
	// minValue:0.001,
	// maxValue:2
	// },
	// combo
	// ];

	// var fp = Ext.create('Ext.form.Panel',{
	// renderTo:Ext.getBody(),
	// width:400,
	// height:300,
	// title:'Exercising textfields',
	// frame:true,
	// bodyStyle:'padding:6px',
	// labelWidth:126,
	// defaultType:'textfield',
	// defaults:{
	// msgTarget:'side',
	// anchor:'-20'
	// },
	// items:fpItems
	// });

	// new Ext.Window({
	// title : '',
	// height : 100,
	// labelWidth : 100,
	// width : 350,
	// bodyStyle : 'padding: 5px',
	// items : combo
	// }).show();

	// var tf = {
	// xtype:'timefield',
	// fieldLabel:'Please select time',
	// anchor:'100%',
	// minValue:'09:00',
	// maxValue:'18:00',
	// increment:30,
	// format:'H:i'
	// };
	//	
	//	
	//	
	//	
	//	
	// new Ext.Window({
	// title : 'A time field Example',
	// layout : 'fit',
	// labelWidth : 100,
	// height : 70,
	// width : 250,
	// bodyStyle : 'padding: 5px',
	// items : tf
	// }).show();

	// var htmlEditor={
	// xtype:'htmleditor',
	// fieldLabel:'Enter in any text',
	// anchor:'100%',
	// enableFontSize:false,
	// enableFont:false,
	// allowBlank:false
	// };

	// var htmlEditor = Ext.create('Ext.form.HtmlEditor',{
	// fieldLabel:'Enter in any text',
	// anchor:'100% 100%',
	// allowBlank:false,
	// enableFontSize : false,
	// enableFont : false,
	// validate:function(){
	// var val = this.getValue();
	// return (this.allowBlank || val.length>1);
	// }
	// });

	//	
	// var form = {
	// xtype:'form',
	// labelWidth:100,
	// items:htmlEditor,
	// border:false
	// };
	//	
	// new Ext.Window({
	// title:'test html editor',
	// layout:'fit',
	// height:300,
	// width:640,
	// bodyStyle:'padding:20px',
	// items:form,
	// buttons:[{
	// text:'Is the html editor valid?',
	// handler:function(a,b){
	// var isValid = htmlEditor.validate();
	// var msg = (isValid)?'valid':'invalid';
	// Ext.MessageBox.alert('','The HTML Editor is '+msg);
	// }
	// }]
	// }).show();

	// var dateField={
	// xtype:'datefield',
	// fieldLabel:'Please select a date',
	// anchor:'100%',
	// labelWidth : 100,
	// };
	//	
	// new Ext.Window({
	// title : '',
	// layout : 'fit',
	// labelWidth : 100,
	// height : 70,
	// width : 250,
	// bodyStyle : 'padding: 5px',
	// items : dateField
	// }).show();

//	var checkboxes = [ {
//		xtype : 'checkbox',
//		fieldLabel : 'Which do you own',
//		boxLabel : 'Cat',
//		inputValue : 'cat'
//	}, {
//		xtype : 'checkbox',
//		fieldLabel : " ",
//		labelSeparator : ' ',
//		boxLabel : 'Dog',
//		inputValue : 'dog'
//	}, {
//		xtype : 'checkbox',
//		fieldLabel : ' ',
//		labelSeparator : ' ',
//		boxLabel : 'Fish',
//		inputValue : 'fish'
//
//	}, {
//		xtype : 'checkbox',
//		fieldLabel : ' ',
//		labelSeparator : ' ',
//		boxLabel : 'Bird',
//		inputValue : 'bird'
//	} ];
//
//    var fp = {
//            xtype      : 'form',
//            defaults: {
//              labelWidth : 200
//            },
//            items      : checkboxes,
//            frame      : true
//        };
//	new Ext.Window({
//		title : '',
//		height : 180,
//		width : 320,
//		items : fp
//	}).show();
	
	
//	var checkboxes = {
//		xtype:'checkboxgroup',
//		fieldLabel:'Which do you own',
//		anchor:'100%',
//		items:[{
//			boxLabel:'Cat',
//			inputValue:'cat'
//		},{
//			boxLabel:'Dog',
//			inputValue:'dog'
//		},{
//			boxLabel:'Fish',
//			inputValue:'fish'
//		},{
//			boxLabel:'Bird',
//			inputValue:'bird'
//		}]
//	};
//	
//	new Ext.Window({
//		title:'',
//		layout:'fit',
//		defaults:{
//			labelWidth:110,
//		},
//		height:90,
//		width:320,
//		bodyStyle:'padding:5px',
//		items:checkboxes
//	}).show();
	
	
//	var fieldset1 = {
//			xtype:'fieldset',
//			title:'Name',
//			flex:1,
//			border:false,
//			labelWidth:50,
//			defaultType:'textfield',
//			defaults:{
//				anchor:'-10',
//				allowBlank:false
//			},
//			items:[{
//				fieldLabel:'First',
//				name:'firstName'
//			},{
//				fieldLabel:'Middle',
//				name:'middle'
//			},{
//				fieldLabel:'Last',
//				name:'lastName'
//			}]
//	};
//	
//	
//	
//	var fieldset2 = Ext.apply({},{
//		flex:1,
//		labelWidth:30,
//		title:'Address Information',
//		defaults:{
//			layout:'column',
//			anchor:'100%'
//		},
//		items:[{
//			fieldLabel:'Address',
//			name:'address'
//		},{
//			fieldLabel:'Street',
//			name:'street'
//		},{
//			xtype:'container',
//			items:[{
//				xtype:'fieldcontainer',
//				columnWidth:.5,
//				items:[{
//					xtype:'textfield',
//					fieldLabel:'State',
//					name:'state',
//					labelWidth:100,
//					width:150
//				}]
//			},{
//				xtype:'fieldcontainer',
//				columnWidth:.5,
//				items:[{
//					xtype:'textfield',
//					fieldLabel:'Zip',
//					name:'zip',
//					labelWidth:30,
//					width:162
//				}]
//			}]
//		}]
//	},fieldset1);
//	
//	var fieldsetContainer = {
//			xtype:'container',
//			layout:{
//				type:'hbox',
//				align:'stretch'
//			},
//			height:150,
//			items:[fieldset1,fieldset2]
//	};
	
//	var fp = new Ext.form.Panel({
//		renderTo:Ext.getBody(),
//		width:700,
//		title:'Our complex form',
//		height:500,
//		frame:true,
//		style:'margin:20',
//		layout:{
//			type:'vbox',
//			align:'stretch'
//		},
//		defaults:{
//			msgTarget:'side'
//		},
//		items:[fieldsetContainer]
//		
//	});
//	
	
	
//	 var fieldset1 = {
//	            xtype       : 'fieldset',
//	            title       : 'Name Information',
//	            flex        : 1,
//	            border      : false,
//	            labelWidth  : 50,
//	            defaultType : 'textfield',
//	            defaults    : {
//	                anchor     : '-10',
//	                allowBlank : false
//	            },
//	            items : [
//	                {
//	                    fieldLabel : 'First',
//	                    name       : 'firstName'
//	                },
//	                {
//	                    fieldLabel : 'Middle',
//	                    name       : 'middle'
//	                },
//	                {
//	                    fieldLabel : 'Last',
//	                    name       : 'lastName'
//	                }
//	            ]
//	        };
//
//	var fieldset2 = Ext.apply({}, {
//	    flex       : 1,
//	    labelWidth : 30,
//	    title      : 'Address Information',
//	    defaults   : {
//	        layout : 'column',
//	        anchor : '100%'
//	    },
//	    items      : [
//	        {
//	            fieldLabel : 'Address',
//	            name       : 'address'
//	        },
//	        {
//	            fieldLabel : 'Street',
//	            name       : 'street'
//	        },
//	        {
//	            xtype  : 'container',
//	            layout : 'column',
//	            items  : [
//	                {
//	                    xtype       : 'fieldcontainer',
//	                    columnWidth : .5,
//	                    items       : [
//	                        {
//	                            xtype      : 'textfield',
//	                            fieldLabel : 'State',
//	                            name       : 'state',
//	                            labelWidth : 100,
//	                            width      : 150
//	                        }
//	                    ]
//	                } ,
//	                {
//	                    xtype       : 'fieldcontainer',
//	                    columnWidth : .5,
//	                    items       : [
//	                        {
//	                            xtype      : 'textfield',
//	                            fieldLabel : 'Zip',
//	                            name       : 'zip',
//	                            labelWidth : 30,
//	                            width      : 162
//	                        }
//	                    ]
//	                }
//	            ]
//	        }
//	    ]
//	}, fieldset1);
//	
//
//    var fieldsetContainer = {
//        xtype  : 'container',
//        layout : {
//            type  : 'hbox' ,
//            align : 'stretch'
//        },
//        items  : [
//            fieldset1,
//            fieldset2
//        ]
//    };
//
//    var fp = new Ext.form.Panel({
//        renderTo     : Ext.getBody(),
//        width        : 700,
//        title        : 'Our complex form',
//        height       : 500,
//        frame        : true,
//        style        : 'margin: 20',
//        layout : {
//            type  : 'vbox',
//            align : 'stretch'
//        },
//
//        defaults     : {
//            msgTarget : 'side',
//          //  anchor    : '-20'
//        },
//        items        : [
//            fieldsetContainer
//        ]
//    });
	
	
//	var tabs = [{
//		xtype:'fieldcontainer',
//		title:'Phone Numbers',
//		bodyStyle:'padding:5px 5px 0 ',
//		defaults:{
//			xtype:'textfield',
//			width:230
//		},
//		items:[{
//			fieldLabel:'Home',
//			name:'home'
//		},{
//			fieldLabel:'Business',
//			name:'business'
//		},{
//			fieldLabel:'Mobile',
//			name:'mobile'
//		},{
//			fieldLabel:'Fax',
//			name:'fax'
//		}]},
//	{
//		title:'Resume',
//		xtype:'htmleditor',
//		name:'resume'
//	},{
//		title:'Bio',
//		xtype:'htmleditor',
//		name:'bio'
//	}
//	];
//	
//	
//	var tabPanel = {
//			xtype:'tabpanel',
//			activeTab:0,
//			deferredRender:false,
//			layoutOnTabChange:true,
//			border:false,
//			flex:1,
//			plain:true,
//			items:tabs,
//			height:200
//	};
//	
//	
//
//	
//	var onSuccessOrFail = function(form,action){
//		var formPanel = Ext.getCmp('myFormPanel');
//		formPanel.el.unmask();
//		var result = action.result;
//		if(result.success){
//			Ext.MessageBox.alert('Success',action.result.msg);
//		}else{
//			Ext.MessageBox.alert('Failure',action.result.msg);
//		}
//		
//	};
//	
//	
//	var sumbmitHandler = function(){
//		var formPanel = Ext.getCmp('myFormPanel');
//		formPanel.getForm().submit({
//			url:'success.false.txt',
//			success:onSuccessOrFail,
//			failure:onSuccessOrFail
//		});
//	};
//	
//	var loadHandler = function(){
//		var formPanel = Ext.getCmp('myFormPanel');
//		
//		formPanel.getForm().load({
//			url:'data.json',
//			success:function(){
//				var formPanel = Ext.getCmp('myFormPanel');
//				formPanel.el.unmask();
//			}
//		});
//	};
//	var buttons = [{
//		text:'Submit',
//		handler:sumbmitHandler
//	},{
//		text:'load',
//		handler:loadHandler
//	}];
//	
//	var myFormPanel = Ext.create('Ext.form.Panel',{
//		renderTo:Ext.getBody(),
//		width:700,
//		height:400,
//		title:'Our complex form',
//		frame:true,
//	    style: 'margin: 20',
//		id:'myFormPanel',
//		layout:{
//			type:'vbox',
//			align:'stretch'
//		},
//		defaults:{
//			msgTarget:'side',
//			anchor:'-20'
//		},
//		items:[fieldsetContainer,tabPanel],
//		buttons:buttons
//	});
	
	
//	var arrayData=[
//	               ['Jay Garcia','MD'],
//	               ['Aaron Baker', 'VA'],
//	               ['Susan Smith','DC'],
//	               ['Mary Stein','DE'],
//	               ['Bryan Shanley','NJ'],
//	               ['Nyri Selgado', 'CA']
//	               ];
//	
//	Ext.define('User',{
//		extend:'Ext.data.Model',
//		fields:[{
//			name:'name',
//			mapping:1
//		},{
//			name:'state',
//			mapping:2
//		}]
//	});
//	
//	
//	var store = Ext.create('Ext.data.Store',{
//		model:'User',
//		proxy:{
//			type:'memory',
//			reader:{
//				model:'User',
//				type:'array'
//			}
//		}
//	});
//	
//	store.loadData(arrayData);
//	console.log(store.first().data);
//	
//	var departmentStore = Ext.create('Ext.data.Store',{
//		fields:[
//		        'name',
//		        'active',
//		        'dateActive',
//		        'dateInactive',
//		        'description',
//		        'director',
//		        'numEmployees',
//		        {
//		        	name:'id',
//		        	type:'int'
//		        }],
//		 proxy:{
//			 type:'ajax',
//			 url:'data.json',
//			 reader:{
//				 type:'json',
//				 root:'data',
//				 idProperty:'id',
//				 successProperty:'meta.success'
//			 }
//		 }
//	});
//	
//	
//	
//	departmentStore.load({
//		callback:function(records,operation,successful){
//			if(successful){
//				console.log('department name:',records[0].get('name'));
//			}else{
//				console.log('the server reported an error');
//			}
//		}
//	});
	
	
	
	
//	var urlRoot = 'http://extjsaction.com/curd.php?model=Employee&method=';
//	
//	var employeeStore = Ext.create('Ext.data.Store',{
//		model:'Employee',
//		proxy:{
//			type:'ajax',
//			api:{
//				create:urlRoot+'CREATE',
//				read:urlRoot+'READ',
//				update:urlRoot+'UPDATE',
//				destroy:urlRoot+'DESTROY'
//			},
//			reader:{
//				type:'json',
//				root:'data',
//				idProperty:'id',
//				successProperty:'meta.success'
//			},
//			writer:{
//				type:'json',
//				encode:true,
//				writeAllFields:true,
//				root:'data',
//				allowSingle:true,
//				batch:false,
//				writeRecords:function(request,data){
//					request.jsonData=data;
//					return request;
//				}
//			}
//		}
//	});
//	
//	employeeStore.load();
//	
//	Ext.define('Employee',{
//		extend:'Ext.data.Model',
//		fields:[			
//		    'firstName',
//			'lastName',
//			'middle',
//			'title',
//			'street',
//			'city',
//			'state',
//			'zip',
//			'departmentName',
//			'rate',
//			'officePhone',
//			'homePhone',
//			'mobilePhone',
//			'email',
//			{
//		    	name:'id',
//		    	type:'int'
//			},{
//				name:'departmentId',
//				type:'int'
//			},
//			{
//				name:'dateHired',
//				type:'date',
//				format:'Y-m-d'
//			},
//			{
//				name:'dateFired',
//				type:'date',
//				format:'Y-m-d'
//			},{
//				name:'dob',
//				type:'date',
//				format:'Y-m-d'
//			}
//			
//		],
//		validations:[
//		             {
//		            	 type:'presence',
//		            	 field:'firstName'
//		             },{
//		            	 type:'presence',
//		            	 field:'lastName'
//		             },{
//		            	 type:'presence',
//		            	 field:'departmentId'
//		             },{
//		            	 type:'presence',
//		            	 field:'email',
//		            	 matcher: /@/
//		             }]
//	});
//	
//	
//	var sofie = Ext.create('Employee',{
//		firstName:'Sofie',
//		lastName:'Andresen',
//		dob:Ext.util.Format.date('2007/12/15','Y-m-d'),
//		email:'Sofie A'
//	});
//	
//	var errors = sofie.validate();
	
	
	
//	var arrayData = [
//	                 ['Jay Garcia', 'MD'],
//	                 ['Aaron Baker', 'VA'],
//	                 ['Susan Smith', 'DC'],
//	                 ['Marry Stein', 'DE'],
//	                 ['Bryan Shanley','NJ'],
//	                 ['Nyri Selgado', 'CA']
//	                 ];
//	
//	var store = Ext.create('Ext.data.ArrayStore',{
//		data:arrayData,
//		fields:['fullName','state']
//	});
//	
//	
//	var grid = Ext.create('Ext.grid.Panel',{
//		title:'Our first grid',
//		renderTo:Ext.getBody(),
//		autoHeight:true,
//		width:250,
//		store:store,
//		selType:'rowmodel',
//		singleSelect:true,
//		columns:[{
//			header:'Full Name',
//			sortable:true,
//			dataIndex:'fullName'
//		},{
//			header:'State',
//			dataIndex:'state',
//			sortable:false
//		}]
//	});
	
	
	Ext.define('Employee',{
		extend:'Ext.data.Model',
		idProperty:'id',
		fields:[
		        {name:'id',type:'int'},
		        {name:'departmentId',type:'int'},
		        {name:'dateHired',type:'date',format:'Y-m-d'},
		        {name:'dateFired',type:'date',format:'Y-m-d'},
		        'firstName',
		        'lastName',
		        'title',
		        'street',
		        'city',
		        'state',
		        'zip'
		        ]
	});
	
	var urlRoot = 'http://extjs.example.com/examples/ch08/crud.php'+'?model=Employee&method=';
	var employeeStore = Ext.create('Ext.data.Store',{
		model:'Employee',
		pageSize:50,
		buffered:true,
		remoteSort:true,
		sorters:{
			property:'lastName',
			direction:'ASC'
		},
		proxy:{
			type:'ajax',
			api:{
				create:urlRoot+'CREATE',
				read:urlRoot+'READ',
				update:urlRoot+'UPDATE',
				destroy:urlRoot+'DESTROY'
			},
			reader:{
				type:'json',
				metaProperty:'meta',
				root:'data',
				idProperty:'id',
				totalProperty:'meta.total',
				successProperty:'meta.success'
			},
			writer:{
				type:'json',
				encode:true,
				writeAllFields:true,
				root:'data',
				allowSingle:true,
				batch:false,
				writeRecords:function(request,data){
					request.jsonData=data;
					return request;
				}
			}
			
		}
	});
	
	
//	var columns = [{
//		xtype:'templatecolumn',
//		header:'ID',
//		dataIndex:'id',
//		sortable:true,
//		width:50,
//		resizable:false,
//		hidden:true,
//		tpl:'<span style="color: #0000FF;">{id}</span>'
//	},{
//		header:'Last Name',
//		dataIndex:'lastName',
//		sortable:true,
//		hideable:false,
//		width:100
//	},{
//		header:'First Name',
//		dataIndex:'firstName',
//		sortable:true,
//		hideable:false,
//		width:100
//	},{
//		header:'Address',
//		dataIndex:'street',
//		sortable:false,
//		flex:1,
//		tpl:'{street}<br/>{city} {state}, {zip}'
//	}];
//	
	
	
	Ext.define('State',{
		extend:'Ext.data.Model',
		fields:['id','state']
	});
	
	
	var url = 'http://extjs.example.com/examples/ch08/crud.php?model=State&method=READ';
	
	
	var stateStore = Ext.create('Ext.data.Store',{
		model:'State',
		proxy:{
			type:'ajax',
			url:url,
			reader:{
				type:'json',
				root:'data',
				idProperty:'id',
				successProperty:'meta.success'
			}
		
		}
	});
	
	
	var rowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
		clicksToEdit:2,
		autoCancel:false
	});
	
	
	
	var textField = {xtype:'textfield'};
	
	var stateEditor = {
		xtype:'combo',
		triggerAction:'all',
		displayField:'state',
		valueField:'state',
		store:stateStore
	};
	
	var columns = [{
		header:'Last Name',
		dataIndex:'lastName',
		sortable:true,
		editor:textField
	},{
		header:'First Name',
		dataIndex:'firstName',
		sortable:true,
		editor:textField
	},{
		header:'Street Address',
		dataIndex:'street',
		flex:1,
		sortable:true,
		editor:textField
	},{
		header:'City',
		dataIndex:'city',
		sortable:true,
		editor:textField
	},{
		header:'State',
		dataIndex:'state',
		sortable:true,
		width:50,
		editor:stateEditor
	},{
		header:'Zip Code',
		dataIndex:'zip',
		sortable:true,
		editor:textField
	}];
	
	
	var onDelete = function(){
		var selected = grid.selModel.getSelection();
		Ext.MessageBox.confirm(
				'Confirm delete',
				'Are you sure?',
				function(btn){
					if(btn=='yes'){
						grid.store.remove(selected);
						grid.store.sync();
					}
				});
	};
	
	
	var onInsertRecord = function(){
		var selected = grid.selModel.getSelection();
		rowEditing.cancelEdit();
		var newEmployee = Ext.create('Employee');
		employeeStore.insert(selected[0].index,newEmployee);
		rowEditing.startEdit(selected[0].index,0);
	};
	
	var pagingToolbar = {
			xtype:'pagingtoolbar',
			store:employeeStore,
//			dock:'bottom',
			displayInfo:true,
			pageSize:50,
			items:['-',
			       {text:'Save Changes',handler:function(){
			    	   employeeStore.sync();
			       }},{
			    	   text:'Reject Changes',handler:function(){
//			    		   employeeStore
//			    		   rowEditing.cancelEdit();
			    	   }
			       },
			       '-']
	};
	
	
	var doMsgBoxAlert = function(){
		var record = grid.selModel.getSelection()[0];
		var firstName = record.get('firstName');
		var lastName = record.get('lastName');
		var msg = Ext.String.format('The record you choose:<br/> {0}, {1}',lastName,firstName);
		Ext.MessageBox.alert('',msg);
	};
	
	
	var doRowDblClick = function(){
		doMsgBoxAlert();
	};
	
	
	var doRowCtxMenu = function(view,record,item,index,e){
		e.stopEvent();
		if(!view.rowCtxMenu){
			view.rowCtxMenu = Ext.create('Ext.menu.Menu',{
				items:[{
					text:'Insert Record',
					handler:onInsertRecord
				},{
					text:'Delete Record',
					handler:onDelete
				}]
			});
		}
		grid.selModel.select(record);
		view.rowCtxMenu.showAt(e.getXY());
		
	};
	
	var grid = Ext.create('Ext.grid.Panel',{
		xtype:'grid',
		columns:columns,
		store:employeeStore,
		loadMask:true,
		selType:'rowmodel',
		singleSelect:true,
		stripeRows:true,
		bbar:pagingToolbar,
		plugins:[rowEditing],
		viewConfig:{forceFit:true},
		listeners:{
			//itemdblclick:doRowDblClick,
			itemcontextmenu:doRowCtxMenu,
//			destroy:function(grid){
//				if(grid.rowCtxMenu){
//					grid.rowCtxMenu.destroy();
//				}
//			}
		}
	});
	
	
	
	Ext.create('Ext.Window',{
		height:350,
		width:600,
		border:false,
		layout:'fit',
		items:grid
	}).show();
	

	employeeStore.load();
	
	
	
	
	
	
	
	
});
