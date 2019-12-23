
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
var user;
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
                user=users[i];
                
            }
        }
    }

    console.log(isLoggedIn);
}

function handleLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                return true;
            }
        }
    }
    if(!isLoggedIn){
        alert("ke5a");
        return false;
    }
}

function handleLogout(){
    window.location.href = "index.html";
}

function loadAboutUs(){
    document.getElementById("container").innerHTML =`<div  class="paragraph" id="paragraph">
    <p>
        <h1>About Us</h1>
        <br>
        Unit 22 is an Egyptian company that was established in 2007 under the name “Masterpiece” that later in 2011 evolved to “The Hub Production” and starting 2016 “Unit 22” was brought to life! “Unit 22” is shielded with years of experience, in both local and regional events. Our professional team members are sharp event hunters with spines of talent and creativity, dedicated to make your brand stand out through exceptional event management services. Our fresh approach in event execution is tailored to suit your strategic vision and defined milestones. Aided by our network of preferred vendors, the industry’s top suppliers and connections to local and international entertainment providers, rest assured that your event will be the talk of town.
    </p>


</div>`
}
function loadHome(){
    document.getElementById("container").innerHTML ="";
}

//index changes
window.onload = function(){
    if(user){
        document.getElementById("loginLink").setAttribute('onclick','handleLogout()');
        document.getElementById("loginLink").innerHTML = "<li>Logout</li>";
    }
}