// let state = ['Gujarat','Rajasthan','Maharashtra'];
// let cities = [
//     [
//     ["Surat"],
//     ["Rajkot"],
//     ["Ahmedabad"],
//     ["Gandhinagar"]

//     ],
//     [
//         ["Udaipur"],
//         ["Jaipur"],
//         ["Jodhpur"],
//         ["Jaisalmer"]
    
//     ],
//     [
//         ["Borivli"],
//         ["Dombivli"],
//         ["Goregaon"],
//         ["Shirdi"]
    
//     ],
// ]
// console.log('hi')
// let stateDropdown = document.getElementById('state');
// console.log(stateDropdown);
// let cityDropdown  = document.getElementById('city');
// console.log(cityDropdown);


// function populateCities(){

// }
// window.onload = function () {
//     let citySel = document.getElementById('city');
//     for(let city in cities){
//         citySel.options[citySel.options.length] = new Option(city, city);
//     }
// }

// let cities = {
//     "Gujarat" : ["Surat","Rajkot"," Ahmedabad","Gandhinagar"],
//     "Rajasthan" : ["Udaipur","Jaipur","Jodhpur","Jaisalmer"],
//     "Maharashtra" : ["Borivli","Dombivli","Goregaon","Shirdi"]

// };

let stateCityDropdown = {

    "Gujarat" : ["Surat","Rajkot"," Ahmedabad","Gandhinagar"],
    "Rajasthan" : ["Udaipur","Jaipur","Jodhpur","Jaisalmer"],
    "Maharashtra" : ["Borivli","Dombivli","Goregaon","Shirdi"]  

}
console.log(stateCityDropdown)
  function cityStateDropdown() {
    console.log('hello')
    let stateDropdown = document.getElementById("state");
    console.log(stateDropdown.length)
    console.log(stateDropdown)
    let cityDropdown = document.getElementById("city");
    console.log(cityDropdown)
    for (let x in  stateCityDropdown) {
        console.log('for loop')
        // stateCityDropdown.options[stateCityDropdown.options.length] = new Option(x, x);
    }
    // stateCityDropdown.onchange = function() {

//   cityDropdown.length = 1;
//   stateDropdown.length = 1;

//       for (let y in stateCityDropdown[this.value]) {
//         stateDropdown.options[stateDropdown.options.length] = new Option(y, y);
//       }
//     }
//     stateDropdown.onchange = function() {
 
//     cityDropdown.length = 1;
  
//       var z = stateCityDropdown[stateDropdown.value][this.value];
//       for (var i = 0; i < z.length; i++) {
//         cityDropdown.options[chapterSel.options.length] = new Option(z[i], z[i]);
//       }
//     }
}