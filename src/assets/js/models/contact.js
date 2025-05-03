define(['backbone'],function(Backbone){
	var ContactModel = Backbone.Model.extend({
		defaults : {			
			email : '',      
			phone : '',      
			github : '',      
			linkedin : ''		
		}	
	});	
	return contactModel;  
});
