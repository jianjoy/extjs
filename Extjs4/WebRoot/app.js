//Ext.onReady(function(){
//	Ext.Msg.alert("hello world!!!");
//});

(function() {
	Ext.onReady(function() {

		var myArray = [ 1, 2, 3, 4, -3, -4 ];
		var newArray = Ext.Array.filter(myArray, function(item) {
			if (item > 0) {
				return true;
			} else {
				return false;
			}
		}, this);
		// alert(newArray.join('\n'));

		var person = {
			name : 'uspcat',
			age : 26
		};
		alert(Ext.Object.getValues(person));

	});
})();