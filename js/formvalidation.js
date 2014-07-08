function validateForm(){

/* Validate the first name field of the form */
	var fn=document.forms["contactForm"]["first_name"].value;
	
	/* If the Name string is empty then return false and show warning. */
	if (fn == null || fn == ""){
	  alert("First name must be filled out");
	  return false;
	  }else if(fn.length < 2){
		  alert("Your first name must more than one character");
		  return false;
	  }

/* Validate the last name field of the form */
	var ln = document.forms["contactForm"]["last_name"].value;
	
	/* If the Name string is empty then return false and show warning. */
	if (ln == null || ln == ""){
	  alert("First name must be filled out");
	  return false;
	  }else if(ln.length < 2){
		  alert("Your last name must more than one character");
		  return false;
	  }

/* Check to see if the user's email is valid. */
	var em=document.forms["contactForm"]["user_email"].value;
	
	/* Get the position of the @ symbol in the email string */
	var atpos = em.indexOf("@");
	/* Get the position of the dot (.) within the email string */
	var dotpos = em.lastIndexOf(".");
	/* The form returns false if:
		1) the @ symbol is the first character
		2) a dot (.) is present within the string and after the @symbol
		3) there is less than 2 characters before the end. */
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= em.length){
	  alert("Not a valid e-mail address");
	  return false;
	}

/* Validate the Message field of the form. */
	var mes=document.forms["contactForm"]["message"].value;
	
	/* If the message string is empty then return false and show warning. */
	if (mes == null || mes == ""){
	  alert("First name must be filled out");
	  return false;
	  }else if (mes.length <= 9){
		  alert("Your message must be more than 10 characters long character");
		  return false;
	  }	
}