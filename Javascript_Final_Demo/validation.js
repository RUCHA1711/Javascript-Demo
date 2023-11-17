function firstNameValidation(){
    let firstName = document.getElementById('fname').value;
    firstName.trim();
    if (firstName.search(/^[a-zA-Z]+$/) < 0) {
        addError('err_fname', 'Enter valid first name');
    } else {
        addError('err_fname', '');
    }
  }
  

  function lastNameValidation(){
    let lastName = document.getElementById('lname').value;
    lastName.trim();
    if (lastName.search(/[a-zA-Z]+$/) < 0) {
        addError('err_lname', 'Enter valid last name');
    } else {
        addError('err_lname', '');
    }
  }

  function ageValidation(){
    let age = document.getElementById('age').value;
    if (age == "" || age < 0 || age > 100) {
        addError('err_age', 'Enter valid age');
    } else {
        addError('err_age', '');
    }
    
  }

  function emailValidation(){

    let email = document.getElementById('email').value;
    console.log(email)
    email.trim();
    if (email.search(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/) < 0) {
        addError('err_email', 'Enter valid email');
    } else {
        addError('err_email', '');
    }
  }

  function phoneNumberValidation(){
    let phone_number = document.getElementById('number');
    if (phone_number.value.length != 10) {
        addError('err_number', 'Enter 10 digit mobile number');
    } else {
        addError('err_number', '');
    }
  }

  function pincodeValidation(){
    let pincode = document.getElementById('pin_code');
    if (pincode.value.length != 6) {
        addError('err_pincode', 'Enter 6 digit pin code');
    } else {
        addError('err_pincode', '');
    }
  }


  function addressValidation(){
    let address = document.getElementById('address').value;
    console.log(address);
    if (address == "") {
        addError('err_address', "Address can't be blank");
    }else {
        addError('err_address', '');
    }
  }

  function passwordValidation(){
    let password = document.getElementById('password').value;
    if (password.length < 8 || password == "") {
        addError('err_password', 'Password length must be atleast 8 characters');
    }else {
        addError('err_password', '');
    }
   }

   function companyValidation(){
    let company = document.getElementById('company').value;
    company.trim();
    if (company == "") {
        addError('err_company', 'Enter valid company name');
    }else {
        addError('err_company', '');
    }
   }

   function experienceValidation(){
    let exp = document.getElementById('exp').value;
    if (exp.search(/\d{1,2}/) < 0) {
        addError('err_exp', 'Enter your valid experience');
    }else {
        addError('err_exp', '');
    }
   }

   function dateValidation(){
    let date = document.getElementById('date').value;
    if (date == "") {
        addError('err_date', 'Please select a date!');
    }else {
        addError('err_date', '');
    }
   }

function radioValidation(){
    let radio = document.querySelector("input[name=gender]:checked");
    if (!radio) {
        addError('err_gender', 'Please select your gender!');
    } else {
        addError('err_gender', '');
    }
}

function checkBoxValidation(){
    let chkBoxes = document.querySelectorAll(".box");
    let atLeastOneSelected = false;
  
  
    for (let chkBox of chkBoxes) {
        if (chkBox.checked) {
            atLeastOneSelected = true;
        }
    }
    if (!atLeastOneSelected) {
        document.getElementById('err_chkbox').innerHTML = 'Please select atleast one account type!';
    } else {
        addError('err_chkbox', '');
    }
}

function dropDownValidation(){
    let dropdown_list = document.getElementById('city');
    if (dropdown_list.value == "") {
        addError('err_dropdown', 'Please select an option!')
    } else {
        addError('err_dropdown', '');
    }
}

function ageValidation(){
    let age = document.getElementById('age').value;
    if (age == "" || age < 0 || age > 100) {
        addError('err_age', 'Enter valid age');
    } else {
        addError('err_age', '');
    }
}
