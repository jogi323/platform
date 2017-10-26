// $(document).ready(function () {
// 	var date_input = $('input[name="date"]'); //our date input has the name "date"
// 	var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
// 	date_input.datepicker({
// 		format: 'mm/dd/yyyy',
// 		container: container,
// 		todayHighlight: true,
// 		autoclose: true,
// 	})
// })

// $(document).ready(function () {
// 	//alert("ok");
// 	$(".form-2").hide();
// 	$(".next-step").click(function () {
// 		$(".form-1").hide();
// 		$(".form-2").show();
// 	});


// 	$(".btn-rqst-txt").hide();
// 	$(".btn-rqst-popup").click(function () {
// 		$(".btn-rqst-txt").show();
// 	});
// });

// $('.tabgroup > div').hide();
// $('.tabgroup > div:first-of-type').show();
// $('.tabs a').click(function (e) {
// 	e.preventDefault();
// 	var $this = $(this),
// 		tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
// 		others = $this.closest('li').siblings().children('a'),
// 		target = $this.attr('href');
// 	others.removeClass('active');
// 	$this.addClass('active');
// 	$(tabgroup).children('div').hide();
// 	$(target).show();

// })


function checkCompanyno() {

	var company_no_value = document.getElementById('check_company_no');


	if (company_no_value.value == "") {
		document.getElementById('message1').style.display = "block";
		document.getElementById('message1').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_company_name").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message1').style.display = "none";
		document.getElementById("check_company_name").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkCompanyname() {

	var company_name_value = document.getElementById('check_company_name');


	if (company_name_value.value == "") {
		document.getElementById('message2').style.display = "block";
		document.getElementById('message2').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_address1").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message2').style.display = "none";
		document.getElementById("check_address1").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkAddress1() {

	var address1_value = document.getElementById('check_address1');


	if (address1_value.value == "") {
		document.getElementById('message3').style.display = "block";
		document.getElementById('message3').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_address2").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message3').style.display = "none";
		document.getElementById("check_address2").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkAddress2() {

	var address2_value = document.getElementById('check_address2');


	if (address2_value.value == "") {
		document.getElementById('message4').style.display = "block";
		document.getElementById('message4').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_telephone").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message4').style.display = "none";
		document.getElementById("check_telephone").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkTelephone() {

	var telephone_value = document.getElementById('check_telephone');


	if (telephone_value.value == "") {
		document.getElementById('message5').style.display = "block";
		document.getElementById('message5').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_fax").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message5').style.display = "none";
		document.getElementById("check_fax").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkFax() {

	var fax_value = document.getElementById('check_fax');


	if (fax_value.value == "") {
		document.getElementById('message6').style.display = "block";
		document.getElementById('message6').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_website").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message6').style.display = "none";
		document.getElementById("check_website").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkWebsite() {

	var website_value = document.getElementById('check_website');


	if (website_value.value == "") {
		document.getElementById('message7').style.display = "block";
		document.getElementById('message7').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_email").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message7').style.display = "none";
		document.getElementById("check_email").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkEmail() {
	console.log("page-8");
	var email_value = document.getElementById('check_email');


	if (email_value.value == "") {
		document.getElementById('message8').style.display = "block";
		document.getElementById('message8').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_country").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message8').style.display = "none";
		document.getElementById("check_country").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkCountry() {

	var country_value = document.getElementById('check_country');


	if (country_value.value == "") {
		document.getElementById('message9').style.display = "block";
		document.getElementById('message9').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_city").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message9').style.display = "none";
		document.getElementById("check_city").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkCity() {

	var city_value = document.getElementById('check_city');


	if (city_value.value == "") {
		document.getElementById('message10').style.display = "block";
		document.getElementById('message10').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_state").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message10').style.display = "none";
		document.getElementById("check_state").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkState() {

	var state_value = document.getElementById('check_state');


	if (state_value.value == "") {
		document.getElementById('message11').style.display = "block";
		document.getElementById('message11').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_postal_code").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message11').style.display = "none";
		document.getElementById("check_postal_code").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkPostalcode() {

	var postal_code_value = document.getElementById('check_postal_code');


	if (postal_code_value.value == "") {
		document.getElementById('message12').style.display = "block";
		document.getElementById('message12').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_f_name").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message12').style.display = "none";
		document.getElementById("check_f_name").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkFname() {

	var f_name_value = document.getElementById('check_f_name');


	if (f_name_value.value == "") {
		document.getElementById('message13').style.display = "block";
		document.getElementById('message13').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_l_name").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message13').style.display = "none";
		document.getElementById("check_l_name").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkLname() {

	var l_name_value = document.getElementById('check_l_name');


	if (l_name_value.value == "") {
		document.getElementById('message14').style.display = "block";
		document.getElementById('message14').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_nric").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message14').style.display = "none";
		document.getElementById("check_nric").removeAttribute("readonly");
	}

}

/////////////////////////////////////////////////////////////////////////////

function checkNric() {

	var nric_value = document.getElementById('check_nric');


	if (nric_value.value == "") {
		document.getElementById('message15').style.display = "block";
		document.getElementById('message15').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("s_next1").style.display = 'none';

		return false;
	}
	else {
		document.getElementById('message15').style.display = "none";
		document.getElementById("s_next1").style.display = 'inline-block';
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkSname() {

	var s_name_value = document.getElementById('check_s_name');


	if (s_name_value.value == "") {
		document.getElementById('message16').style.display = "block";
		document.getElementById('message16').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_s_nric").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message16').style.display = "none";
		document.getElementById("check_s_nric").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkSnric() {

	var s_nric_value = document.getElementById('check_s_nric');


	if (s_nric_value.value == "") {
		document.getElementById('message16').style.display = "block";
		document.getElementById('message16').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_s_email").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message16').style.display = "none";
		document.getElementById("check_s_email").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkSemail() {

	var s_email_value = document.getElementById('check_s_email');


	if (s_email_value.value == "") {
		document.getElementById('message17').style.display = "block";
		document.getElementById('message17').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("check_s_mobile").setAttribute("readonly", true);

		return false;
	}
	else {
		document.getElementById('message17').style.display = "none";
		document.getElementById("check_s_mobile").removeAttribute("readonly");
	}

}

///////////////////////////////////////////////////////////////////////////////////

function checkSmobile() {

	var s_mobile_value = document.getElementById('check_s_mobile');


	if (s_mobile_value.value == "") {
		document.getElementById('message18').style.display = "block";
		document.getElementById('message18').innerHTML = "*Please ensure information is correct for verification.";
		document.getElementById("s_nextf").style.display = 'none';

		return false;
	}
	else {
		document.getElementById('message18').style.display = "none";
		document.getElementById("s_nextf").style.display = 'inline-block';
	}

}


// $(document).ready(function () {
// 	var $scrollbar = $("#scrollbar1");

// 	$scrollbar.tinyscrollbar();
// });


