
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

function isUser(username,password){
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                return users[i];
                
            }
        }
    }
    return false
}

var user;
var isLoggedIn = false;
var isAdmin = false;

if(window.location.href.indexOf("username=") > 0){
    var startIndexUsername = window.location.href.indexOf("username=") + 9;
    var endIndexUsername = window.location.href.indexOf("&password");

    var startIndexPassword = window.location.href.indexOf("password=") + 9;

    var username = window.location.href.substring(startIndexUsername,endIndexUsername);
    var password = window.location.href.substring(startIndexPassword);

    if(isUser(username,password)){
        user=isUser(username,password);
        isLoggedIn = true;
        isAdmin = user.admin;
        
    }
    else{
        user = {
            name:username,
            pass:password,
            admin:false
        }
        users.push(user);
        isLoggedIn = true;
        isAdmin = user.admin;
    }

    console.log(isLoggedIn);
    console.log(users);
}

function handleLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(isUser(username,password)){
        return true
    }
    if(!isLoggedIn){
        alert("ke5a");
        return false;
    }
}

function handleSignup(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            alert("username already exist!")
            return false;
        }
        if(/\s/.test(username) || /\s/.test(password)){
            alert("username or password cant contain spaces!")
            return false;
        }
    }
    return true;
}

function loadLogin(){
    window.location.href = "login.html"
}

function handleLogout(){
    window.location.href = "index.html";
}

function loadSignup(){
    document.getElementById("signForm").innerHTML = `
    <img src="designs/logopic.png" alt="login logo" style="width:500px;height:450px;">
    <form onsubmit="javascript: return handleSignup()" action="index.html">
    <label for="username"> User Name: </label><br>
    <input type="text" name="username" class="loginbox" id="username"><br>
    <label for="password"> Password: </label><br>
    <input type="password" name="password" class="loginbox" id="password">
    <br>
    <button>Sign Up</button>
    <br>
    <p>already a member? click here to <a onclick="loadSignin()">sign in</a></p>
    </form>
    `
}

function loadSignin(){
    document.getElementById("signForm").innerHTML = `
    <img src="designs/logopic.png" alt="login logo" style="width:500px;height:450px;">
    <form onsubmit="javascript: return handleLogin()" action="index.html">
    <label for="username"> User Name: </label><br>
    <input type="text" name="username" class="loginbox" id="username"><br>
    <label for="password"> Password: </label><br>
    <input type="password" name="password" class="loginbox" id="password">
    <br>
    <button>Sign In</button>
    <br>
    <p>new here? click here to <a onclick="loadSignup()">sign up</a></p>
    </form>
    `
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

var events = [
    {
        name:"first",
        _id:"001",
        date:new Date(),
        status:true,
        participants:["abdo","bgdo"]
    }
];

function loadEvents(){

}

function addParticipant(event){
    for(var i = 0 ; i < events.length ; i++){
        
    }
}
