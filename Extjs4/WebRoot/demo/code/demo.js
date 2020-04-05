//function user (){
//	this.name='uspcat',
//	this.age=26;
//	//private
//	var email = "yfc@126.com";
//	this.getEmail = function(){
//		return email;
//	};
//}
//
//
////var u = new user();
////alert(u.name);
////alert(u.getEmail());
//
//var u = {
//	name:'yfc',
//	age:18
//};
//
//alert(u.name+" "+u['age']);

(function() {

	Ext.Loader.setConfig({
		enabled : true,
		paths : {
			myApp : 'code/ux'
		}
	});

	Ext.onReady(function() {
		// var win=new Ext.window.Window({
		// width:400,
		// height:300,
		// title:'uspcat'
		// });
		// Ext.get('myb').on('click',function(){
		// win.show();
		// });

		// var o = {
		// say: function(){
		// alert(111);
		// }
		// };

		// var fn = Ext.Function.alias(o, 'say');
		// fn();

		// var win = Ext.create('Ext.window.Window',{
		// width:400,
		// height:300,
		// title:'uspcat'
		// });
		// win.show();

		// Ext.get('myb').on('click', function() {
		// // Ext.create('ux.myWin', {
		// // title : 'dddd',
		// // requires : [ 'ux.myWin' ]
		// //
		// // }).show();
		//			
		//		
		// });

		// var myWindow = Ext.create('ux.Window', {
		// title : 'Hello World',
		// bottomBar:{height:100}
		// });
		//		
		// alert(myWindow.getBottomBar());

		
		Ext.define('Computor', {
			statics : {
				instanceCount : 0,
				factory : function(brand) {
					return new this({
						brand : brand
					});
				}
			},
			config : {
				brand : null
			},
			constructor : function(config) {
				this.initConfig(config);
				this.self.instanceCount++;
				return this;
			}
		});
		var dellComputor = Computor.factory('Del1');
		alert(dellComputor.getBrand());
		alert(Computor.instanceCount);
		var lenovoComputor = Computor.factory('Lenovo2');
		alert(lenovoComputor.getBrand());
		
		alert(Computor.instanceCount);

		//		

	});
})();