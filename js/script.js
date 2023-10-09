let form__tel_message_number = 11;

$(document).ready(function () {
	// base CI
	$("#name1").inputmask({
		placeholder: "",
	});

	$('input[name="phone"]').inputmask("+213-999-999-99[9][9][9]", {
    optionalmarker: ["[", "]"]
});

});
