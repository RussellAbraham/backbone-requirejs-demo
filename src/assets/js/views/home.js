define([ "backbone","text!assets/html/home.html" ], function(Backbone,template){
	
	var HomeView = Backbone.View.extend({         		
		template : _.template($(template).html()),		    		
		initialize : function(){
			this.render();
		},		    		
		render: function(){    
			this.$el.append(this.template);      
			return this;	      
		}		
	});
	
	return HomeView;
	
});