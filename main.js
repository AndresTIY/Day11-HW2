var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var submit = document.getElementById('submit');
var email = document.getElementById('email');
var country = document.getElementById('country');
var obj = {}

// firstName.value =


submit.addEventListener('click', function(){
  firstLast();
  emailInc();
  getCountry();
  console.log(obj);
})


function firstLast() {
  var capitalFirstN = firstName.value[0];
  var capitalLastN = lastName.value[0];
  var lowerFirstN = firstName.value;
  var lowerLastN = lastName.value;
  if (capitalFirstN !== capitalFirstN.toUpperCase()){
  alert("name is case sensitive, please use correct format");
  } else if (capitalLastN !== capitalLastN.toUpperCase()) {
  alert("name is case sensitive, please use correct format");
  } else
      for (var i = 1; i < firstName.value.length; i++){
        if (lowerFirstN[i] !== lowerFirstN[i].toLowerCase()){
          alert("name is case sensitive, please use correct format");
          }
        }
      for (i = 1; i < lastName.value.length; i++) {
        if (lowerLastN[i] !== lowerLastN[i].toLowerCase()){
          alert("name is case sensitive, please use correct format");
          }
        }
    obj.firstName = firstName.value;
    obj.lastName = lastName.value;
}

function emailInc (){
  if(email.value.includes("@")){
    if(email.value.includes(".com")){
      obj.email = email.value;
    }
  } else {
    alert("please use correct format for email");
  }
};

function getCountry(){
  obj.country = country.value;
}






//str.toUpperCase()
//str.toLowerCase()


// submit.addEventListener('click', function(){
//   var capitalFirstN = firstName.value[0];
//   var capitalLastN = lastName.value[0];
//   var lowerFirstN = firstName.value;
//   var lowerLastN = lastName.value;
//   if (capitalFirstN !== capitalFirstN.toUpperCase()){
//   alert("name is case sensitive, please use correct format");
//   } else if (capitalLastN !== capitalLastN.toUpperCase()) {
//   alert("name is case sensitive, please use correct format");
//   } else
//       for (var i = 1; i < firstName.value.length; i++){
//         if (lowerFirstN[i] !== lowerFirstN[i].toLowerCase()){
//           alert("name is case sensitive, please use correct format");
//         }
//         }
//       for (i = 1; i < lastName.value.length; i++) {
//         if (lowerLastN[i] !== lowerLastN[i].toLowerCase()){
//           alert("name is case sensitive, please use correct format");
//         }
//         }
//     console.log(obj = {
//       firstName: lowerFirstN,
//       lastName: lowerLastN
//     })
// });
