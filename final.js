// JavaScript Document

var form = document.querySelector('form');
	form.addEventListener('submit', function (e) {
		var errors, i, errorDiv, namePattern, emailPattern;
				
		errors = [];
		errorDiv = document.getElementById('error');
		namePattern = /^[a-zA-Z]{2,52}$/ ;
		streetPattern = /^[0-9a-zA-Z\s]+$/;
		emailPattern =	/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		passwordPattern = /^[a-zA-Z0-9_-]{8,10}$/ ;
		zipPattern = /^\d{5}$/;
		telPattern = /^\d{3}-?\d{3}-?\d{4}$/g;
		cellPattern = /^\d{3}-?\d{3}-?\d{4}$/g;
		datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ; 
	
	//Validate data
		if (namePattern.test(this.first_name.value) === false) {
			this.first_name.style.background = "yellow";
			this.first_name.focus();
			errors.push('**First name must be 2 - 50 letters !!');
			}else {
				this.first_name.style.background = "#cfc"
					}
					
		if (namePattern.test(this.last_name.value) === false) {
			this.last_name.style.background = "yellow";
			this.last_name.focus();
			errors.push('**Last name must be 2 - 50 letters !!');
			}else {
					this.last_name.style.background = "#cfc"
					}
					
		if (streetPattern.test(this.street.value) === false) {
			this.street.style.background = "yellow";
			this.street.focus();
			errors.push('**Please provide number and street  !!');
			}else {
					this.street.style.background = "#cfc"
					}
					
		if (namePattern.test(this.city.value) === false) {
			this.city.style.background = "yellow";
			this.city.focus();
			errors.push('""Please provide city name!!');
			}else {
					this.city.style.background = "#cfc"
					}
					
		if (this.state.selectedIndex === 0){
			this.state.style.background = "yellow";
			this.state.focus();
			errors.push("**You must select a state!");
			}else{
					this.state.style.background = "#cfc";
					}
		
		if (zipPattern.test(this.zip.value) === false) {
			this.zip.style.background = "yellow";
			this.zip.focus();
			errors.push('**Please provide ZIP code!!');
			}else {
					this.zip.style.background = "#cfc"
					}
		
		if (this.birthday.value === "12/5/2013") {
			this.birthday.style.background = "yellow";
			this.birthday.focus();
			errors.push('**Enter birthday in valid format or use Date Ticker.');
			}else {
					this.birthday.style.background = "#cfc";
				}
			
		if (this.age.value < 18 ||this.age.value >100){
			this.age.style.background = "yellow";
			this.age.focus();
			errors.push('**You may be too young/old for this class!!.');
			}else{
					this.age.style.background = '#cfc';
				}
			
		if (telPattern.test(this.phone.value) === false) {
			this.phone.style.background = "yellow";
			this.phone.focus();
			errors.push('**Enter a valid phone number ###-###-####!!');
			}else {
					this.phone.style.background = "#cfc";
					}
		
		if (cellPattern.test(this.mobile.value) === false) {
			this.mobile.style.background = "yellow";
			this.mobile.focus();
			errors.push('**Enter a valid mobile number ###-###-####!!');
			}else {
					this.mobile.style.background = "#cfc";
					}
					
		if (emailPattern.test(this.email.value) === false) {
			this.email.style.background = "yellow";
			this.email.focus();
			errors.push('**Please enter a valid email address!!');
			}else {
				this.email.style.background = "#cfc"
					}
		
		if (urlPattern.test(this.url.value) === false) {
			this.url.style.background = "yellow";
			this.url.focus();
			errors.push('**Please enter a valid URL address!!');
			}else {
				this.url.style.background = "#cfc"
					}
					
		if (this.about_me.value <= 3){
			this.about_me.style.background = "yellow";
			this.about_me.focus();
			errors.push("**Please tell us more about you!");
			}else{
					this.about_me.style.background = "#cfc";
					}
				
		if (this.browser.selectedIndex === 0){
			this.browser.style.background = "yellow";
			this.browser.focus();
			errors.push("**Choose your favorite browser!");
			}else{
					this.browser.style.background = "#cfc";
					}
		
		if (passwordPattern.test(this.password.value) === false) {
			this.password.style.background = "yellow";
			this.password.focus();
			errors.push('**Password requires 8 - 10 characters!!');
			}else {
				this.password.style.background = "#cfc"
					}
		if (passwordPattern.test(this.pswd_reconfirm.value) === false ||this.password.value!= this.pswd_reconfirm.value){
			this.pswd_reconfirm.style.background = "yellow";
			this.pswd_reconfirm.focus();
			errors.push('**Password Creation Failed!!');
			}else{
				this.pswd_reconfirm.style.background = "#cfc"
					}
		
	//If any inputs failed prevent form submit
		if (errors.length > 0) {
			//prevent form submit
			e.preventDefault();
					
			//unhide
			errorDiv.className = '';
					
			//clear out previous errors
			errorDiv.innerHTML = errors.join('<br>');
				}
	}, false);
