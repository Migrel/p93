var SeuNome = ""

function addUser(){
    SeuNome = document.getElementById("userName").value;
    localStorage.setItem("keyName", SeuNome);
    window.location = "kwitterRoom.html";
}