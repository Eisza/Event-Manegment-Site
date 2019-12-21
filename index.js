var users = [
    {
        name:"Yasser Rahmo",
        pass:"7amada",
        admin:true
    },
    {
        name:"Eisa Essam",
        pass:"7amada",
        admin:true
    },
    {
        name:"Abdulrahman Ashraf",
        pass:"7amada",
        admin:true
    },
    {
        name:"Esraa Osama",
        pass:"7amada",
        admin:true
    },
    {
        name:"Mohammed Tarek",
        pass:"7amada",
        admin:true
    }
];

var isLoggedIn = false;
var isAdmin = false;

function handleLogin(){
    var username = "Yasser Rahmo"; //document.getElementById("username").value
    var password = "7amada"; //document.getElementById("password").value
    var user ;
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                isLoggedIn = true;
                isAdmin = users[i].admin;
                window.location = "index.html";
            }
        }
    }
    if(!isLoggedIn){
        alert("username or password incorrect");
    }
}
