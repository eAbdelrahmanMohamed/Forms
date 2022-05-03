let inpObj = document.getElementById("id1");
let inpObj2 = document.getElementById("id");
let zip_code = document.getElementById("zcode");
let email = document.getElementById("email");



function myFunction() {

    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML += inpObj.validationMessage;
    }
    if (inpObj.value !== inpObj2.value) {
        document.getElementById("demo").innerHTML += "Please enter the same password twice";
    }
    if (!zip_code.checkValidity()) {
        document.getElementById("demo").innerHTML += zip_code.validationMessage;
    }
    if (!email.checkValidity()) {
        document.getElementById("demo").innerHTML += email.validationMessage;
    }
}
//zip_code.checkValidity();
document.getElementById("form").addEventListener('click', function(e) {
    e.preventDefault();
})