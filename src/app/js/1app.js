var app = function (window) {
	/************* 
	APP CONSTANTS
	**************/

	var ACCESS_TOKEN = '83e035756d8888fb43bda186bc4e73ab68e0b05ef053c633fa3dd0c0064ec7fc',
	SPACE_ID = 'stswelzpijg5',
	MATERIALS_ID = 'materiales',
	SERVICES_ID='',
	MATERIALS_LIST = $('#materials'),
	FORM_BUTTON = $('#sendEmail'),
	FORM_NAME = $('#formName').val(),
	FORM_GOTCHA = $('#gotcha').val(),
	FORM_MESSAGE = $('#formMessage').val(),
	FORM_EMAIL = $('#formEmail').val();


	/************* 
	APP EVENTS ACTIONS 
	**************/

	FORM_BUTTON.on( "click", function(e) {
		e.preventDefault();
  		app.form();
	});
	console.log('******loading--******');
	return {
		ACCESS_TOKEN : ACCESS_TOKEN,
		SPACE_ID : SPACE_ID,
		MATERIALS_ID : MATERIALS_ID,
		SERVICES_ID : SERVICES_ID,
		MATERIALS_LIST : MATERIALS_LIST,
		FORM_NAME : FORM_NAME,
		FORM_GOTCHA : FORM_GOTCHA,
		FORM_MESSAGE : FORM_MESSAGE,
		FORM_EMAIL : FORM_EMAIL,
	}
	
}(window);

