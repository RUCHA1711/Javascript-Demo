// 1. Drop-down with JSON format
const cities = [
    { name: 'Surat', value: 'surat' },
    { name: 'Rajkot', value: 'rajkot' },
    { name: 'Ahmedabad', value: 'ahmedabad' },
    { name: 'Gandhinagar', value: 'gandhinagar' }
  ];
  const drop_down = document.getElementById('city');
  
  function populateDropdown() {
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement('option');
        option.value = cities[i].value;
        option.text = cities[i].name;
        drop_down.appendChild(option);
    }
  }
  
  populateDropdown();
  
  function addError(elmId, errorText) {
    document.getElementById(elmId).innerHTML = errorText;
  }
  


  //2. Add validation in all the fields
  function validate() {
    let hasError = false;
  
    //1. First name
    let firstName = document.getElementById('fname').value;
    firstName.trim();
    if (firstName.search(/^[a-zA-Z]+$/) < 0) {
        addError('err_fname', 'Enter valid first name');
        hasError = true;
    } else {
        addError('err_fname', '');
    }
  
    //2. Last name
    let lastName = document.getElementById('lname').value;
    lastName.trim();
    if (lastName.search(/[a-zA-Z]/) < 0) {
        addError('err_lname', 'Enter valid last name');
        hasError = true;
    } else {
        addError('err_lname', '');
    }
  
    //3. Age
    let age = document.getElementById('age').value;
    if (age == "" || age < 0 && age > 100) {
        addError('err_age', 'Enter valid age');
        hasError = true;
    } else {
        addError('err_age', '');
    }
  
    //4. Email
    let email = document.getElementById('email').value;
    email.trim();
    if (email.search(/^\S+@\S+\.\S+$/) < 0) {
        addError('err_email', 'Enter valid email');
        hasError = true;
    } else {
        addError('err_email', '');
    }
  
    //5. Phone number
    let phone_number = document.getElementById('number');
    if (phone_number.value.length != 10) {
        addError('err_number', 'Enter 10 digit mobile number');
        hasError = true;
    } else {
        addError('err_number', '');
    }
  
    //6. Pin code
    let pincode = document.getElementById('pin_code');
    if (pincode.value.length != 6) {
        addError('err_pincode', 'Enter 6 digit pin code');
        hasError = true;
    } else {
        addError('err_pincode', '');
    }
  
    //7. Drop-down
    let dropdown_list = document.getElementById('city');
    if (dropdown_list.value == "") {
        addError('err_dropdown', 'Please select an option!');
        hasError = true;
    } else {
        addError('err_dropdown', '');
    }
  
    //8. Radio
    let radio = document.querySelector("input[name=gender]:checked");
    if (!radio) {
        addError('err_gender', 'Please select your gender!');
        hasError = true;
    } else {
        addError('err_gender', '');
    }
  
    //9. Checkbox
    let chkBoxes = document.querySelectorAll(".box");
    let atLeastOneSelected = false;
  
  
    for (let chkBox of chkBoxes) {
        if (chkBox.checked) {
            atLeastOneSelected = true;
        }
    }
    if (!atLeastOneSelected) {
        document.getElementById('err_chkbox').innerHTML = 'Please select atleast one account type!';
        hasError = true;
    } else {
        addError('err_chkbox', '');
    }
  
    //11. Address
    let address = document.getElementById('address').value;
    if (address == "") {
        addError('err_address', "Address can't be blank");
        hasError = true;
    }
  
    //12. Password
    let password = document.getElementById('password').value;
    if (password.length < 8 || password == "") {
        addError('err_password', 'Password length must be atleast 8 characters');
        hasError = true;
    }
  
    //13. Company
    let company = document.getElementById('company').value;
    company.trim();
    if (company.search(/[a-zA-Z]/) < 0) {
        addError('err_company', 'Enter valid company name');
        hasError = true;
    }
  
    //14. Experience
    let exp = document.getElementById('exp').value;
    if (exp.search(/\d{1,2}/) < 0) {
        addError('err_exp', 'Enter your valid experience');
        hasError = true;
    }
  
    //15. Date
    let date = document.getElementById('date').value;
    // console.log(date);
    if (date == "") {
        addError('err_date', 'Please select a date!');
        hasError = true;
    }
  
    if (hasError) {
        return false;
    }
    else {
        return true;
    }
  }
  //3. All the input field data gets reset
  function resetFormFields() {
    document.getElementById('demo_form').reset();
  }
  
  // All the input fields and error text gets cleared
  function resetAll() {
    resetFormFields();
    let errorTags = document.getElementsByClassName('error');
    for (let errTag of errorTags) {
        errTag.innerHTML = "";
    }
  }
  
  //4. Create table to display input field data
  // Created one arr to store all the values entered in the input fields by user
  let arr = [
    {
        "id": "",
        "firstName": "fdbfdc",
        "lastName": "fbvfd",
        "age": "12",
        "email": "abc@gmail.com",
        "phoneNumber": "9662331425",
        "address": "xcvxs",
        "password": "2123fwdsfc",
        "company": "dsvsdv",
        "exp": "2",
        "pincode": "123456",
        "date": "2023-12-07",
        "city": "ahmedabad",
        "gender": "female",
        "accountTypes": [
            "savings"
        ]
    }
  ];
  loadTableData();
  
  
  function getCheckBoxValues() {
    let chkBoxes = document.querySelectorAll(".box");
    let chkBoxValues = [];
    for (let chkBox of chkBoxes) {
        if (chkBox.checked) {
            chkBoxValues.push(chkBox.value);
        }
    }
    return chkBoxValues;
  }
  
  function getGenderValue() {
    return document.querySelector("input[name=gender]:checked").value
  }
  
  // Stored input field data into an object and pushed to array
  function addUserData() {
    const form_values = {
        id: new Date().valueOf(),
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('number').value,
        address: document.getElementById('address').value,
        password: document.getElementById('password').value,
        company: document.getElementById('company').value,
        exp: document.getElementById('exp').value,
        pincode: document.getElementById('pin_code').value,
        date: document.getElementById('date').value,
        city: document.getElementById('city').value,
        gender: getGenderValue(),
        accountTypes: getCheckBoxValues()
    }
    arr.push(form_values);
  }

  // Delete operation
  function deleteUserData(index) {
    arr.splice(index, 1);
    loadTableData();
  }
  
  // Onclick of cancel button
  function cancelInputFieldsData(index) {
    resetAll();
    editModeRemove();
    DisplayInputDataButton();
    // hide();
    enableEditBtn(index);
    enableDeleteBtn(index);
    removeRowBgColor(index);
  }
  // Submit and Reset button will be displayed
  function DisplayInputDataButton() {
    document.getElementById('submit_btn').style.display = "block";
    document.getElementById('reset_btn').style.display = "block";
  }
  
  // Update and Cancel button will be removed
  function editModeRemove() {
    document.getElementById('update_btn').style.display = 'none';
    document.getElementById('cancel_btn').style.display = 'none';
  }
  
  // Edit user functionality
  function editUserData(index) {
    resetAll();
    let user_obj = arr[index];
    document.getElementById('fname').value = user_obj.firstName;
    document.getElementById('lname').value = user_obj.lastName;
    document.getElementById('age').value = user_obj.age;
    document.getElementById('email').value = user_obj.email;
    document.getElementById('number').value = user_obj.phoneNumber;
    document.getElementById('address').value = user_obj.address;
    document.getElementById('password').value = user_obj.password;
    document.getElementById('company').value = user_obj.company;
    document.getElementById('exp').value = user_obj.exp;
    document.getElementById('pin_code').value = user_obj.pincode;
    document.getElementById('date').value = user_obj.date;
    document.getElementById('city').value = user_obj.city;
  
    if (user_obj.gender === "male") {
        document.getElementById("male").checked = true;
        document.getElementById("female").checked = false;
    } else {
        document.getElementById("female").checked = true;
        document.getElementById("male").checked = false;
    }
  
    let accountTypes = user_obj.accountTypes;
    document.getElementById("current").checked = accountTypes.includes("current");
    document.getElementById("savings").checked = accountTypes.includes("savings");
    document.getElementById("salary").checked = accountTypes.includes("salary");
  
    // On click of edit btn Update button will be displayed instead of Submit
    document.getElementById('submit_btn').style.display = "none";
    let update_btn = document.getElementById('update_btn');
    update_btn.style.display = "block";
  
    // Check if there exist click handler already for the update button, 
    // if yes then first remove it and then add a new click handler
    if (update_btn.clickHandler) {
        update_btn.removeEventListener('click', update_btn.clickHandler);
    }
  
    // Add a click handler event for the update button
    const updateButtonHandler = () => updateUserDataInArray(index);
    update_btn.addEventListener('click', updateButtonHandler);
    update_btn.clickHandler = updateButtonHandler;
  
    // On click of edit btn Cancel btn will be displayed instead of Reset 
    document.getElementById('reset_btn').style.display = "none";
    let cancel_btn = document.getElementById('cancel_btn');
    cancel_btn.style.display = "block";
    cancel_btn.addEventListener("click", () => cancelInputFieldsData(index));
  }
  
  function updateUserDataInArray(index) {
    if (validate()) {
        // Update the user data in the array
        arr[index] = {
            id: arr[index]?.id,
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('number').value,
            address: document.getElementById('address').value,
            password: document.getElementById('password').value,
            company: document.getElementById('company').value,
            exp: document.getElementById('exp').value,
            pincode: document.getElementById('pin_code').value,
            date: document.getElementById('date').value,
            city: document.getElementById('city').value,
            gender: getGenderValue(),
            accountTypes: getCheckBoxValues()
        };
  
        // On click of Update button Submit button will be displayed
        document.getElementById('update_btn').style.display = "none";
        document.getElementById('submit_btn').style.display = "block";
        cancelInputFieldsData(index);
        loadTableData();
    }
  }
  
  // On click of reset button from will be blank
  function resetTableData() {
    document.getElementById('form-table').innerHTML = "";
  }
  
  //Created table to display form data
  function loadTableData() {
    resetTableData();
    let pertable = document.getElementById('form-table');
  
  
    for (let index in arr) {
        let tr_tag = document.createElement('tr');
        pertable.appendChild(tr_tag);
        tr_tag.id =  arr[index]?.id || 'tr_tags';
        let td_0 = document.createElement('td');
        td_0.textContent = arr[index]?.id;
        let td_1 = document.createElement('td');
        td_1.textContent = arr[index].firstName;
        let td_2 = document.createElement('td');
        td_2.textContent = arr[index].lastName;
        let td_3 = document.createElement('td');
        td_3.textContent = arr[index].age;
        let td_4 = document.createElement('td');
        td_4.textContent = arr[index].email;
        let td_5 = document.createElement('td');
        td_5.textContent = arr[index].phoneNumber;
        let td_6 = document.createElement('td');
        td_6.textContent = arr[index].address;
        let td_7 = document.createElement('td');
        td_7.textContent = arr[index].password;
        let td_8 = document.createElement('td');
        td_8.textContent = arr[index].company;
        let td_9 = document.createElement('td');
        td_9.textContent = arr[index].exp;
        let td_10 = document.createElement('td');
        td_10.textContent = arr[index].pincode;
        let td_11 = document.createElement('td');
        td_11.textContent = arr[index].date;
        let td_12 = document.createElement('td');
        td_12.textContent = arr[index].gender;
        let td_13 = document.createElement('td');
        td_13.textContent = arr[index].accountTypes;
        let td_14 = document.createElement('td');
        td_14.textContent = arr[index].city;
  
        let td_15 = document.createElement('td');
        let td_17 = document.createElement('button');
        td_15.className = 'del_btn';
        td_17.textContent = 'Delete';
        td_17.id = `delBtn-${arr[index]?.id}` ;
        td_17.style.cursor = 'pointer';
        td_17.style.padding = '5px';
        td_17.style.fontWeight = '800';
        td_17.style.backgroundColor = 'red';
        td_15.addEventListener("click", () => deleteUserData(index));
        td_15.appendChild(td_17)
  
        let td_16 = document.createElement('td');
        let td_18 = document.createElement('button');
        td_18.className = 'edit_btn';
        td_18.textContent = 'Edit';
        td_18.id = `editBtn-${arr[index]?.id}`;
        td_18.addEventListener("click", () =>  disableEditBtn(index))
        td_18.addEventListener("click", () => disableDeleteBtn(index))
        td_18.addEventListener("click", () => rowBgColor(index))
        td_18.style.cursor = 'pointer';
        td_18.style.padding = '5px';
        td_18.style.fontWeight = '800';
        td_18.style.backgroundColor = 'green';
        td_18.addEventListener("click", () => editUserData(index));

        td_16.appendChild(td_18)


        let arrAppend = [td_0,td_1,td_2,td_3,td_4,td_5,td_6,td_7,td_8,td_9,td_10,td_11,td_12,td_13,td_14,td_15,td_16];
        console.log(arr)
            for(let i in arrAppend.length){
                tr_tag.appendChild[i];
            }
            arrAppend.forEach((childs) => {
                 tr_tag.appendChild(childs)
            });
    }
  }
function onsubmitForm() {
  
    if (!validate()) {
        event.preventDefault();
    }
    else {
        addUserData(); // array update
        loadTableData();
        resetFormFields();
    }
  }