var SampleForm = function(){
	this.Hobbies = {
		'Skiing' : 'ski',
		'Running' : 'run',
		'Eating' : 'eat',
		'Sleeping' : 'sleep',
		'Reading' : 'read',
		'Coding' : 'code'
	}
	
	this.HeardAbout = {
		'Press' : 'press',
		'Internet' : 'net',
		'Word of mouth' : 'mouth',
		'Other' : 'other'
	}
};

SampleForm.prototype.setFullname = function(name){
	$('input[name="fullname"]').val(name);
};

SampleForm.prototype.setEmail = function(email){
	$('input[name="email"]').val(email);
};

SampleForm.prototype.setGender = function(gender){
	$('input[value="'+gender+'"]').click();
};

SampleForm.prototype.setHobbies = function(){
	for(var i=0;i<arguments.length;i++)
	{
		$('input[type="checkbox"][value="'+this.Hobbies[arguments[i]]+'"]').click();
	}
};

SampleForm.prototype.setHeard = function(heard){
	$('#heard').val(this.HeardAbout[heard]);
};

SampleForm.prototype.setMessage = function(message){
	$('#message').val(message);
};

SampleForm.prototype.clickValidate = function(){
	$('span[class="btn btn-default"]').click();
};

