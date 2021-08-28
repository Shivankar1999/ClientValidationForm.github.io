const form =  document.getElementById('form');
const username =  document.getElementById('username');
const AllFeilds = document.querySelectorAll('input');
const email =  document.getElementById('email');
const Cnumber  = document.getElementById('Num');
const password =  document.getElementById('Password');
const password2 =  document.getElementById('Password2');
const Alert = document.getElementById('alert');
const msg = document.querySelector('.Data');
const Delete = document.querySelector('.cancel');
let flag = false;
// console.log(typeof email.value);
form.addEventListener('submit', (e) =>{
  
    e.preventDefault();
    
    CheckInput();
    setTimeout(() => {
        CFelilds();
    }, 400);
})

function CheckInput(){
    // get the values of all the inputs ;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const Contact = Cnumber.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(! (usernameValue=== "" && emailValue === "" && Contact === "" && passwordValue === "" && password2Value === "")){
        flag = true;
  }else{
      flag =false ;
  }

    if(usernameValue === ''){
        //show Error
        // add error class
        setErrorFor(username,'Username can\'t be blank ');
        flag =false;

    }else if(isName(usernameValue) === false){
        setErrorFor(username,"Not Valid Name");
        flag = false;
    }
    else{
        // add successClass 

        setSuccess(username);
      
    }

    if(emailValue === ''){
        setErrorFor(email,'Email can\'t be blank');
        flag =false;
    }else if(isEmail(emailValue) === false){
        setErrorFor(email,'Not a Valid Email');
        flag = false;
    }
    else{
        setSuccess(email);
    }

    if(Contact === ""){
        setErrorFor(Cnumber ,'Number Can\'t be empaty');
        flag =false;
    }else if(isNumber(Contact) === false){
        setErrorFor(Cnumber ,'Number not Valid');
        flag = false;
    }
    else{
        setSuccess(Cnumber);
    } 
    if(passwordValue === ''){
        setErrorFor(password,'Password can\'t be blank');
        flag =false;
    }else if(isPassword(passwordValue) === false){
           setErrorFor(password,"Not a Valid Password");
           flag = false;
    }
    else{
        setSuccess(password);
    }
    if(password2Value === ''){
        setErrorFor(password2,'Password can\'t be blank');
        flag =false;
    }else if(!password2Value.match(passwordValue)){
        setErrorFor(password2,'Password Not Matched');
        flag = false;
    }
    else{
        setSuccess(password2);
    }
 
   
  
}

 function setErrorFor(input,message){
//    find form-control 
  const FormControl  = input.parentElement;
     const small = FormControl.querySelector('small');

    //  add error message to small 
    small.innerText = message ;
    // add error class to FormControl
    FormControl.className= 'form-control error';
}

function  setSuccess(input){

 const FormControl  = input.parentElement; // Form-Control
    FormControl.className= 'form-control success';
}


function isName(usname){
    return (/^[A-Za-z. ]{3,30}$/.test(usname));
}
// console.log(emailValue);
function isEmail(email){
return (/^[A-Za-z._0-9]{3,}@[A-za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(email));
}
// isEmail(email.value);
 
function isNumber(Contact){
    return (/^[789][0-9]{9}$/.test(Contact));
}
function isPassword(passwordValue){
    return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*_]{8,16}$/.test(passwordValue));
}
 
function CFelilds(){
  AllFeilds.forEach((e) => e.value = "" );
  ShowAlert();
  
}
function ShowAlert(){
  
    if(flag){
        msg.innerText = 'Your Form is Submitted';
        Alert.style.visibility = 'visible'; 
       
       }else{
        msg.innerText = 'Form not Submitted';
        Alert.style.visibility = 'visible'; 
        Alert.style.color = 'red'; 
       
       }
      
    setTimeout(() =>{
        Alert.style.visibility = 'hidden';     
        
    },1500)
    Delete.addEventListener('click',() =>{
        Alert.style.visibility = 'hidden';    
       });
}
