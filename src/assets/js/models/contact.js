define(['backbone'],function(Backbone){
	
	var contactModel = Backbone.Model.extend({         
		defaults : {
			email : '',
      phone : '',
      github : '',
      linkedin : ''
		}
	});
	
  return contactModel;
  
});