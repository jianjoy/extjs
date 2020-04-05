Ext.define('ux.Window', {
	isWindow : true,
	config : {
		title : 'Title Here',
		bottomBar : {
			enabled : true,
			height : 50,
			resizable : false
		}
	},
	constructor : function(config) {
		this.initConfig(config);
		return this;
	},
	applyTitle : function(title) {
		if (!Ext.isString(title) || title.length == 0) {
			alert("Error: Title must be a valid non-empty string");
		} else {
			return title;
		}
	},
	applyBottomBar : function(bottomBar) {
		if (bottomBar && bottomBar.enabled) {
			if (!this.bottomBar) {
				return Ext.create('ux.WindowBottomBar', bottomBar);

			} else {
				this.bottomBar.setConfig(bottomBar);
			}
		}

	}
});