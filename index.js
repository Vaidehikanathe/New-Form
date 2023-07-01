let signup = document.getElementById("signup");
// let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

function seterror(id, error) {
  element = document.getElementById(id);
  if (id == "nameField") {
    element.getElementsByClassName('formerror')[0].innerHTML = error;
  }

}

function clearErrors() {

  errors = document.getElementsByClassName('formerror');
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function validateForm() {
  var returnval = true;
  clearErrors();

  var name = document.forms['myForm']["fname"].value;
  if (name.length < 5) {
    seterror("nameField", "*Length is too short");
    returnval = false;
  }
  return returnval;
}
//*******************************************************/
//fetch api
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const uploadElement = document.getElementById('file');
  const file = uploadElement.files[0];

  const payload = new FormData();
  payload.append('CV', file, 'CV.pdf');
 fetch('https://httpbin.org/post', {
    method: "POST", 
    body: payload,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
});
//collect form data
function callvalue() {
  let nameField = document.forms['myForm']["fname"].value;
  console.log(nameField);

  let ageField = document.forms['myForm']["fage"].value;
  console.log(ageField);

  let weightField = document.forms['myForm']["fweight"].value;
  console.log(weightField);

  let emailField = document.forms['myForm']["femail"].value;
  console.log(emailField);

}

