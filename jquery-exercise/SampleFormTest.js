var SampleFormTest = function(){
	this.FillForm = function(){
		var Sf = new SampleForm();
		Sf.setFullname('Manu');
		Sf.setEmail('sickermanex@gmail.com');
		Sf.setGender('M');
		Sf.setHobbies('Skiing','Coding','Sleeping');
		Sf.setHeard('Internet');
		Sf.setMessage('Aqui les vengo a traer mi burrito que llega de belen con esta pruebita de Jquery :D');
		Sf.clickValidate();
		if($('[class="bs-callout bs-callout-info"]').find('p').text()=="Everything seems to be ok :)")
		{
			return "PASSED, all the fields have been filled correctly";
		}
		else
		{
			return "PASSED, one of the fields have not been filled correctly";
		}
	};
};
