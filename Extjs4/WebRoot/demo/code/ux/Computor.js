Ext.define('ux.Computor', {
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