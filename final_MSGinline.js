// JavaScript Document
//validate string input
  function validateName(x){
      // Validation rule (filter)
      var alphabet = /[A-Za-z -']$/;
	  
      // Check input
      if(alphabet.test(document.getElementById(x).value)){
        // Style light green
        document.getElementById(x).style.background ='#ccffcc';
        // Hide error prompt
        document.getElementById(x + 'Error').style.display = "none";
        return true;
      }else{
        // Style red
        document.getElementById(x).style.background ='#FF0';
        // Show error prompt
        document.getElementById(x + 'Error').style.display = "block";
        return false; 
      }
    }
	function validateStreet(x){
      // Validation rule
      
	  var streetRegex = /^[0-9a-zA-Z\s]+$/;
      // Check input
      if(streetRegex.test(document.getElementById(x).value)){
        // Style light green
        document.getElementById(x).style.background ='#ccffcc';
        // Hide error prompt
        document.getElementById(x + 'Error').style.display = "none";
        return true;
      }else{
        // Style red
        document.getElementById(x).style.background ='#FF0';
        // Show error prompt
        document.getElementById(x + 'Error').style.display = "block";
        return false; 
      }
    }
	
	//Validate Digits
	function validateZip(x){
		//Set up regular expression for 5 digits
		var  zipPattern = /^\d{5}$/; 
		//Check zip input 
		if(zipPattern.test(document.getElementById(x).value)){
			//Style in light green
			document.getElementById(x).style.background = "#ccffcc";
			//Hide error message
			document.getElementById(x + 'Error').style.display = "none";
			return true;
		}else {
			//Style in yellow
			document.getElementById(x).style.background = "#FF0";
			//Display error message
			document.getElementById(x + 'Error').style.display="block";
			return false;  
			}
		}
	
	// Validate email
    function validateEmail(email){ 
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regex.test(document.getElementById('email').value)){
        document.getElementById('email').style.background ='#ccffcc';
        document.getElementById('emailError').style.display = "none";
        return true;
      }else{
        document.getElementById('email').style.background = '#FF0';
		document.getElementById("emailError").style.display="block";
        return false;
      }
    }
    // Validate Select boxes
    function validateSelect(x){
      if(document.getElementById(x).selectedIndex !== 0){
        document.getElementById(x).style.background ='#ccffcc';
        document.getElementById(x + 'Error').style.display = "none";
        return true;
        }else{
        document.getElementById(x).style.background ='#FF0';
		document.getElementById(x + 'Error').style.display="block";
		return false; 
      }
    }
	//Validate Date
	function validateDate(x){
		var dateRegex = /^\d{2}([./-])\d{2}\1\d{4}$/;
		if (dateRegex.test(document.getElementById(x).value)){
			document.getElementById(x).style.background="#ccffcc";
			document.getElementById(x + "Error").style.display="none";
			return true;
		}else {
			document.getElementById(x).style.background="#ff0";
			document.getElementById(x + "Error").style.display="block";
			return false;
			}	
	}
	//Validate Phone Number
	function validatePhone(x){
	//Set up regular expression
	  var telPattern = /^\d{3}-?\d{3}-?\d{4}$/g;
	  
	//Check phone input
	  if(telPattern.test(document.getElementById(x).value)){
		  //Display Light Green Background
		  document.getElementById(x).style.background="#ccffcc";
		  //Hide Error Message
		  document.getElementById(x +'Error').style.display = "none";
		  return true;		 
		}else{
			document.getElementById(x).style.background="#ff0";
			document.getElementById(x + "Error").style.display = "block";
			return false;
		}
	}
	
    function validateRadio(x){
      if(document.getElementById(x).checked){
        return true;
      }else{
        return false;
      }
    }
    function validateCheckbox(x){
      if(document.getElementById(x).checked){
        return true;
      }
      return false;
    }
	
	//Validate Range
	function validateAge(age){
		if (document.getElementById("age").value>=18&&document.getElementById("age").value<=80){
			document.getElementById("age").style.background="#ccffcc";
			document.getElementById("ageError").style.display="none";
			return true;
		}else {
			document.getElementById("age").style.background="#ff0";
			document.getElementById("ageError").style.display="block";
			return false;
			}
			
	}
			
    // Validate email
    function validateEmail(email){ 
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regex.test(document.getElementById('email').value)){
        document.getElementById('email').style.background ='#ccffcc';
        document.getElementById('emailError').style.display = "none";
        return true;
      }else{
        document.getElementById('email').style.background = '#FF0';
		document.getElementById("emailError").style.display="block";
        return false;
      }
    }
	//Validate URL 
	function validateURL(url){
		var urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
		if (urlPattern.test(document.getElementById("url").value)){
			document.getElementById("url").style.background="#ccffcc";
			document.getElementById("urlError").style.display="none";
			return true;
		}else {
				document.getElementById("url").style.background="#FF0";
				document.getElementById("urlError").style.display="block";
				return false;
			}	
	}
	//Validate entry of About Me
	function validateTextarea(x){
		var txt = document.getElementById('about_me').value;
	  if(txt !== ""){
		  //Display Light Green Background
		  document.getElementById(x).style.background="#ccffcc";
		  //Hide Error Message
		  document.getElementById(x + "Error").style.display = "none";
		  return true;
		}else{
		  document.getElementById(x).style.background="#ff0";
		  document.getElementById(x + "Error").style.display = "block";
		  return false;
		}
	}
	//Validate Password Creation
	function validatePassword(password){
		//Set up 8 -10 digit regular expression for password
		var passwordPattern = /^[a-zA-Z0-9_-]{8,10}$/ ;
		//Display light green background if password matches
		if(passwordPattern.test(document.getElementById('password').value)){
			document.getElementById('password').style.background="#ccffcc";
			document.getElementById('passwordError').style.display= "none";
			return true;	
		}else {
			document.getElementById('password').style.background= "#ff0";
			document.getElementById('passwordError').style.display= 'block';
			return false;	
		}
	}
	
	//Validate Password
	function validatePasswordReconfirm(pswd_reconfirm){
		var passwordPattern = /^[a-zA-Z0-9_-]{8,10}$/ ;
		if(passwordPattern.test(document.getElementById('pswd_reconfirm').value)===true && (document.getElementById('password').value)===(document.getElementById('pswd_reconfirm').value)){
			document.getElementById('pswd_reconfirm').style.background="#ccffcc";
			document.getElementById('pswd_reconfirmError').style.display= "none";
			return true;	
		}else {
			document.getElementById('pswd_reconfirm').style.background= "#ff0";
			document.getElementById('pswd_reconfirmError').style.display= 'block';
			return false;	
		}
	}
				
	//Onsubmit Function Call   
    function validateForm(){
      // Set error catcher
      var error = 0;
      // Check First Name
      if(!validateName('first_name')){
        document.getElementById('first_nameError').style.display = "block";
        error++;
		return false;
      }
	  //validate Last Name
	  if(!validateName('last_name')){
        document.getElementById('last_nameError').style.display = "block";
        error++;
		return false;
      }
	  //Validate Street
	  if(!validateStreet('street')){
        document.getElementById('streetError').style.display = "block";
        error++;
		return false;
      }
	  //Validate City
	  if(!validateName('city')){
        document.getElementById('cityError').style.display = "block";
        error++;
		return false;
      }
	  // Validate animal dropdown box
      if(!validateSelect('state')){
        document.getElementById('stateError').style.display = "block";
        error++;
		return false;
      }
	   //Validate Zip
	  if(!validateZip('zip')){
		 document.getElementById('zipError').style.display="block";	
		 error++;
		 return false;	  
	  }
	  //Validate Birthday
	  if(!validateDate('birthday')){
		 document.getElementById('birthdayError').style.display = "block";
		 error++;
		 return false;
	  }
	  //Validate Age
	  if(!validateAge('age')){
		 document.getElementById('ageError').style.display="block";
		 error++;
		 return false;		  
	  }
	  //Validate Phone
	  if(!validatePhone('phone')){
		 document.getElementById('phoneError').style.display="block";
		 error++;
		 return false;		  
	  }
	  //Validate Mobile Phone
	  if(!validatePhone('mobile')){
		 document.getElementById('mobileError').style.display="block";
		 error++;
		 return false;		  
	  }
	  // Validate email
      if(!validateEmail(document.getElementById('email').value)){
        document.getElementById('emailError').style.display = "block";
        error++;
		return false;
      }
      if(!validateURL(document.getElementById('url').value)){
        document.getElementById('urlError').style.display = "block";
        error++;
		return false;
      }
	  //Check empty text area
	  if(!validateTextarea('about_me')){
		  document.getElementById('about_meError').style.display = 'block';
	  }
	  // Validate state dropdown box
      if(!validateSelect('browser')){
        document.getElementById('browserError').style.display = "block";
        error++;
		return false;
		
      } 
      
 	var allchecked=0;
 	if(document.getElementById('HTML').checked)allchecked=1;
 	if(document.getElementById('CSS').checked)allchecked=1;
 	if(document.getElementById('JavaScript').checked)allchecked=1;
	if(document.getElementById('jQuery').checked)allchecked=1;
 	if(document.getElementById('Dojo').checked)allchecked=1;
 	if(document.getElementById('Prototype').checked)allchecked=1;
	if(document.getElementById('Flash').checked)allchecked=1;
 	if(document.getElementById('Flex').checked)allchecked=1;
	if(allchecked==1){
		document.getElementById('skillsError').style.display= "none";
			return true;
	}
 	if(allchecked==0){
		document.getElementById('skillsError').style.display = "block";
        error++;
		return false;
		}
      
	  //Validate Password Creation
	  if(!validatePassword('password')){
        document.getElementById('password').style.display = "block";
        error++;
		return false;
      }
	  if((document.getElementById('password').value == null) || (document.getElementById('password').value == ""))
	  	document.getElementById('password').style.display = "block";
        error++;
		return false;
      
	  //Validate Password Reconfirmation
	  if(!validatePasswordReconfirm('pswd_reconfirm')){
        document.getElementById('pswd_reconfirmError').style.display = "block";
        error++;
		return false;
      }
	  // Don't submit form if there are errors
      if(error > 0){
        return false;
      }
    }     
 