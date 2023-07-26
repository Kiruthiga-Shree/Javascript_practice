
// const head = document.getElementById('name')
// const btn1 = document.getElementById('insert')
// const btn2 = document.getElementById('hide')
// const event1=()=>{
//     btn1.addEventListener('click', function() {
//     head.value = 'kiru';
// })
// }
// const event2=btn2.addEventListener('click',function(){
//     head.remove();
// })
// setInterval(event1,1000)
function validate() {
    var myName = document.getElementById('name').value
    var pass = document.getElementById('pass').value
    var num = document.getElementById('phone').value
    var email= document.getElementById('email').value
    var error = "";
    var regex = /^[A-Z a-z]+$/;
    var regex_email=/^[A-Z a-z 0-9]+[@]+[a-z]+[.]+[a-z]+$/
    var regex_mobile = /^[0-9]+$/;
    if (myName == null || myName.length === 0) {
        error = error + "Please enter the name" + "\n"
    }
    if (myName.length >= 1) {
        if (!(myName.match(regex))) {
            error = error + "Please enter only alphabets" + "\n"
        }
    }
    if (pass.length < 6) {
        error = error + 'Password must contain 8 characters' + "\n"

    }
    if (num.length >= 1) {
        if (!(num.match(regex_mobile))) {
            error = error + 'Please enter the mobile number' + '\n'
        }
    }
    if(!(email.match(regex_email))){
        error=error+"Please enter a valid email"+'\n'
    }
    if(document.myform.gender[0].checked==false && document.myform.gender[1].checked==false){
        error=error+"Please select a gender"+"\n"
    }
    if(document.myform.loc[0].checked==false && document.myform.loc[1].checked==false){
        error=error+"Please select your location"+"\n"
    }
    if(error.length>=1){
        alert(error);
        return false;
    }
}

