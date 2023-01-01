   // Username Test
   function chkusername() {
    var username = document.getElementById("username").value.search(/^[A-Z]+[a-z]+_+[0-9]+$/);
    if (username != 0) {
        alert("اسم المستخدم غير صحيح. يجب ان يكون أول محرف كبير وبعده احرف صغيرة وارقام يفصلها علامة _  ");
        username.focus();
        username.select();
        return false;
    } else
        return true;
}
// Student name test
function chkname() {
    var myName = document.getElementById("studentname").value.search(/^[ا-ي ]+$/);
    if (myName != 0) {
        alert("اسم الطالب غير صحيح. يجب ان يكون باللغة العربية ويمكن أن يتضمن فراغات فقط.");
        myName.focus();
        myName.select();
        return false;
    } else
        return true;
}

    
//Mobile phone test
function chk_Number() 
{
    
    var num = document.getElementById("tel").value;
    var regex = /\+\d{3}-\d{9}$/;
    var isValid = regex.test(document.getElementById("tel").value);
    if (num == "" || num == null) {
        alert("You did not enter a number");
        num.focus();
       return false;
}
    if ( !isValid ){
        alert("Wrong format, you must add first three letters and seven numbers");
        num.focus();
        return false;
    }
    else
        return true;
}
//
function ch()
{
    let codeCharacters = 
    "ABCDEmnopqrsFGHIJKLMNOPQaZhijkltubcdefgRSTUVWXYvwxyz"; 
    const CODE_LENGTH = 5
    let capchaCode = ""
    
    let randomIndexGenerator = () => {
        return Math.floor( Math.random() * (5 - 0 + 1) - 0)
    }
    
    for(let index = 0; index < CODE_LENGTH; index++){
        capchaCode += codeCharacters[randomIndexGenerator()]
    }
    var z =document.getElementById("captchatxtarea").value=capchaCode;
}
//رمز التحقق كابتشا
function fan_chk()
{
    var tx=document.getElementById("captchaenter").value;
    var ch_ch=document.getElementById("captchatxtarea").value;
    if(tx==ch_ch)
    {
        
    }
    else
    alert("error")
}
// Add button
function myFunction() {

    var table = document.getElementById("tb");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell2.innerHTML = document.getElementById("username").value;
    cell3.innerHTML = document.getElementById("studentname").value;
    cell4.innerHTML = document.getElementById("program").value;
    cell1.innerHTML = "";
    
  }
  