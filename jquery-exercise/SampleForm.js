var SampleForm = function(){
	this.textbox = $('input[name="fullname"]');
	this.email = $('input[name="email"]');
	this.gender = $('input[name="gender"]');
};

SampleForm.prototype.setFullname = function(name){
	this.textbox.val(name);
};

SampleForm.prototype.setEmail = function(email){
	this.email.val(email);
};

SampleForm.prototype.setGender = function(gender){
	$('input[value="'+gender+'"]').click();
};

SampleForm.prototype.setHobbies = function(){
	for(var i=0;i<arguments.length;i++)
	{
		$('input[type="checkbox"][value="'+arguments[i]+'"]').click();
	}
};

