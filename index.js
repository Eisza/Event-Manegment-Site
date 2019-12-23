var users = [
    {
        name:"YasserRahmo",
        pass:"7amada",
        admin:true
    },
    {
        name:"EisaEssam",
        pass:"7amada",
        admin:true
    },
    {
        name:"AbdulrahmanAshraf",
        pass:"7amada",
        admin:true
    },
    {
        name:"EsraaOsama",
        pass:"7amada",
        admin:true
    },
    {
        name:"MohammedTarek",
        pass:"7amada",
        admin:true
    }
];

var isLoggedIn = false;
var isAdmin = false;

if(window.location.href.indexOf("username=")){
    var startIndexUsername = window.location.href.indexOf("username=") + 9;
    var endIndexUsername = window.location.href.indexOf("&password");

    var startIndexPassword = window.location.href.indexOf("password=") + 9;

    var username = window.location.href.substring(startIndexUsername,endIndexUsername);
    var password = window.location.href.substring(startIndexPassword);

    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                isLoggedIn = true;
                isAdmin = users[i].admin;
                
            }
        }
    }

    console.log(isAdmin);
}
function handleLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                isLoggedIn = true;
                isAdmin = users[i].admin;
                return true;
            }
        }
    }
    if(!isLoggedIn){
        alert("username or password incorrect");
        return false;
    }
}
